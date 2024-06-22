import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import multer from 'multer'
import { storage } from './lib/storage'
import { ProductsRepository } from './repositories/products.repository'

const route = Router()

const prisma = new PrismaClient()

const repository = new ProductsRepository(prisma)

route.get('/', async (_, res) =>
	res.status(200).send(await repository.getProducts()),
)

const upload = multer({ storage: storage })

route.post('/', upload.single('file'), async (req, res) => {
	const { path: filePath } = req.file

	return res.status(201).send(
		await repository.createProduct({
			name: req.body.name,
			description: req.body.description,
			value: Number.parseFloat(req.body.value),
			quantity: Number.parseFloat(req.body.quantity),
			imageUrl: filePath,
		}),
	)
})

route.delete('/', async (req, res) =>
	res.status(200).send(await repository.deleteMany(req.body?.productsId)),
)

export { route }
