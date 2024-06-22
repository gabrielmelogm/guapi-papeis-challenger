import z from 'zod'

const productSchema = z.object({
	id: z.string().cuid().optional(),
	name: z.string().min(1),
	description: z.string().min(1),
	value: z.number().positive(),
	imageUrl: z.string(),
	quantity: z.number().positive(),
})

export type ProductProps = z.infer<typeof productSchema>

export class Product {
	id?: string
	name: string
	description: string
	value: number
	imageUrl: string
	quantity: number

	constructor(props: ProductProps) {
		const product = productSchema.parse(props)

		this.id = product.id
		this.name = product.name
		this.description = product.description
		this.value = product.value
		this.imageUrl = product.imageUrl
		this.quantity = product.quantity
	}
}
