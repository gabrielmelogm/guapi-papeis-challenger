'use client'

import Download from '@/src/assets/icons/svg/download.svg'
import Image from 'next/image'
import { InputHTMLAttributes, useState } from 'react'

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	file: File | null
	setFile: (file: any) => void
}

export function InputFile(props: InputFileProps) {
	const [messagePreview, setMessagePreview] = useState(null)

	const handleFileChange = (e: any) => {
		const imageFile = e.target.files[0]

		if (imageFile) {
			const reader = new FileReader() as any
			reader.onloadend = () => {
				setMessagePreview(reader.result)
			}
			reader.readAsDataURL(imageFile)
		} else {
			setMessagePreview(null)
		}
	}

	return (
		<div className="w-full flex flex-col gap-1">
			<span className="text-border">{props.label}</span>
			<img
				src={messagePreview ?? ''}
				alt="Preview"
				className="w-full h-[270px] object-cover"
			/>
			<label
				htmlFor={props.label}
				className="relative rounded-lg tracking-wide cursor-pointer"
			>
				<span className="absolute w-full bg-primary p-2 flex items-center gap-2 justify-center text-white rounded-base bottom-0 text-sm">
					{!props.file ? (
						<>
							<Image src={Download} alt="Download icon" />
							Selecione um arquivo
						</>
					) : (
						<>
							<span>{props.file.name}</span>
							<button
								type="button"
								className="text-button-destructive"
								onClick={() => props.setFile(null)}
							>
								x
							</button>
						</>
					)}
				</span>
			</label>
			<input
				{...props}
				id={props.label}
				className="hidden"
				type="file"
				onChange={(e: any) => {
					props.setFile(e.target.files[0])
					handleFileChange(e)
				}}
			/>
		</div>
	)
}
