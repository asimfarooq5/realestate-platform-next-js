import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Bath, BedDouble, Building2, Mail, MapPin, Phone, Ruler } from "lucide-react"
import { getPropertyById, properties } from "@/lib/properties"

type PropertyPageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }))
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    return {
      title: "Property not found",
    }
  }

  return {
    title: `${property.title} | Zameen`,
    description: `${property.priceLabel} - ${property.area}, ${property.city}`,
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  return (
    <div className="bg-gray-50">
      <section className="border-b border-emerald-100 bg-white">
        <div className="container mx-auto px-4 py-6">
          <Link href="/properties" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
            Back to properties
          </Link>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                For {property.purpose}
              </p>
              <h1 className="text-3xl font-bold text-gray-950 md:text-5xl">{property.title}</h1>
              <p className="mt-3 flex items-center gap-2 text-gray-600">
                <MapPin className="size-5 text-emerald-700" aria-hidden="true" />
                {property.address}
              </p>
            </div>

            <aside className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Price</p>
              <p className="mt-1 text-3xl font-bold text-emerald-800">{property.priceLabel}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-gray-700">
                <span className="rounded-md bg-white p-3">
                  <BedDouble className="mb-2 size-5 text-gray-500" aria-hidden="true" />
                  {property.beds || "-"} beds
                </span>
                <span className="rounded-md bg-white p-3">
                  <Bath className="mb-2 size-5 text-gray-500" aria-hidden="true" />
                  {property.baths || "-"} baths
                </span>
                <span className="rounded-md bg-white p-3">
                  <Ruler className="mb-2 size-5 text-gray-500" aria-hidden="true" />
                  {property.size}
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-10 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                priority
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              {property.images.slice(1).map((image, index) => (
                <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={image}
                    alt={`${property.title} photo ${index + 2}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-950">Overview</h2>
            <p className="mt-4 leading-7 text-gray-600">{property.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoItem label="Property type" value={property.type} />
              <InfoItem label="City" value={property.city} />
              <InfoItem label="Area" value={property.area} />
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
              <Building2 className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-gray-500">Listed by</p>
              <h2 className="text-xl font-bold text-gray-950">{property.agent.name}</h2>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <a
              href={`tel:${property.agent.phone.replaceAll(" ", "")}`}
              className="flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call agent
            </a>
            <a
              href={`mailto:${property.agent.email}?subject=${encodeURIComponent(property.title)}`}
              className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              <Mail className="size-5" aria-hidden="true" />
              Email agent
            </a>
          </div>
        </aside>
      </section>
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-gray-50 p-4">
      <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
      <p className="mt-1 font-semibold capitalize text-gray-950">{value}</p>
    </div>
  )
}
