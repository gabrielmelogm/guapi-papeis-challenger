import { faker } from '@faker-js/faker/locale/pt_BR'

import { PrismaClient } from '@prisma/client'
import { ProductProps } from '../src/models/Product'

const prisma = new PrismaClient({
	log: ['error'],
})

async function main() {
	console.log('Starting seeds...')

	const products: ProductProps[] = []

	for (let i = 1; i <= 1000; i++) {
		const createdProduct = {
			name: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			quantity: faker.number.int({ min: 1, max: 100 }),
			imageUrl: faker.image.urlPicsumPhotos(),
			value: Number.parseFloat(faker.commerce.price({ dec: 2 })),
		}

		products.push(createdProduct)
	}

	await prisma.product.createMany({
		data: products,
	})

	console.log('Seeds finished!')
}

main()
