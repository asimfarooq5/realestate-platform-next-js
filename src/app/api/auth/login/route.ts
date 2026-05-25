import { NextResponse, type NextRequest } from "next/server"
import { AuthError, authenticateUser, createSessionCookie } from "@/lib/auth"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const redirectUrl = new URL("/properties", request.url)

  try {
    const user = await authenticateUser(
      String(formData.get("email") ?? ""),
      String(formData.get("password") ?? "")
    )
    const response = NextResponse.redirect(redirectUrl, { status: 303 })
    const session = createSessionCookie(user)
    response.cookies.set(session.name, session.value, session.options)

    return response
  } catch (error) {
    const message = error instanceof AuthError ? error.message : "Unable to sign in."
    const loginUrl = new URL("/auth/login", request.url)
    loginUrl.searchParams.set("error", message)

    return NextResponse.redirect(loginUrl, { status: 303 })
  }
}
