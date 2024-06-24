import { container } from '@/styles/container'
import { useColorScheme } from 'nativewind'
import { Platform, Switch, Text, View } from 'react-native'

export function ChangeTheme() {
	const { colorScheme, toggleColorScheme } = useColorScheme()

	return (
		<View className={container}>
			<View
				className={`flex flex-row items-center justify-between bg-badge-light dark:bg-badge-dark rounded-xl px-2 ${Platform.OS === 'ios' && 'py-2'}`}
				style={{ elevation: 5 }}
			>
				<Text className="text-sm font-bold text-icon-light dark:text-icon-dark">
					Trocar tema
				</Text>
				<Switch
					trackColor={{ false: '#f5f5f5', true: '#4C4C4D' }}
					thumbColor={colorScheme === 'dark' ? '#E9EAF0' : '#4C4C4D'}
					onValueChange={toggleColorScheme}
					value={colorScheme === 'dark'}
					style={{ elevation: 5 }}
				/>
			</View>
		</View>
	)
}
