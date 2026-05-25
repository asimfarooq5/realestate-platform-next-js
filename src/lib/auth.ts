import "server-only"

import { randomUUID, timingSafeEqual, createHmac } from "node:crypto"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import bcrypt from "bcryptjs"
import { cookies } from "next/headers"

export type UserRole = "buyer" | "seller" | "agent"

export type PublicUser = {
  id: string
  name: string
  email: string
  role: UserRole
}

type StoredUser = PublicUser & {
  passwordHash: string
  createdAt: string
}

const sessionCookieName = "zameen_session"
const usersFile = path.join(process.cwd(), "data", "users.json")

export async function createUser(input: {
  name: string
  email: string
  password: string
  role: UserRole
}) {
  const name = input.name.trim()
  const email = normalizeEmail(input.email)

  if (name.length < 2) {
    throw new AuthError("Please enter your full name.")
  }

  validateEmail(email)
  validatePassword(input.password)

  const users = await readUsers()
  const existingUser = users.find((user) => user.email === email)

  if (existingUser) {
    throw new AuthError("An account with this email already exists.")
  }

  const user: StoredUser = {
    id: randomUUID(),
    name,
    email,
    role: input.role,
    passwordHash: await bcrypt.hash(input.password, 12),
    createdAt: new Date().toISOString(),
  }

  users.push(user)
  await writeUsers(users)

  return toPublicUser(user)
}

export async function authenticateUser(emailInput: string, password: string) {
  const email = normalizeEmail(emailInput)
  validateEmail(email)

  const users = await readUsers()
  const user = users.find((item) => item.email === email)

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new AuthError("Invalid email or password.")
  }

  return toPublicUser(user)
}

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get(sessionCookieName)?.value

  if (!token) {
    return null
  }

  const session = verifySessionToken(token)

  if (!session) {
    return null
  }

  const users = await readUsers()
  const user = users.find((item) => item.id === session.userId)

  return user ? toPublicUser(user) : null
}

export function createSessionCookie(user: PublicUser) {
  return {
    name: sessionCookieName,
    value: createSessionToken(user),
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    },
  }
}

export function clearedSessionCookie() {
  return {
    name: sessionCookieName,
    value: "",
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0,
    },
  }
}

export function parseRole(value: FormDataEntryValue | null): UserRole {
  if (value === "seller" || value === "agent") {
    return value
  }

  return "buyer"
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "AuthError"
  }
}

async function readUsers(): Promise<StoredUser[]> {
  try {
    const content = await readFile(usersFile, "utf8")
    return JSON.parse(content) as StoredUser[]
  } catch (error) {
    if (isFileNotFoundError(error)) {
      return []
    }

    throw error
  }
}

async function writeUsers(users: StoredUser[]) {
  await mkdir(path.dirname(usersFile), { recursive: true })
  await writeFile(usersFile, `${JSON.stringify(users, null, 2)}\n`)
}

function createSessionToken(user: PublicUser) {
  const payload = encodeJson({
    userId: user.id,
    email: user.email,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7,
  })
  const signature = sign(payload)

  return `${payload}.${signature}`
}

function verifySessionToken(token: string) {
  const [payload, signature] = token.split(".")

  if (!payload || !signature || !safeEqual(signature, sign(payload))) {
    return null
  }

  const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
    userId: string
    email: string
    exp: number
  }

  return session.exp > Date.now() ? session : null
}

function encodeJson(value: unknown) {
  return Buffer.from(JSON.stringify(value)).toString("base64url")
}

function sign(value: string) {
  return createHmac("sha256", getAuthSecret()).update(value).digest("base64url")
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer)
}

function getAuthSecret() {
  return process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET ?? "development-only-zameen-auth-secret"
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

function validateEmail(email: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new AuthError("Please enter a valid email address.")
  }
}

function validatePassword(password: string) {
  if (password.length < 8) {
    throw new AuthError("Password must be at least 8 characters.")
  }
}

function toPublicUser(user: StoredUser): PublicUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }
}

function isFileNotFoundError(error: unknown) {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT"
}
