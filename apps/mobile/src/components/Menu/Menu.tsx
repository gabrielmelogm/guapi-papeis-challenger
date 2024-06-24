import BoxButton from '@/assets/icons/box.svg'
import HomeButton from '@/assets/icons/home.svg'
import MenuButton from '@/assets/icons/menu.svg'
import ProductsButton from '@/assets/icons/products.svg'
import ToolButton from '@/assets/icons/tool.svg'
import { useScreens } from '@/hooks/useScreens'
import { useState } from 'react'
import { Keyboard, View } from 'react-native'
import { Nav } from './Nav'

export const MENU_HEIGHT = 80

export function Menu() {
	const { currentScreen, changeScreen } = useScreens()
	const [isKeyboardActive, setIsKeyboardActive] = useState<boolean>(false)

	function getButtonColor(title: string) {
		if (title === currentScreen.title) {
			return '#FFFFFF'
		}

		return '#828282'
	}

	const tabs = [
		{
			icon: <HomeButton stroke={getButtonColor('Home')} />,
			title: 'Home',
		},
		{
			icon: <ProductsButton stroke={getButtonColor('Produtos')} />,
			title: 'Produtos',
		},
		{
			icon: <BoxButton stroke={getButtonColor('Estoque')} />,
			title: 'Estoque',
		},
		{
			icon: <ToolButton stroke={getButtonColor('Configurações')} />,
			title: 'Configurações',
		},
		{
			icon: <MenuButton stroke={getButtonColor('Menu')} />,
			title: 'Menu',
		},
	]

	Keyboard.addListener('keyboardDidShow', () => {
		setIsKeyboardActive(true)
	})
	Keyboard.addListener('keyboardDidHide', () => {
		setIsKeyboardActive(false)
	})

	return (
		<View
			className={`w-full h-[${MENU_HEIGHT}px] ${isKeyboardActive ? 'fixed' : 'absolute'} bottom-0 flex items-center justify-center dark:bg-badge-dark`}
		>
			<View className="w-[90%] py-2 flex flex-row items-center gap-2 justify-between">
				{tabs.map((tab) => (
					<Nav
						key={tab.title}
						icon={<View className="h-[40px]">{tab.icon}</View>}
						title={tab.title}
						current={currentScreen.title === tab.title}
						onClick={() => changeScreen(tab.title)}
					/>
				))}
			</View>
		</View>
	)
}
