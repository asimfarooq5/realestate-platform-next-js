import Link from "next/link"
import { ArrowRight, Building, MapPinned } from "lucide-react"

const cities = [
  { name: "Lahore", listings: "1", areas: "DHA, Gulberg, Bahria Town" },
  { name: "Karachi", listings: "1", areas: "Clifton, DHA, Gulshan" },
  { name: "Islamabad", listings: "2", areas: "F-11, G-13, Bahria Enclave" },
  { name: "Multan", listings: "1", areas: "Bosan Road, Cantt, DHA" },
  { name: "Faisalabad", listings: "1", areas: "Canal Road, Eden Valley" },
]

export function CitiesSection() {
  return (
    <section id="rent" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            <MapPinned className="size-4" aria-hidden="true" />
            Popular cities
          </p>
          <h2 className="text-3xl font-bold text-gray-950">Search where the market is moving</h2>
          <p className="mt-3 text-gray-600">
            Start with Pakistan&apos;s most active property markets and narrow your search by area,
            budget, and property type.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={`/properties?city=${encodeURIComponent(city.name)}`}
              className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <span className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                  <Building className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-lg font-semibold text-gray-950">{city.name}</span>
                  <span className="mt-1 block text-sm text-gray-600">{city.listings} listings</span>
                  <span className="mt-1 block text-xs text-gray-500">{city.areas}</span>
                </span>
              </span>
              <ArrowRight className="size-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-700" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
