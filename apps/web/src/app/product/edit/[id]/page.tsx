import { Container } from '@/src/components/Container'
import { EditForm } from '@/src/layout/EditForm'
import { ProductProps } from '@/src/layout/table/Table'
import axios from 'axios'

export default async function EditProduct({
	params,
}: { params: { id: string } }) {
	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/${params.id}`,
	)

	const product: ProductProps = response.data

	return (
		<div className="flex justify-center mt-8">
			<Container className="dark:bg-badge-dark bg-badge-light p-6 rounded-xl shadow-lg">
				<h2 className="text-xl font-bold pb-4 border-b border-[#E9ECEF]">
					Editar {product.name}
				</h2>

				<EditForm product={product} />
			</Container>
		</div>
	)
}
