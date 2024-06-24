import BoxButton from '@/assets/icons/box.svg'
import HomeButton from '@/assets/icons/home.svg'
import MenuButton from '@/assets/icons/menu.svg'
import ProductsButton from '@/assets/icons/products.svg'
import ToolButton from '@/assets/icons/tool.svg'
import { useState } from 'react'
import { View } from 'react-native'
import { Nav } from './Nav'

export const MENU_HEIGHT = 80
const BUTTON_COLOR = '#828282'

export function Menu() {
	const [currentTab, setCurrentTab] = useState('Produtos')

	const tabs = [
		{
			icon: <HomeButton color={BUTTON_COLOR} />,
			title: 'Home',
		},
		{
			icon: <ProductsButton stroke={BUTTON_COLOR} />,
			title: 'Produtos',
		},
		{
			icon: <BoxButton stroke={BUTTON_COLOR} />,
			title: 'Estoque',
		},
		{
			icon: <ToolButton stroke={BUTTON_COLOR} />,
			title: 'Configurações',
		},
		{
			icon: <MenuButton stroke={BUTTON_COLOR} />,
			title: 'Menu',
		},
	]

	return (
		<View
			className={`w-full h-[${MENU_HEIGHT}px] flex items-center justify-center dark:bg-badge-dark`}
		>
			<View className="w-[90%] py-2 flex flex-row items-center gap-2 justify-between">
				{tabs.map((tab) => (
					<Nav
						key={tab.title}
						icon={<View className="h-[40px]">{tab.icon}</View>}
						title={tab.title}
						current={currentTab === tab.title}
						onClick={() => setCurrentTab(tab.title)}
					/>
				))}
			</View>
		</View>
	)
}
