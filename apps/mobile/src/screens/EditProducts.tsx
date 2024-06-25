import * as ImagePicker from 'expo-image-picker'

import { Input } from '@/components/Input'
import { InputFile } from '@/components/InputFile'
import { ProductProps } from '@/components/Table/TableRow'
import { TextArea } from '@/components/TextArea'
import { useScreens } from '@/hooks/useScreens'
import { api } from '@/lib/api'
import { container } from '@/styles/container'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TouchableOpacity, View } from 'react-native'

interface InputProps {
	name: string
	description: string
	value: number
	quantity: number
}

export function EditProducts({
	product,
	closeModal,
}: { product: ProductProps; closeModal: () => void }) {
	const [loading, setLoading] = useState<boolean>(false)
	const [file, setFile] = useState<ImagePicker.ImagePickerAsset | null>(null)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<InputProps>({
		defaultValues: {
			name: product.title,
			description: product.description,
			value: product.price,
			quantity: product.quantity,
		},
	})

	const onSubmit = async (data: InputProps) => {
		const form = new FormData()

		let inputFile = null

		if (file) {
			inputFile = {
				uri: file.uri,
				name: file.fileName,
				type: file.mimeType,
			} as any
		}

		form.append('name', data.name)
		form.append('description', data.description)
		form.append('value', String(data.value))
		form.append('quantity', String(data.quantity))

		if (inputFile) {
			form.append('file', inputFile)
		}

		try {
			setLoading(true)
			await api.put(`/${product.id}`, form, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			setLoading(false)
			return closeModal()
		} catch (error) {
			console.error(JSON.stringify(error, null, 2))
			setLoading(false)
		}
	}

	return (
		<View className={container}>
			<View className="bg-white dark:bg-badge-dark p-2 rounded-xl">
				<View>
					<Text className="pt-2 pb-3 text-sm font-bold border-b border-border-light dark:border-border-dark text-icon-light dark:text-icon-dark">
						Editar Produto
					</Text>
				</View>

				<View className="pb-4">
					<Controller
						control={control}
						name="name"
						rules={{
							required: 'Informe o nome do produto',
							min: 1,
						}}
						render={({ field: { onChange, value } }) => (
							<Input
								label="Nome do Produto"
								onChange={onChange}
								errorMessage={errors.name?.message}
								value={value}
							/>
						)}
					/>
					<Controller
						control={control}
						name="description"
						rules={{
							required: 'Informe uma descrição para o produto',
							maxLength: {
								value: 100,
								message: 'A descrição deve ter no máximo 100 caracteres',
							},
						}}
						render={({ field: { onChange, value } }) => (
							<TextArea
								label="Observações"
								onChange={onChange}
								errorMessage={errors.description?.message}
								value={value}
							/>
						)}
					/>
					<Controller
						control={control}
						name="value"
						rules={{
							required: 'O valor é obrigatório',
							min: {
								value: 1,
								message: 'O valor é de no mínimo 1',
							},
						}}
						render={({ field: { onChange, value } }) => (
							<Input
								label="Valor"
								type="decimal-pad"
								onChange={onChange}
								errorMessage={errors.value?.message}
								value={String(value)}
							/>
						)}
					/>
					<Controller
						control={control}
						name="quantity"
						rules={{
							required: 'A quantidade é obrigatório',
							min: {
								value: 1,
								message: 'A quantidade é de no mínimo 1',
							},
						}}
						render={({ field: { onChange, value } }) => (
							<Input
								label="Quantidade"
								type="numeric"
								onChange={onChange}
								errorMessage={errors.quantity?.message}
								value={String(value)}
							/>
						)}
					/>
					<InputFile
						file={file}
						setFile={setFile}
						defaultImg={product.imageSrc}
					/>
				</View>

				<View className="w-full flex flex-row justify-end border-t border-border-light dark:border-border-dark pt-3 pb-1">
					<TouchableOpacity
						className="w-[100px] py-2 flex items-center justify-center rounded-[4px] bg-button-secondary"
						onPress={() => closeModal()}
					>
						<Text className="text-sm text-white">Voltar</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className={`w-[100px] py-2 flex items-center justify-center rounded-[4px] bg-button-primary ml-2 ${loading && 'opacity-40'}`}
						onPress={handleSubmit(onSubmit)}
						disabled={loading}
					>
						<Text className="text-sm text-white">Salvar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
