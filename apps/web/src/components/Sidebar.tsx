import Brigadeiro from '@/src/assets/images/brigadeiro.png'
import Image from 'next/image'
import { ReactNode } from 'react'
import { FileIcon } from '../assets/icons/file'
import { HomeIcon } from '../assets/icons/home'
import { MenuIcon } from '../assets/icons/menu'
import { StorageIcon } from '../assets/icons/storage'
import { ToolIcon } from '../assets/icons/tool'

export function Sidebar() {
	return (
		<div className="w-[65px] absolute left-0 h-screen bg-badge-light dark:bg-badge-dark flex flex-col items-center max-md:hidden">
			<Image className="pt-2" src={Brigadeiro} alt="Brigadeiro icon" />
			<nav className="w-full flex justify-center pt-4">
				<ul className="flex flex-col gap-4">
					<NavItem>
						<HomeIcon />
					</NavItem>
					<NavItem current>
						<FileIcon />
					</NavItem>
					<NavItem>
						<StorageIcon />
					</NavItem>
					<NavItem>
						<ToolIcon />
					</NavItem>
					<NavItem>
						<MenuIcon />
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
				'p-2 hover:bg-zinc-200 hover:dark:bg-zinc-800 relative rounded-base hover:cursor-pointer'
			}
		>
			{props.current && (
				<div className="absolute left-[-5px] top-0 w-[6px] h-[40px] bg-primary" />
			)}
			{props.children}
		</li>
	)
}
