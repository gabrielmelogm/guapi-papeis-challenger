import MenuIcon from '@/assets/icons/options.svg'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export function TableMenuOptions() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<View className="absolute top-2 right-1 ">
			<TouchableOpacity className="p-1" onPress={() => setIsOpen(true)}>
				<MenuIcon fill={'#444648'} />
			</TouchableOpacity>

			<View
				className="w-[70px] bg-white absolute right-5 flex items-center rounded-[4px]"
				style={{ elevation: 5, display: isOpen ? 'flex' : 'none' }}
			>
				<TouchableOpacity onPress={() => setIsOpen(false)}>
					<Text className="border-b border-[#E9ECEF] py-1 px-2">Editar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setIsOpen(false)}>
					<Text className="py-1 px-2">Excluir</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
