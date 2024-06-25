import { TableRow } from '@/components/Table/TableRow'
import { api } from '@/lib/api'
import { container } from '@/styles/container'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

interface ProductProps {
	id: string
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
		try {
			const response = await api.get('/')
			const listData = []
			for (const product of response.data) {
				if (!product.imageUrl.includes('https')) {
					product.imageUrl = `${process.env.EXPO_PUBLIC_API_URL}/${product.imageUrl}`
					listData.push(product)
				} else {
					listData.push(product)
				}
			}
			setProducts(listData)
		} catch (error) {
			console.error(error)
		}
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
							id: product.id,
							title: product.name,
							imageSrc: product.imageUrl,
							description: product.description,
							date: product.createdAt,
							price: product.value,
							quantity: product.quantity,
						}}
						refreshData={getData}
					/>
				))}
			</ScrollView>
		</View>
	)
}
