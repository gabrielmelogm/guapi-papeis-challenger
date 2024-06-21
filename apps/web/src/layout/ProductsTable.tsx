import { Container } from '../components/Container'
import { Table } from './table/Table'

export function ProductsTable() {
	return (
		<Container className="dark:bg-badge-dark bg-badge-light p-6 rounded-xl">
			<div className="pt-4">
				<Table />
			</div>
		</Container>
	)
}
