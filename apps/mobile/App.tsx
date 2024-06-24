import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu/Menu'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<View className="h-full flex justify-between bg-background-light dark:bg-background-dark">
				<Header />
				<Text>Hello World</Text>
				<Menu />
			</View>
		</SafeAreaView>
	)
}
