import { MapPin, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { propertyTypes, purposes } from "@/lib/properties"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(rgba(5,46,22,0.68),rgba(5,46,22,0.54)),url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">
            Pakistan real estate
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Find a place that fits the way you live
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Browse verified houses, apartments, plots, and commercial properties from trusted agents
            across major Pakistani cities.
          </p>
        </div>

        <form action="/properties" className="mt-9 max-w-5xl rounded-lg bg-white p-3 text-gray-900 shadow-2xl">
          <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
            <label className="flex items-center gap-3 rounded-md border border-gray-200 px-4 py-3">
              <MapPin className="size-5 text-emerald-700" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase text-gray-500">Location</span>
                <input
                  name="q"
                  className="w-full bg-transparent text-sm font-medium outline-none"
                  placeholder="City, area, or landmark"
                  aria-label="Location"
                />
              </span>
            </label>

            <label className="rounded-md border border-gray-200 px-4 py-3">
              <span className="block text-xs font-semibold uppercase text-gray-500">Purpose</span>
              <select name="purpose" className="w-full bg-transparent text-sm font-medium outline-none" aria-label="Purpose">
                {purposes.map((purpose) => (
                  <option key={purpose.value} value={purpose.value}>
                    {purpose.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="rounded-md border border-gray-200 px-4 py-3">
              <span className="block text-xs font-semibold uppercase text-gray-500">Property type</span>
              <select name="type" className="w-full bg-transparent text-sm font-medium outline-none" aria-label="Property type">
                <option value="">Any type</option>
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              <Search className="size-5" aria-hidden="true" />
              Search
            </button>
          </div>
          <Link
            href="/properties"
            className="mt-3 flex items-center gap-2 px-1 text-sm font-semibold text-emerald-700"
          >
            <SlidersHorizontal className="size-4" aria-hidden="true" />
            More filters
          </Link>
        </form>
      </div>
    </section>
  )
}
