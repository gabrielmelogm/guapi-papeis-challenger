'use client'

import Download from '@/src/assets/icons/svg/download.svg'
import Image from 'next/image'
import { InputHTMLAttributes, useState } from 'react'

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export function InputFile(props: InputFileProps) {
	const [file, setFile] = useState<any>()

	return (
		<div className="w-full flex flex-col gap-1">
			<span className="text-border">{props.label}</span>
			<label
				htmlFor={props.label}
				className="text-border w-full h-[250px] relative flex flex-col items-center px-4 py-6 bg-[#D9D9D9] text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-white"
			>
				<span className="absolute w-full bg-primary p-2 flex items-center gap-2 justify-center text-white rounded-base bottom-0 text-sm">
					{!file ? (
						<>
							<Image src={Download} alt="Download icon" />
							Selecione um arquivo
						</>
					) : (
						<>
							<span>{file.name}</span>
							<button
								type="button"
								className="text-button-destructive"
								onClick={() => setFile(null)}
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
				onChange={(e: any) => setFile(e.target.files[0])}
			/>
		</div>
	)
}
