import AddIcon from '@/assets/icons/add.svg'
import ProductsButton from '@/assets/icons/products.svg'
import ToolButton from '@/assets/icons/tool.svg'
import { useScreens } from '@/hooks/useScreens'
import { Text, TouchableOpacity, View } from 'react-native'

export function Header() {
	const { currentScreen, changeScreen } = useScreens()

	const icons = [
		{
			title: 'Action-Produtos',
			icon: <ProductsButton stroke={'#FFFFFF'} width={24} height={24} />,
		},
		{
			title: 'Produtos',
			icon: <ProductsButton stroke={'#FFFFFF'} width={24} height={24} />,
		},
		{
			title: 'Configurações',
			icon: <ToolButton stroke={'#FFFFFF'} width={28} height={28} />,
		},
	]

	return (
		<View className="w-full h-[18vh] rounded-b-xl bg-primary flex justify-center items-center">
			<View className="pt-10">
				<View className="w-[90%] flex flex-row items-center justify-between">
					<View className="flex flex-row justify-center gap-2">
						<View className="w-[28px] h-[28px]">
							{icons.find((icon) => icon.title === currentScreen.title)?.icon}
						</View>
						<Text className="text-base text-white">
							{icons
								.find((icon) => icon.title === currentScreen.title)
								?.title.includes('Action-')
								? icons
										.find((icon) => icon.title === currentScreen.title)
										?.title.replace('Action-', '')
								: icons.find((icon) => icon.title === currentScreen.title)
										?.title}
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => changeScreen('Action-Produtos')}
						className={
							currentScreen.title === 'Action-Produtos' ? 'opacity-0' : ''
						}
						disabled={currentScreen.title === 'Action-Produtos'}
					>
						<AddIcon />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
