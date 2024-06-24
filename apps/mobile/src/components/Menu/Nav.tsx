import { ReactNode } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface NavProps {
	icon: ReactNode
	title: string
	current?: boolean
	onClick: () => void
}

export function Nav(props: NavProps) {
	return (
		<TouchableOpacity
			className={'flex items-center relative'}
			onPress={props.onClick}
		>
			<View
				className={`w-[55px] h-[55px] flex items-center justify-center rounded-full ${props.current && 'bg-primary absolute top-[-30px]'}`}
			>
				{props.icon}
			</View>
			<Text
				className={`text-[#828282] text-xs ${props.current && 'pt-8 text-[#1E1E1E] dark:text-[#FFFFFF]'}`}
			>
				{props.title}
			</Text>
		</TouchableOpacity>
	)
}
