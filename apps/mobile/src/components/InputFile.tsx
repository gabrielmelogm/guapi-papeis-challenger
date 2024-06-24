import DownloadIcon from '@/assets/icons/download.svg'
import * as DocumentPicker from 'expo-document-picker'
import { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

export function InputFile() {
	const [file, setFile] = useState<DocumentPicker.DocumentPickerResult | null>(
		null,
	)

	async function handlePress() {
		const response = await DocumentPicker.getDocumentAsync({
			type: 'image/*',
		})

		setFile(response)
	}

	return (
		<View className="pt-2">
			<Text className="text-border pb-1">Foto do Produto</Text>
			<View className="flex flex-row items-center">
				<View className="w-[50%] bg-button-primary rounded-[5px] p-2">
					{!file?.assets ? (
						<TouchableOpacity
							onPress={handlePress}
							className="flex flex-row items-center"
						>
							<DownloadIcon />
							<Text className="text-white text-sm font-normal pl-2">
								Selecione um arquivo
							</Text>
						</TouchableOpacity>
					) : (
						<View className="flex flex-row items-center gap-2">
							<Text className="text-white text-xs">{file.assets[0].name}</Text>
							<TouchableOpacity onPress={() => setFile(null)}>
								<Text className="text-button-destructive font-bold p-1">X</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
				<Text className="pl-2 text-xs text-icon-light">
					ou solte um arquivo aqui
				</Text>
			</View>
		</View>
	)
}
