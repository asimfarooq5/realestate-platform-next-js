import { getPropertyById } from "@/lib/properties"

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    return Response.json({ error: "Property not found" }, { status: 404 })
  }

  return Response.json({ property })
}
