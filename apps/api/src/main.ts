import cors from 'cors'
import express from 'express'
import { route } from './route'

process.on('SIGTERM', () => process.exit())

export const app = express()

app.use(
	cors({
		origin: ['*', '0.0.0.0'],
	}),
)

app.use(express.json())
app.use(route)

if (process.env.NODE_ENV !== 'test') {
	const PORT = process.env.PORT || '3333'

	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`)
	})
}
