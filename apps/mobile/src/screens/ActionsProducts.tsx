import { Input } from '@/components/Input'
import { InputFile } from '@/components/InputFile'
import { TextArea } from '@/components/TextArea'
import { container } from '@/styles/container'
import { Text, TouchableOpacity, View } from 'react-native'

export function ActionsProducts() {
	return (
		<View className={container}>
			<View className="bg-white p-2 rounded-xl">
				<View>
					<Text className="pt-2 pb-3 text-sm font-bold border-b border-[#E9ECEF]">
						Cadastrar Produto
					</Text>
				</View>

				<View className="pb-4">
					<Input placeholder="Nome do Produto" />
					<TextArea placeholder="Observações" />
					<Input placeholder="Valor" type="decimal-pad" />
					<Input placeholder="Quantidade" type="numeric" />
					<InputFile />
				</View>

				<View className="w-full flex flex-row justify-end border-t border-[#E9ECEF] pt-3 pb-1">
					<TouchableOpacity className="w-[100px] py-2 flex items-center justify-center rounded-[4px] bg-button-secondary">
						<Text className="text-sm text-white">Voltar</Text>
					</TouchableOpacity>
					<TouchableOpacity className="w-[100px] py-2 flex items-center justify-center rounded-[4px] bg-button-primary ml-2">
						<Text className="text-sm text-white">Salvar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
