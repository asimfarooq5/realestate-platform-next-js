export type PropertyPurpose = "buy" | "rent"
export type PropertyType = "house" | "apartment" | "plot" | "commercial"

export type Property = {
  id: string
  title: string
  purpose: PropertyPurpose
  type: PropertyType
  city: string
  area: string
  address: string
  price: number
  priceLabel: string
  image: string
  images: string[]
  beds: number
  baths: number
  size: string
  description: string
  agent: {
    name: string
    phone: string
    email: string
  }
  featured: boolean
}

export const propertyTypes: { value: PropertyType; label: string }[] = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "plot", label: "Plot" },
  { value: "commercial", label: "Commercial" },
]

export const purposes: { value: PropertyPurpose; label: string }[] = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
]

export const properties: Property[] = [
  {
    id: "modern-family-villa-dha-lahore",
    title: "Modern family villa in DHA",
    purpose: "buy",
    type: "house",
    city: "Lahore",
    area: "DHA Phase 6",
    address: "Street 14, DHA Phase 6, Lahore",
    price: 48000000,
    priceLabel: "PKR 4.8 Crore",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    beds: 5,
    baths: 6,
    size: "1 Kanal",
    description:
      "A bright, move-in-ready villa with generous bedrooms, a double-height lounge, separate drawing and dining rooms, and parking for two cars.",
    agent: {
      name: "Ayesha Khan",
      phone: "+92 300 1112233",
      email: "ayesha@zameen.example",
    },
    featured: true,
  },
  {
    id: "bright-apartment-clifton-karachi",
    title: "Bright apartment near Clifton",
    purpose: "buy",
    type: "apartment",
    city: "Karachi",
    area: "Clifton Block 5",
    address: "Block 5, Clifton, Karachi",
    price: 16500000,
    priceLabel: "PKR 1.65 Crore",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    ],
    beds: 3,
    baths: 3,
    size: "1,850 sqft",
    description:
      "A well-kept apartment with open living space, city views, standby power, elevator access, and quick access to Clifton commercial areas.",
    agent: {
      name: "Bilal Ahmed",
      phone: "+92 321 4445566",
      email: "bilal@zameen.example",
    },
    featured: true,
  },
  {
    id: "corner-commercial-plot-blue-area",
    title: "Corner commercial plot",
    purpose: "buy",
    type: "commercial",
    city: "Islamabad",
    area: "Blue Area",
    address: "Blue Area, Islamabad",
    price: 72000000,
    priceLabel: "PKR 7.2 Crore",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    ],
    beds: 0,
    baths: 0,
    size: "12 Marla",
    description:
      "A high-visibility corner plot in Islamabad's main business district, suitable for offices, retail, or mixed-use development.",
    agent: {
      name: "Hamza Malik",
      phone: "+92 333 7778899",
      email: "hamza@zameen.example",
    },
    featured: true,
  },
  {
    id: "canal-road-rental-house-faisalabad",
    title: "Canal Road rental house",
    purpose: "rent",
    type: "house",
    city: "Faisalabad",
    area: "Canal Road",
    address: "Canal Road, Faisalabad",
    price: 180000,
    priceLabel: "PKR 1.8 Lac/month",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    beds: 4,
    baths: 4,
    size: "10 Marla",
    description:
      "A practical rental home with spacious rooms, a family lounge, servant quarter, and access to schools, markets, and main roads.",
    agent: {
      name: "Sara Nadeem",
      phone: "+92 345 2223344",
      email: "sara@zameen.example",
    },
    featured: false,
  },
  {
    id: "bahria-enclave-apartment-islamabad",
    title: "Furnished apartment in Bahria Enclave",
    purpose: "rent",
    type: "apartment",
    city: "Islamabad",
    area: "Bahria Enclave",
    address: "Sector C, Bahria Enclave, Islamabad",
    price: 95000,
    priceLabel: "PKR 95 Thousand/month",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1200&q=80",
    ],
    beds: 2,
    baths: 2,
    size: "1,150 sqft",
    description:
      "A furnished apartment with balcony views, secure building access, basement parking, and a quiet residential setting.",
    agent: {
      name: "Usman Raza",
      phone: "+92 300 5556677",
      email: "usman@zameen.example",
    },
    featured: false,
  },
  {
    id: "dha-multan-residential-plot",
    title: "Residential plot in DHA Multan",
    purpose: "buy",
    type: "plot",
    city: "Multan",
    area: "DHA Multan",
    address: "Sector V, DHA Multan",
    price: 11200000,
    priceLabel: "PKR 1.12 Crore",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    ],
    beds: 0,
    baths: 0,
    size: "1 Kanal",
    description:
      "A possession-ready residential plot on a developed street with utilities nearby and strong long-term investment appeal.",
    agent: {
      name: "Danish Ali",
      phone: "+92 306 8889900",
      email: "danish@zameen.example",
    },
    featured: false,
  },
]

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured)
}

export function getPropertyById(id: string) {
  return properties.find((property) => property.id === id)
}

export function getCities() {
  return Array.from(new Set(properties.map((property) => property.city))).sort()
}

export type PropertyFilters = {
  q?: string
  city?: string
  purpose?: string
  type?: string
  minPrice?: string
  maxPrice?: string
}

export function filterProperties(filters: PropertyFilters) {
  const query = normalize(filters.q)
  const city = normalize(filters.city)
  const purpose = normalize(filters.purpose)
  const type = normalize(filters.type)
  const minPrice = Number(filters.minPrice) || 0
  const maxPrice = Number(filters.maxPrice) || Number.POSITIVE_INFINITY

  return properties.filter((property) => {
    const searchable = normalize(
      [property.title, property.city, property.area, property.address, property.type, property.purpose].join(" ")
    )

    return (
      (!query || searchable.includes(query)) &&
      (!city || normalize(property.city) === city) &&
      (!purpose || property.purpose === purpose) &&
      (!type || property.type === type) &&
      property.price >= minPrice &&
      property.price <= maxPrice
    )
  })
}

function normalize(value?: string) {
  return value?.trim().toLowerCase() ?? ""
}
