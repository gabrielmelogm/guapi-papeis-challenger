import { TableRow } from '@/components/Table/TableRow'
import { api } from '@/lib/api'
import { container } from '@/styles/container'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

interface ProductProps {
	id: number
	name: string
	description: string
	value: number
	imageUrl: string
	quantity: number
	createdAt: string
}

export function Products() {
	const [products, setProducts] = useState<ProductProps[]>([])

	async function getData() {
		console.log('Called')
		await api
			.get('/')
			.then((res) => setProducts(res.data))
			.catch((error) => console.error(error))
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getData()
	}, [])

	return (
		<View className={container}>
			<ScrollView>
				{products.map((product) => (
					<TableRow
						key={product.id}
						product={{
							title: product.name,
							imageSrc: product.imageUrl,
							description: product.description,
							date: product.createdAt,
							price: product.value,
							quantity: product.quantity,
						}}
					/>
				))}
			</ScrollView>
		</View>
	)
}
