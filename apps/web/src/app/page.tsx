import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export default function Home() {
	return (
		<main className="w-screen h-screen font-primary bg-background-light dark:bg-background-dark text-black dark:text-white relative pl-[65px]">
			<Sidebar />
			<Header />
		</main>
	)
}
