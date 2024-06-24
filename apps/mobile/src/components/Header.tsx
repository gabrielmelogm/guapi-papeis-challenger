import AddIcon from '@/assets/icons/add.svg'
import NotebookIcon from '@/assets/icons/notebook.svg'
import { Text, TouchableOpacity, View } from 'react-native'

export function Header() {
	return (
		<View className="w-full h-[18vh] rounded-b-xl bg-primary flex justify-center items-center">
			<View className="pt-10">
				<View className="w-[90%] flex flex-row items-center justify-between">
					<View className="flex flex-row justify-center gap-2">
						<NotebookIcon className="text-white" />
						<Text className="text-base text-white">Produtos</Text>
					</View>
					<TouchableOpacity>
						<AddIcon />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
