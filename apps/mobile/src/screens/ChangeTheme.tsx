import { container } from '@/styles/container'
import { useState } from 'react'
import { Platform, Switch, Text, View } from 'react-native'

export function ChangeTheme() {
	const [isEnabled, setIsEnabled] = useState(false)

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	return (
		<View className={container}>
			<View
				className={`flex flex-row items-center justify-between bg-badge-light dark:bg-badge-dark rounded-xl px-2 ${Platform.OS === 'ios' && 'py-2'}`}
				style={{ elevation: 5 }}
			>
				<Text className="text-sm font-bold">Trocar tema</Text>
				<Switch
					trackColor={{ false: '#f5f5f5', true: '#4C4C4D' }}
					thumbColor={isEnabled ? '#E9EAF0' : '#4C4C4D'}
					onValueChange={toggleSwitch}
					value={isEnabled}
					style={{ elevation: 5 }}
				/>
			</View>
		</View>
	)
}
