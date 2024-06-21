import File from '@/src/assets/icons/file.svg'
import Home from '@/src/assets/icons/home.svg'
import Menu from '@/src/assets/icons/menu.svg'
import Storage from '@/src/assets/icons/storage.svg'
import Tool from '@/src/assets/icons/tool.svg'
import Brigadeiro from '@/src/assets/images/brigadeiro.png'
import Image from 'next/image'
import { ReactNode } from 'react'

export function Sidebar() {
	return (
		<div className="w-[65px] absolute left-0 h-screen bg-background-light dark:bg-badge-dark flex flex-col items-center">
			<Image className="pt-2" src={Brigadeiro} alt="Brigadeiro icon" />
			<nav className="w-full flex justify-center pt-4">
				<ul className="flex flex-col gap-4">
					<NavItem>
						<Image className="object-cover" src={Home} alt="Home icon" />
					</NavItem>
					<NavItem current>
						<Image src={File} alt="File icon" />
					</NavItem>
					<NavItem>
						<Image src={Storage} alt="Storage icon" />
					</NavItem>
					<NavItem>
						<Image src={Tool} alt="Tool icon" />
					</NavItem>
					<NavItem>
						<Image src={Menu} alt="Menu icon" />
					</NavItem>
				</ul>
			</nav>
		</div>
	)
}

function NavItem(props: { children: ReactNode; current?: boolean }) {
	return (
		<li
			className={
				'p-2 hover:bg-zinc-800 relative rounded-base hover:cursor-pointer'
			}
		>
			{props.current && (
				<div className="absolute left-[-5px] top-0 w-[6px] h-[40px] bg-primary" />
			)}
			{props.children}
		</li>
	)
}
