import z from "zod"

const clothingSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be a string",
    required_error: "Name is required"
  }).min(1).max(255),
  type: z.array(
    z.enum(["shirt", "pants", "shoes", "socks", "hat", "jacket", "accessory"])
  ),
  size: z.string().min(1).max(10),
  color: z.string().min(1).max(50),
  price: z.number().positive(),
  stock: z.number().positive().int(),
  category: z.array(
    z.enum(["man, woman, child"])
  )
})

export function validateClothing(input) {
  clothingSchema.safeParse(input)
}

export function validatePartialClothing(input) {
  clothingSchema.partial().safeParse(input)
}