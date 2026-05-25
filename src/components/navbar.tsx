import Link from "next/link"
import { Building2, Home, Menu, Search } from "lucide-react"

const navItems = [
  { href: "/properties?purpose=buy", label: "Buy" },
  { href: "/properties?purpose=rent", label: "Rent" },
  { href: "/properties", label: "Properties" },
  { href: "/#agents", label: "Agents" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-emerald-800">
          <span className="flex size-10 items-center justify-center rounded-md bg-emerald-700 text-white">
            <Building2 className="size-5" aria-hidden="true" />
          </span>
          Zameen
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-gray-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/properties"
            className="hidden size-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:border-emerald-300 hover:text-emerald-700 sm:flex"
            aria-label="Search"
            title="Search"
          >
            <Search className="size-5" aria-hidden="true" />
          </Link>
          <Link
            href="/properties"
            className="hidden items-center gap-2 rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:flex"
          >
            <Home className="size-4" aria-hidden="true" />
            Browse
          </Link>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 md:hidden"
            aria-label="Open menu"
            title="Open menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
