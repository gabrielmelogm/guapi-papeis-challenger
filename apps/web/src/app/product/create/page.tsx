import { Container } from '@/src/components/Container'
import { Input } from '@/src/components/Input'
import { InputFile } from '@/src/components/InputFile'
import { Textarea } from '@/src/components/Textarea'
import Link from 'next/link'

export default function CreateProduct() {
	return (
		<div className="flex justify-center mt-8">
			<Container className="dark:bg-badge-dark bg-badge-light p-6 rounded-xl shadow-lg">
				<h2 className="text-xl font-bold pb-4 border-b border-[#E9ECEF]">
					Cadastrar Produto
				</h2>

				<form className="mt-6 gap-4 grid grid-cols-1x4">
					<InputFile label="Foto do Produto" name="image" />

					<div className="flex flex-col gap-1">
						<Input label="Nome do Produto" name="product" />
						<Textarea label="Observações" name="description" />
						<div className="grid grid-cols-2x1 gap-4">
							<Input label="Valor" name="price" placeholder="R$" />
							<Input label="Quantidade" name="quantity" placeholder="00" />
						</div>
					</div>
				</form>

				<div className="mt-8 pt-8 pb-4 border-t border-[#E9ECEF] flex items-center gap-2 justify-end">
					<Link
						href="/"
						className="bg-button-secondary w-[100px] h-[32px] rounded-base flex items-center justify-center text-white"
					>
						Voltar
					</Link>
					<button
						type="submit"
						className="bg-button-primary w-[100px] h-[32px] rounded-base flex items-center justify-center text-white"
					>
						Salvar
					</button>
				</div>
			</Container>
		</div>
	)
}
