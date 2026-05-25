import Link from "next/link"
import { Search, SlidersHorizontal } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import { filterProperties, getCities, propertyTypes, purposes } from "@/lib/properties"

type PropertiesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams
  const filters = {
    q: getParam(params.q),
    city: getParam(params.city),
    purpose: getParam(params.purpose),
    type: getParam(params.type),
    minPrice: getParam(params.minPrice),
    maxPrice: getParam(params.maxPrice),
  }
  const results = filterProperties(filters)
  const cities = getCities()

  return (
    <div className="bg-gray-50">
      <section className="border-b border-emerald-100 bg-white">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Property search
            </p>
            <h1 className="text-4xl font-bold text-gray-950">Find properties across Pakistan</h1>
            <p className="mt-3 text-gray-600">
              Search by city, area, property type, purpose, and price range. Results update from
              the URL, so searches can be shared.
            </p>
          </div>

          <form action="/properties" className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr_auto]">
              <label className="rounded-md border border-gray-200 bg-white px-3 py-2">
                <span className="block text-xs font-semibold uppercase text-gray-500">Search</span>
                <input
                  name="q"
                  defaultValue={filters.q}
                  className="mt-1 w-full bg-transparent text-sm font-medium outline-none"
                  placeholder="City, area, or keyword"
                />
              </label>

              <label className="rounded-md border border-gray-200 bg-white px-3 py-2">
                <span className="block text-xs font-semibold uppercase text-gray-500">City</span>
                <select name="city" defaultValue={filters.city} className="mt-1 w-full bg-transparent text-sm font-medium outline-none">
                  <option value="">Any city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>

              <label className="rounded-md border border-gray-200 bg-white px-3 py-2">
                <span className="block text-xs font-semibold uppercase text-gray-500">Purpose</span>
                <select name="purpose" defaultValue={filters.purpose} className="mt-1 w-full bg-transparent text-sm font-medium outline-none">
                  <option value="">Any</option>
                  {purposes.map((purpose) => (
                    <option key={purpose.value} value={purpose.value}>
                      {purpose.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="rounded-md border border-gray-200 bg-white px-3 py-2">
                <span className="block text-xs font-semibold uppercase text-gray-500">Type</span>
                <select name="type" defaultValue={filters.type} className="mt-1 w-full bg-transparent text-sm font-medium outline-none">
                  <option value="">Any type</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="rounded-md border border-gray-200 bg-white px-3 py-2">
                <span className="block text-xs font-semibold uppercase text-gray-500">Min PKR</span>
                <input
                  name="minPrice"
                  defaultValue={filters.minPrice}
                  inputMode="numeric"
                  className="mt-1 w-full bg-transparent text-sm font-medium outline-none"
                  placeholder="0"
                />
              </label>

              <label className="rounded-md border border-gray-200 bg-white px-3 py-2">
                <span className="block text-xs font-semibold uppercase text-gray-500">Max PKR</span>
                <input
                  name="maxPrice"
                  defaultValue={filters.maxPrice}
                  inputMode="numeric"
                  className="mt-1 w-full bg-transparent text-sm font-medium outline-none"
                  placeholder="Any"
                />
              </label>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                <Search className="size-5" aria-hidden="true" />
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              {results.length} {results.length === 1 ? "property" : "properties"} found
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
              <SlidersHorizontal className="size-4 text-emerald-700" aria-hidden="true" />
              Refine filters above to narrow the results.
            </p>
          </div>
          <Link href="/properties" className="w-fit rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-emerald-300 hover:text-emerald-700">
            Clear filters
          </Link>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
            <h3 className="text-xl font-semibold text-gray-950">No matching properties</h3>
            <p className="mx-auto mt-2 max-w-xl text-gray-600">
              Try removing a price limit, broadening the location, or switching the property type.
            </p>
            <Link href="/properties" className="mt-5 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
              Show all properties
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? ""
}
