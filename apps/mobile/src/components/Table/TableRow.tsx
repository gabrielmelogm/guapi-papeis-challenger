import { Image, Text, View } from 'react-native'
import { TableMenuOptions } from './TableMenuOptions'

export function TableRow() {
	return (
		<View
			className="flex flex-row items-center gap-2 py-3 px-2 bg-white rounded-xl relative shadow-md"
			style={{ elevation: 5 }}
		>
			<Image
				source={{ uri: 'https://placehold.co/600x400/png' }}
				className="w-[67px] h-[67px] object-cover rounded-md"
			/>

			<View className="w-[70%]">
				<View className="flex flex-row items-center justify-between">
					<Text className="text-xs font-semibold">Bolo de Chocolate</Text>
					<Text className="text-[10px]">Data de Cadastro: 20/06/2024</Text>
				</View>

				<View className="pt-2">
					<Text className="text-[10px]">
						<Text className="font-medium">Descrição:</Text> Nosso Bolo de
						Chocolate Clássico é um deleite irresistível. Com massa fofinha e
						úmida feita...
					</Text>
				</View>

				<View className="pt-2 flex flex-row items-center justify-between">
					<Text className="flex text-[10px]">
						<Text className="font-medium">Valor:</Text> R$ 24,99
					</Text>
					<Text className="flex text-[10px]">
						<Text className="font-medium">Quantidade:</Text> 20 Und.
					</Text>
				</View>
			</View>

			<TableMenuOptions />
		</View>
	)
}
