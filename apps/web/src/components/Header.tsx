import Notebook from '@/src/assets/icons/svg/notebook.svg'
import Image from 'next/image'
import { Suspense } from 'react'
import { SwitchTheme } from '../layout/SwitchTheme'
import { Container } from './Container'

export function Header() {
	return (
		<header className="w-full h-[65px] bg-gradient-to-r from-primary to-[#5C46B2] flex items-center justify-center">
			<Container className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Image src={Notebook} alt="Notebook icon" />
					<span className="text-white">Produtos</span>
				</div>
				<Suspense fallback={<p>Carregando...</p>}>
					<SwitchTheme />
				</Suspense>
			</Container>
		</header>
	)
}
