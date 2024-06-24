import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

interface TextAreaProps {
	placeholder: string
}

const MAX_LENGTH = 100

export function TextArea(props: TextAreaProps) {
	const [text, setText] = useState('')

	return (
		<View className="relative mt-2">
			<Text className="text-border pb-1">{props.placeholder}</Text>
			<TextInput
				multiline
				numberOfLines={4}
				maxLength={MAX_LENGTH}
				className="border border-border rounded-[5px] pl-2 text-border"
				onChangeText={(newText) => setText(newText)}
			/>

			<Text className="absolute bottom-1 right-2 text-border">
				{text.length < 10 ? `0${text.length}` : text.length}/{MAX_LENGTH}
			</Text>
		</View>
	)
}
