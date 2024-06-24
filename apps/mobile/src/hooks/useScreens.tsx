import { Products } from '@/screens/Products'
import { ScreenProps, screens } from '@/screens/screens'
import { ReactNode, createContext, useContext, useState } from 'react'

type ScreensContextData = {
	currentScreen: ScreenProps
	changeScreen: (screen: string) => void
}

const Screens = createContext<ScreensContextData>({} as ScreensContextData)

export function ScreensProvider({ children }: { children: ReactNode }) {
	const [currentScreen, setCurrentScreen] = useState<ScreenProps>({
		title: 'Produtos',
		component: <Products />,
	})

	function changeScreen(screen: string) {
		const currentScreen: ScreenProps = screens.filter(
			(s) => s.title === screen,
		)[0]
		if (!currentScreen) {
			return
		}

		setCurrentScreen(currentScreen)
	}

	return (
		<Screens.Provider value={{ currentScreen, changeScreen }}>
			{children}
		</Screens.Provider>
	)
}

export function useScreens() {
	const context = useContext(Screens)
	return context
}
