import {
	KeyboardTypeOptions,
	Platform,
	Text,
	TextInput,
	View,
} from 'react-native'

interface InputProps {
	label: string
	type?: KeyboardTypeOptions
}

export function Input({ label, type = 'default' }: InputProps) {
	return (
		<View className="mt-2">
			<Text className="text-border pb-1">{label}</Text>
			<TextInput
				className={`border border-border rounded-[5px] pl-2 text-border ${Platform.OS === 'ios' && 'h-8'}`}
				keyboardType={type}
			/>
		</View>
	)
}
