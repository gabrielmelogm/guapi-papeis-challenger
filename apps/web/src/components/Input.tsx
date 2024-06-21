import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export function Input(props: InputProps) {
	return (
		<div className="w-full flex flex-col gap-1">
			<label htmlFor={props.label} className="text-border">
				{props.label}
			</label>
			<input
				{...props}
				id={props.label}
				className="h-[42px] flex items-end pl-2 p-1 text-zinc-800 border border-zinc-200 rounded-base"
			/>
		</div>
	)
}
