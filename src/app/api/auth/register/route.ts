import { NextResponse, type NextRequest } from "next/server"
import { AuthError, createSessionCookie, createUser, parseRole } from "@/lib/auth"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const redirectUrl = new URL("/properties", request.url)

  try {
    const user = await createUser({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      role: parseRole(formData.get("role")),
    })
    const response = NextResponse.redirect(redirectUrl, { status: 303 })
    const session = createSessionCookie(user)
    response.cookies.set(session.name, session.value, session.options)

    return response
  } catch (error) {
    const message = error instanceof AuthError ? error.message : "Unable to create account."
    const loginUrl = new URL("/auth/register", request.url)
    loginUrl.searchParams.set("error", message)

    return NextResponse.redirect(loginUrl, { status: 303 })
  }
}
