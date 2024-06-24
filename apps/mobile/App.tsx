import { Main } from '@/Main'
import { ScreensProvider } from '@/hooks/useScreens'
import { StatusBar } from 'expo-status-bar'

export default function App() {
	return (
		<ScreensProvider>
			<StatusBar style="auto" />
			<Main />
		</ScreensProvider>
	)
}
