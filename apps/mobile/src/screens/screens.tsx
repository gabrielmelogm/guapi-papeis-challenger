import { ReactNode } from 'react'
import { ActionsProducts } from './ActionsProducts'
import { ChangeTheme } from './ChangeTheme'
import { Products } from './Products'

export interface ScreenProps {
	title: string
	component: ReactNode
}

export const screens: ScreenProps[] = [
	{
		title: 'Home',
		component: <Products />,
	},
	{
		title: 'Produtos',
		component: <ActionsProducts />,
	},
	{
		title: 'Configurações',
		component: <ChangeTheme />,
	},
]
