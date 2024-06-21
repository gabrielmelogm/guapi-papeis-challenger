'use client'

import { TextareaHTMLAttributes, useState } from 'react'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
}

export function Textarea(props: InputProps) {
	const [text, setText] = useState('')

	return (
		<div className="w-full flex flex-col gap-1 relative">
			<label htmlFor={props.label} className="text-border">
				{props.label}
			</label>
			<textarea
				{...props}
				id={props.label}
				className="flex items-end pl-2 p-1 text-zinc-800 border border-zinc-200 rounded-base"
				maxLength={100}
				rows={4}
				onChange={({ target }) => setText(target.value)}
			/>
			<span className="text-border absolute bottom-1 right-2">
				{text.length}/100
			</span>
		</div>
	)
}
