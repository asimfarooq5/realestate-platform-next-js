import Image from "next/image"
import { Bath, BedDouble, Heart, MapPin, Ruler } from "lucide-react"

const properties = [
  {
    title: "Modern family villa in DHA",
    location: "DHA Phase 6, Lahore",
    price: "PKR 4.8 Crore",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    beds: 5,
    baths: 6,
    area: "1 Kanal",
  },
  {
    title: "Bright apartment near Clifton",
    location: "Clifton Block 5, Karachi",
    price: "PKR 1.65 Crore",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    beds: 3,
    baths: 3,
    area: "1,850 sqft",
  },
  {
    title: "Corner commercial plot",
    location: "Blue Area, Islamabad",
    price: "PKR 7.2 Crore",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    beds: 0,
    baths: 0,
    area: "12 Marla",
  },
]

export function FeaturedProperties() {
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
          <button
            type="button"
            className="w-fit rounded-md border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
          >
            View all properties
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <article key={property.title} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-md bg-white/90 text-gray-800 shadow-sm"
                  aria-label="Save property"
                  title="Save property"
                >
                  <Heart className="size-5" aria-hidden="true" />
                </button>
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-emerald-800">{property.price}</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-950">{property.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="size-4 text-emerald-700" aria-hidden="true" />
                  {property.location}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4 text-sm text-gray-700">
                  <span className="flex items-center gap-2">
                    <BedDouble className="size-4 text-gray-500" aria-hidden="true" />
                    {property.beds || "-"}
                  </span>
                  <span className="flex items-center gap-2">
                    <Bath className="size-4 text-gray-500" aria-hidden="true" />
                    {property.baths || "-"}
                  </span>
                  <span className="flex items-center gap-2">
                    <Ruler className="size-4 text-gray-500" aria-hidden="true" />
                    {property.area}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
