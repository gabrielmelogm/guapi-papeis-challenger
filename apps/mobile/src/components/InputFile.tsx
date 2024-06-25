import DownloadIcon from '@/assets/icons/download.svg'
import * as ImagePicker from 'expo-image-picker'
import { Text, TouchableOpacity, View } from 'react-native'

interface InputFileProps {
	file: ImagePicker.ImagePickerAsset | null
	setFile: (file: ImagePicker.ImagePickerAsset | null) => void
	defaultImg?: string
}

export function InputFile(props: InputFileProps) {
	async function handlePress() {
		props.setFile(null)
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

	function getFilename() {
		if (props.defaultImg && !props.file?.fileName) {
			const text = props.defaultImg
				.slice(props.defaultImg.indexOf('/uploads') + 1)
				.replace(/\/?uploads[\/\\]/, '')
			return text
		}

		return props.file?.fileName
	}

	const filename = getFilename()

	return (
		<View className="pt-2">
			<Text className="text-[#C6C6C6] pb-1">Foto do Produto</Text>
			<View className="flex flex-row items-center">
				<View className="w-[50%] bg-button-primary rounded-[5px] p-2">
					<TouchableOpacity
						onPress={handlePress}
						className="flex flex-row items-center"
					>
						{!filename ? (
							<>
								<DownloadIcon />
								<Text className="text-white text-sm font-normal pl-2">
									Selecione um arquivo
								</Text>
							</>
						) : (
							<View className="flex flex-row items-center gap-2">
								<Text className="text-white text-xs">{filename}</Text>
								<Text className="text-button-destructive font-bold p-1">X</Text>
							</View>
						)}
					</TouchableOpacity>
				</View>
				<Text className="pl-2 text-xs text-icon-light dark:text-icon-dark">
					ou solte um arquivo aqui
				</Text>
			</View>
		</View>
	)
}
