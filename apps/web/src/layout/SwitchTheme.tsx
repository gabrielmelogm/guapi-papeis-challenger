'use client'

import Dark from '@/src/assets/icons/svg/dark.svg'
import Light from '@/src/assets/icons/svg/light.svg'
import * as Switch from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function SwitchTheme() {
	const { theme, setTheme } = useTheme()

	function onChangeTheme(value: boolean) {
		if (!value) {
			setTheme('light')
		}

		if (value) {
			setTheme('dark')
		}
	}

	if (!theme) {
		return <></>
	}

	return (
		<Switch.Root
			className="w-[60px] h-[32px] rounded-[20px] relative shadow-sm focus:shadow-md px-1 flex justify-start items-center bg-white data-[state=checked]:bg-[#4C4C4D] data-[state=checked]:justify-end"
			id="airplane-mode"
			onCheckedChange={(value) => onChangeTheme(value)}
			defaultChecked={theme === 'dark'}
		>
			<Image
				hidden={theme === 'light'}
				className="absolute left-2"
				src={Light}
				alt="Light icon"
			/>
			<Switch.Thumb className="block w-[21px] h-[21px] bg-[#4C4C4C] rounded-full shadow-sm transition-all data-[state=checked]:bg-white" />
			<Image
				hidden={theme === 'dark'}
				className="absolute right-2"
				src={Dark}
				alt="Dark icon"
			/>
		</Switch.Root>
	)
}
