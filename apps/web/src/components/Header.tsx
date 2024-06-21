import Notebook from '@/src/assets/icons/notebook.svg'
import Image from 'next/image'
import { Container } from './Container'
import { SwitchTheme } from './SwitchTheme'

export function Header() {
	return (
		<header className="w-full h-[65px] bg-gradient-to-r from-primary to-[#5C46B2] flex items-center justify-center">
			<Container className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Image src={Notebook} alt="Notebook icon" />
					<span>Produtos</span>
				</div>
				<SwitchTheme />
			</Container>
		</header>
	)
}
