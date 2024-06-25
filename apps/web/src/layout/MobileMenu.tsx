'use client'

import Button from '@/src/assets/icons/svg/button.svg'
import Image from 'next/image'
import { useState } from 'react'
import { MenuContent } from './MenuContent'

export function MobileMenu() {
	const [visible, setVisible] = useState(false)

	return (
		<div
			className={`${!visible && 'left-[-50px]'} hidden max-md:flex absolute left-0 h-screen flex-col items-center bg-badge-light dark:bg-badge-dark`}
		>
			<MenuContent />

			<Image
				src={Button}
				alt="Button on menu"
				className="absolute right-[-30px] top-24 hover:cursor-pointer hover:bg-opacity-80"
				onClick={() => setVisible(!visible)}
			/>
		</div>
	)
}
