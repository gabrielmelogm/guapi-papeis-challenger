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
	onChange?: (e: any) => void
	errorMessage?: string
	value?: string
}

export function Input({
	label,
	type = 'default',
	onChange,
	errorMessage,
	value,
}: InputProps) {
	return (
		<View className="mt-2">
			<Text
				className={`text-[#C6C6C6] pb-1 ${errorMessage && 'text-button-destructive'}`}
			>
				{label}
			</Text>
			<TextInput
				className={`border border-border-light dark:border-transparent bg-input-light dark:bg-input-dark rounded-[5px] pl-2 text-border ${Platform.OS === 'ios' && 'h-8'} ${errorMessage && 'border-button-destructive'} text-icon-light dark:text-icon-dark`}
				keyboardType={type}
				onChangeText={onChange}
				value={value}
			/>
			<Text className="text-button-destructive text-[10px]">
				{errorMessage}
			</Text>
		</View>
	)
}
