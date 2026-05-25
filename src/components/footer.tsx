import Link from "next/link"
import { Building2, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = ["Properties", "Agents", "Mortgage", "Help Center"]

export function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-gray-950 text-gray-200">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <span className="flex size-10 items-center justify-center rounded-md bg-emerald-600">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            Zameen
          </Link>
          <p className="max-w-md text-sm leading-6 text-gray-400">
            A practical real estate marketplace for discovering verified homes, plots, and commercial
            spaces across Pakistan.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Explore</h2>
          <div className="grid gap-3 text-sm text-gray-400">
            {footerLinks.map((link) => (
              <Link key={link} href="#" className="transition hover:text-emerald-300">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Contact</h2>
          <div className="grid gap-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Phone className="size-4 text-emerald-300" aria-hidden="true" />
              +92 300 1234567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="size-4 text-emerald-300" aria-hidden="true" />
              hello@zameen.example
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-emerald-300" aria-hidden="true" />
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-gray-500">
        © 2026 Zameen. All rights reserved.
      </div>
    </footer>
  )
}
