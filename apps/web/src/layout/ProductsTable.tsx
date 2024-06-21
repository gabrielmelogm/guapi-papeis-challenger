import Add from '@/src/assets/icons/svg/add.svg'
import Del from '@/src/assets/icons/svg/del.svg'
import Edit from '@/src/assets/icons/svg/edit.svg'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Container } from '../components/Container'

export function ProductsTable() {
	return (
		<Container className="dark:bg-badge-dark bg-badge-light p-6 rounded-xl">
			<div>
				<ul className="flex items-center gap-4">
					<ActionButton>
						<a href="#">
							<Image src={Edit} alt="Edit logo" />
						</a>
					</ActionButton>
					<ActionButton>
						<a href="#">
							<Image src={Add} alt="Add logo" />
						</a>
					</ActionButton>
					<ActionButton destroy>
						<a href="#">
							<Image src={Del} alt="Delete logo" />
						</a>
					</ActionButton>
				</ul>
			</div>

			<h2 className="pt-6 font-bold text-base">
				Arraste o cabeçalho de uma coluna aqui para agrupar por essa coluna
			</h2>
		</Container>
	)
}

function ActionButton(props: { children: ReactNode; destroy?: boolean }) {
	return (
		<li
			className={`${props.destroy ? 'bg-button-destructive' : 'bg-button-primary'} w-[34px] h-[34px] rounded-base flex items-center justify-center`}
		>
			{props.children}
		</li>
	)
}
