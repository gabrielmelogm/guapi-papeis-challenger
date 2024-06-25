import { useState } from 'react'
import { Platform, Text, TextInput, View } from 'react-native'

interface TextAreaProps {
	label: string
	onChange: (e: any) => void
	errorMessage?: string
	value?: string
}

const MAX_LENGTH = 100

export function TextArea(props: TextAreaProps) {
	const [text, setText] = useState(props.value ?? '')

	return (
		<View className="relative mt-2">
			<Text
				className={`text-[#C6C6C6] pb-1 ${props.errorMessage && 'text-button-destructive'}`}
			>
				{props.label}
			</Text>
			<TextInput
				multiline
				numberOfLines={4}
				maxLength={MAX_LENGTH}
				className={`border border-border-light dark:border-transparent bg-input-light dark:bg-input-dark rounded-[5px] pl-2 text-border ${Platform.OS === 'ios' && 'h-[85px]'} ${props.errorMessage && 'border-button-destructive'} text-icon-light dark:text-icon-dark`}
				onChangeText={(newText) => {
					setText(newText)
					props.onChange(newText)
				}}
				value={props.value}
			/>

			<Text className="absolute bottom-4 right-2 text-border text-[#666666]">
				{text.length < 10 ? `0${text.length}` : text.length}/{MAX_LENGTH}
			</Text>
			<Text className="text-button-destructive text-[10px]">
				{props.errorMessage}
			</Text>
		</View>
	)
}
