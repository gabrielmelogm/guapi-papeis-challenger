import { api } from '@/lib/api'
import { Image, Text, View } from 'react-native'
import { TableMenuOptions } from './TableMenuOptions'

interface TableRowProps {
	product: {
		id: string
		imageSrc: string
		title: string
		date: string
		description: string
		price: number
		quantity: number
	}
	refreshData: () => Promise<void>
}

export function TableRow({ product, refreshData }: TableRowProps) {
	async function handleDelete() {
		try {
			await api.delete('/', {
				data: { productsId: [product.id] },
			})
			await refreshData()
		} catch (error) {
			alert('Erro ao deletar')
		}
	}

	return (
		<View
			className="flex flex-row items-center gap-2 mt-2 py-3 px-2 bg-white dark:bg-badge-dark rounded-xl relative shadow-md"
			style={{ elevation: 5 }}
		>
			<Image
				source={{ uri: product.imageSrc }}
				className="w-[67px] h-[67px] object-cover rounded-md"
			/>

			<View className="w-[70%]">
				<View className="flex flex-row items-center justify-between">
					<Text className="text-xs text-icon-light dark:text-icon-dark font-semibold">
						{product.title.length >= 20
							? `${product.title.substring(0, 20)}...`
							: product.title}
					</Text>
					<Text className="text-[10px] text-icon-light dark:text-icon-dark">
						Data de Cadastro: {new Date(product.date).toLocaleDateString()}
					</Text>
				</View>

				<View className="pt-2">
					<Text className="text-[10px] text-icon-light dark:text-icon-dark">
						<Text className="font-medium text-icon-light dark:text-icon-dark">
							Descrição:
						</Text>{' '}
						{product.description.length >= 90
							? `${product.description.substring(0, 90)}...`
							: product.description}
					</Text>
				</View>

				<View className="pt-2 flex flex-row items-center justify-between">
					<Text className="flex text-[10px] text-icon-light dark:text-icon-dark">
						<Text className="font-medium">Valor:</Text> R$ {product.price}
					</Text>
					<Text className="flex text-[10px] text-icon-light dark:text-icon-dark">
						<Text className="font-medium">Quantidade:</Text> {product.quantity}{' '}
						Und.
					</Text>
				</View>
			</View>

			<TableMenuOptions onDeletePress={handleDelete} />
		</View>
	)
}
