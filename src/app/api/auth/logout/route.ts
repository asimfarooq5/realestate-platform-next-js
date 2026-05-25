import { NextResponse, type NextRequest } from "next/server"
import { clearedSessionCookie } from "@/lib/auth"

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", request.url), { status: 303 })
  const session = clearedSessionCookie()
  response.cookies.set(session.name, session.value, session.options)

  return response
}
