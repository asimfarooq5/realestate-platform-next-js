import Link from "next/link"
import { PropertyCard } from "@/components/property-card"
import { getFeaturedProperties } from "@/lib/properties"

export function FeaturedProperties() {
  const properties = getFeaturedProperties()

  return (
    <section id="buy" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Featured listings
            </p>
            <h2 className="text-3xl font-bold text-gray-950">Homes worth a closer look</h2>
          </div>
          <Link
            href="/properties"
            className="w-fit rounded-md border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
          >
            View all properties
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
