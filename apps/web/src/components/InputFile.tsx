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
	return (
		<div className="w-full flex flex-col gap-1">
			<span className="text-border">{props.label}</span>
			<label
				htmlFor={props.label}
				className="text-border w-full h-[250px] relative flex flex-col items-center px-4 py-6 bg-[#D9D9D9] text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-white"
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
				onChange={(e: any) => props.setFile(e.target.files[0])}
			/>
		</div>
	)
}
