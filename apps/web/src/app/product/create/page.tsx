import { Container } from '@/src/components/Container'
import { Form } from '@/src/layout/Form'

export default function CreateProduct() {
	return (
		<div className="flex justify-center mt-8">
			<Container className="dark:bg-badge-dark bg-badge-light p-6 rounded-xl shadow-lg">
				<h2 className="text-xl font-bold pb-4 border-b border-[#E9ECEF]">
					Cadastrar Produto
				</h2>

				<Form />
			</Container>
		</div>
	)
}
