import Image from "next/image"
import Link from "next/link"
import { Bath, BedDouble, Heart, MapPin, Ruler } from "lucide-react"
import type { Property } from "@/lib/properties"

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/properties/${property.id}`} className="block">
        <div className="relative aspect-[4/3]">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-md bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase text-white">
            For {property.purpose}
          </span>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-emerald-800">{property.priceLabel}</p>
            <Link href={`/properties/${property.id}`} className="mt-2 block text-xl font-semibold text-gray-950 hover:text-emerald-800">
              {property.title}
            </Link>
          </div>
          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:border-emerald-300 hover:text-emerald-700"
            aria-label="Save property"
            title="Save property"
          >
            <Heart className="size-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="size-4 text-emerald-700" aria-hidden="true" />
          {property.area}, {property.city}
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
            {property.size}
          </span>
        </div>
      </div>
    </article>
  )
}
