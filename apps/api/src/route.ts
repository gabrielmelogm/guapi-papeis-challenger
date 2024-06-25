import express from 'express'

import path from 'node:path'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import multer from 'multer'
import { storage } from './lib/storage'
import { ProductsRepository } from './repositories/products.repository'

const route = Router()

const prisma = new PrismaClient()

const repository = new ProductsRepository(prisma)

const uploadsDir = path.join(__dirname, '../uploads')

route.use('/uploads', express.static(uploadsDir))

route.get('/:id', async (req, res) =>
	res.status(200).send(await repository.findOne(req.params.id)),
)

route.get('/', async (_, res) =>
	res.status(200).send(await repository.getProducts()),
)

const upload = multer({ storage: storage })

route.post('/', upload.single('file'), async (req, res) => {
	const { path: filePath } = req.file as any

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

route.put('/:id', async (req, res) => {
	let imageUrl = ''

	const up = upload.single('file')
	up(req, res, async (err) => {
		if (err instanceof multer.MulterError) {
			imageUrl = ''
		}

		imageUrl = req.file?.path as any

		if (!imageUrl) {
			return res.status(200).send(
				await repository.update(
					{
						name: req.body.name,
						description: req.body.description,
						value: Number.parseFloat(req.body.value),
						quantity: Number.parseFloat(req.body.quantity),
					},
					req.params.id,
				),
			)
		}

		return res.status(200).send(
			await repository.update(
				{
					name: req.body.name,
					description: req.body.description,
					value: Number.parseFloat(req.body.value),
					quantity: Number.parseFloat(req.body.quantity),
					imageUrl,
				},
				req.params.id,
			),
		)
	})
})

route.delete('/', async (req, res) =>
	res.status(200).send(await repository.deleteMany(req.body?.productsId)),
)

export { route }
