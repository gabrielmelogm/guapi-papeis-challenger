import React from 'react'
import { CaptionError } from './CaptionError'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ ...props }, ref) => {
		return (
			<div className="w-full flex flex-col gap-1">
				<label htmlFor={props.label} className="text-border">
					{props.label}
				</label>
				<input
					{...props}
					ref={ref}
					id={props.label}
					className="h-[42px] flex items-end pl-2 p-1 text-zinc-800 dark:text-zinc-200 border border-zinc-200 rounded-base dark:border-none focus:outline-none bg-input-light dark:bg-input-dark"
				/>

				{props.error && <CaptionError>{props.error}</CaptionError>}
			</div>
		)
	},
)

Input.displayName = 'Input'

export { Input }
