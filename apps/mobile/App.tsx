import { Header } from '@/components/Header'
import { MENU_HEIGHT, Menu } from '@/components/Menu/Menu'
import { Products } from '@/screens/Products'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<View className="h-full relative bg-background-light dark:bg-background-dark">
				<Header />
				<View
					className={`h-screen pb-[${MENU_HEIGHT}px] pt-8 flex items-center`}
				>
					<Products />
				</View>
				<Menu />
			</View>
		</SafeAreaView>
	)
}
