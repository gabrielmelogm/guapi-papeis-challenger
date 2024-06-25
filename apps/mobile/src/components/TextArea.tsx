import { useState } from 'react'
import { Platform, Text, TextInput, View } from 'react-native'

interface TextAreaProps {
	label: string
	onChange: (e: any) => void
	errorMessage?: string
}

const MAX_LENGTH = 100

export function TextArea(props: TextAreaProps) {
	const [text, setText] = useState('')

	return (
		<View className="relative mt-2">
			<Text
				className={`text-border pb-1 ${props.errorMessage && 'text-button-destructive'}`}
			>
				{props.label}
			</Text>
			<TextInput
				multiline
				numberOfLines={4}
				maxLength={MAX_LENGTH}
				className={`border border-border rounded-[5px] pl-2 text-border ${Platform.OS === 'ios' && 'h-[85px]'} ${props.errorMessage && 'border-button-destructive'}`}
				onChangeText={(newText) => {
					setText(newText)
					props.onChange(newText)
				}}
			/>

			<Text className="absolute bottom-4 right-2 text-border">
				{text.length < 10 ? `0${text.length}` : text.length}/{MAX_LENGTH}
			</Text>
			<Text className="text-button-destructive text-[10px]">
				{props.errorMessage}
			</Text>
		</View>
	)
}
