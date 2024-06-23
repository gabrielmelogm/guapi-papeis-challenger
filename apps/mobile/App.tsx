import { Header } from '@/components/Header'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text } from 'react-native'

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Header />
			<Text>Hello World</Text>
		</SafeAreaView>
	)
}
