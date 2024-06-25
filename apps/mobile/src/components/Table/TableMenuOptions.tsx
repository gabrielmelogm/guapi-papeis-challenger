import MenuIcon from '@/assets/icons/options.svg'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export function TableMenuOptions(props: { onDeletePress: () => void }) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<View className="absolute top-2 right-1">
			<TouchableOpacity className="p-1" onPress={() => setIsOpen(true)}>
				<MenuIcon fill={'#444648'} />
			</TouchableOpacity>

			<View
				className={
					'w-[70px] bg-badge-light dark:bg-badge-dark dark:border-border-dark absolute right-5 flex items-center rounded-[4px]'
				}
				style={{ elevation: 5, display: isOpen ? 'flex' : 'none' }}
			>
				<TouchableOpacity onPress={() => setIsOpen(false)}>
					<Text className="border-b border-[#E9ECEF] dark:border-border-dark py-1 px-2 text-icon-light dark:text-icon-dark">
						Editar
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						props.onDeletePress()
						setIsOpen(false)
					}}
				>
					<Text className="py-1 px-2 text-icon-light dark:text-icon-dark">
						Excluir
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
