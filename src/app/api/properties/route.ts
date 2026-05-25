import type { NextRequest } from "next/server"
import { filterProperties } from "@/lib/properties"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const properties = filterProperties({
    q: searchParams.get("q") ?? "",
    city: searchParams.get("city") ?? "",
    purpose: searchParams.get("purpose") ?? "",
    type: searchParams.get("type") ?? "",
    minPrice: searchParams.get("minPrice") ?? "",
    maxPrice: searchParams.get("maxPrice") ?? "",
  })

  return Response.json({
    count: properties.length,
    properties,
  })
}
