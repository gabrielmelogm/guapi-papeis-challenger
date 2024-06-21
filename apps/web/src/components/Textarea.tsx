'use client'

import React, { TextareaHTMLAttributes, useState } from 'react'
import { CaptionError } from './CaptionError'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
	error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
	({ ...props }, ref) => {
		const [text, setText] = useState('')

		return (
			<div className="w-full flex flex-col gap-1 relative">
				<label htmlFor={props.label} className="text-border">
					{props.label}
				</label>
				<textarea
					{...props}
					ref={ref}
					id={props.label}
					className="flex items-end pl-2 p-1 text-zinc-800 dark:text-zinc-200 border border-zinc-200 rounded-base dark:border-none focus:outline-none bg-input-light dark:bg-input-dark"
					maxLength={100}
					rows={4}
					onChange={({ target }) => setText(target.value)}
				/>
				<span className="text-border absolute bottom-1 right-2">
					{text.length}/100
				</span>

				{props.error && <CaptionError>{props.error}</CaptionError>}
			</div>
		)
	},
)

Textarea.displayName = 'Textarea'

export { Textarea }
