import { FileIcon } from '@/src/assets/icons/file'
import { HomeIcon } from '@/src/assets/icons/home'
import { MenuIcon } from '@/src/assets/icons/menu'
import { StorageIcon } from '@/src/assets/icons/storage'
import { ToolIcon } from '@/src/assets/icons/tool'
import Brigadeiro from '@/src/assets/images/brigadeiro.png'
import Image from 'next/image'
import { ReactNode } from 'react'

export function MenuContent() {
	return (
		<div className="relative z-[1]">
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
