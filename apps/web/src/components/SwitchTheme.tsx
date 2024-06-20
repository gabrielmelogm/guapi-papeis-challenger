'use client'

import Dark from '@/src/assets/icons/dark.svg'
import Light from '@/src/assets/icons/light.svg'
import * as Switch from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function SwitchTheme() {
	const { setTheme, theme } = useTheme()

	function onChangeTheme(value: boolean) {
		const currentTheme = onChange(value)

		if (currentTheme === 'light') {
			setTheme('dark')
		}

		if (currentTheme === 'dark') {
			setTheme('light')
		}

		if (!currentTheme) {
			setTheme('system')
		}
	}

	function onChange(value: boolean) {
		if (value) {
			return 'dark'
		}

		if (!value) {
			return 'light'
		}
	}
	console.log(theme)

	return (
		<Switch.Root
			className="w-[60px] h-[32px] rounded-[20px] relative shadow-sm focus:shadow-md px-1 flex justify-start items-center bg-white data-[state=checked]:bg-[#4C4C4D] data-[state=checked]:justify-end"
			id="airplane-mode"
			onCheckedChange={(value) => onChangeTheme(value)}
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
