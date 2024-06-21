import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { ProductsTable } from '../layout/ProductsTable'

export default function Home() {
	return (
		<main className="w-screen h-screen font-primary bg-background-light dark:bg-background-dark text-black dark:text-white relative pl-[65px]">
			<Sidebar />
			<Header />

			<div className="flex justify-center mt-8">
				<ProductsTable />
			</div>
		</main>
	)
}
