import { PrismaClient } from '@prisma/client'
import { Product } from '../models/Product'

export class ProductsRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async getProducts() {
		return await this.prisma.product.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		})
	}

	async createProduct(product: Product) {
		const createdProduct = await this.prisma.product.create({
			data: {
				name: product.name,
				description: product.description,
				value: product.value,
				imageUrl: product.imageUrl,
				quantity: product.quantity,
			},
		})

		return new Product(createdProduct)
	}

	async deleteMany(productsId: string[]) {
		if (!productsId) {
			throw new Error('Ids is invalid')
		}

		return await this.prisma.product.deleteMany({
			where: {
				id: {
					in: productsId,
				},
			},
		})
	}

	async update(product: Partial<Product>, id: string) {
		return await this.prisma.product.update({
			data: product,
			where: {
				id,
			},
		})
	}
}
