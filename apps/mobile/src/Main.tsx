import { SafeAreaView, View } from 'react-native'
import { Header } from './components/Header'
import { MENU_HEIGHT, Menu } from './components/Menu/Menu'
import { useScreens } from './hooks/useScreens'
import { ChangeTheme } from './screens/ChangeTheme'

export function Main() {
	const { currentScreen } = useScreens()

	return (
		<SafeAreaView>
			<View className="h-full relative bg-background-light dark:bg-background-dark">
				<Header />
				<View
					className={`h-screen pb-[${MENU_HEIGHT}px] pt-8 flex items-center`}
				>
					{currentScreen.component}
				</View>
				<Menu />
			</View>
		</SafeAreaView>
	)
}
