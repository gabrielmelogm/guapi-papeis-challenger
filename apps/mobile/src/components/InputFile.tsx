import DownloadIcon from '@/assets/icons/download.svg'
import * as ImagePicker from 'expo-image-picker'
import { Text, TouchableOpacity, View } from 'react-native'

interface InputFileProps {
	file: ImagePicker.ImagePickerAsset | null
	setFile: (file: ImagePicker.ImagePickerAsset | null) => void
}

export function InputFile(props: InputFileProps) {
	async function handlePress() {
		const response = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: false,
			quality: 1,
		})

		if (response.canceled) {
			return null
		}

		props.setFile(response.assets[0])
	}

	return (
		<View className="pt-2">
			<Text className="text-border pb-1">Foto do Produto</Text>
			<View className="flex flex-row items-center">
				<View className="w-[50%] bg-button-primary rounded-[5px] p-2">
					{!props.file ? (
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
							<Text className="text-white text-xs">{props.file.fileName}</Text>
							<TouchableOpacity onPress={() => props.setFile(null)}>
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
