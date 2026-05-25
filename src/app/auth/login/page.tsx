import Link from "next/link"
import { Building2, Mail, LockKeyhole } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="bg-gray-50">
      <section className="container mx-auto grid min-h-[calc(100vh-4rem)] gap-10 px-4 py-12 lg:grid-cols-[1fr_460px] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Welcome back
          </p>
          <h1 className="text-4xl font-bold text-gray-950 md:text-5xl">Sign in to manage your property journey</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Access saved searches, favorite listings, inquiries, and property management tools.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-md bg-emerald-700 text-white">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-gray-950">Sign in</h2>
              <p className="text-sm text-gray-600">Authentication wiring comes next.</p>
            </div>
          </div>

          <form className="grid gap-4">
            <label className="rounded-md border border-gray-200 px-4 py-3">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase text-gray-500">
                <Mail className="size-4" aria-hidden="true" />
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-2 w-full bg-transparent text-sm font-medium outline-none"
                placeholder="you@example.com"
              />
            </label>

            <label className="rounded-md border border-gray-200 px-4 py-3">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase text-gray-500">
                <LockKeyhole className="size-4" aria-hidden="true" />
                Password
              </span>
              <input
                type="password"
                name="password"
                className="mt-2 w-full bg-transparent text-sm font-medium outline-none"
                placeholder="••••••••"
              />
            </label>

            <button
              type="button"
              className="rounded-md bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Sign in
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-600">
            New to Zameen?{" "}
            <Link href="/auth/register" className="font-semibold text-emerald-700 hover:text-emerald-900">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
