import { ReactNode } from 'react'
import { ChangeTheme } from './ChangeTheme'
import { CreateProducts } from './CreateProducts'
import { Products } from './Products'

export interface ScreenProps {
	title: string
	component: ReactNode
}

export const screens: ScreenProps[] = [
	{
		title: 'Produtos',
		component: <Products />,
	},
	{
		title: 'Criar Produto',
		component: <CreateProducts />,
	},
	{
		title: 'Configurações',
		component: <ChangeTheme />,
	},
]
