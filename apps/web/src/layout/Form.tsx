'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Spin } from '../assets/icons/spin'
import { Input } from '../components/Input'
import { InputFile } from '../components/InputFile'
import { Textarea } from '../components/Textarea'
import { api } from '../lib/api'

const inputsSchema = z.object({
	name: z
		.string({
			message: 'Nome do produto obrigatório',
		})
		.min(1, {
			message: 'Campo obrigatório',
		}),
	description: z
		.string({
			message: 'Descrição obrigatória',
		})
		.min(1, {
			message: 'Campo obrigatório',
		}),
	value: z.coerce
		.number({
			message: 'Valor tem que ser um número',
		})
		.positive({
			message: 'Valor tem que ser positivo',
		}),
	quantity: z.coerce
		.number({
			message: 'Quantidade tem que ser um número',
		})
		.positive({
			message: 'Quantidade tem que ser positivo',
		}),
})

type InputProps = z.infer<typeof inputsSchema>

export function Form() {
	const router = useRouter()

	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<InputProps>({
		resolver: zodResolver(inputsSchema),
	})

	const [file, setFile] = useState<File | null>(null)

	async function onSubmit(data: InputProps) {
		const formData = new FormData()

		const inputFile = file as any

		formData.append('name', data.name)
		formData.append('description', data.description)
		formData.append('value', String(data.value))
		formData.append('quantity', String(data.quantity))
		formData.append('file', inputFile)

		setLoading(true)
		await api
			.post('/', formData)
			.then(() => router.push('/'))
			.catch((error) => {
				console.error(error)
				alert('Erro ao criar novo produto, tente novamente')
				reset()
			})
			.finally(() => setLoading(false))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mt-6">
			<div className="md:grid md:grid-cols-1x4 gap-4 max-md:flex max-md:flex-col-reverse">
				<InputFile
					label="Foto do Produto"
					name="image"
					file={file}
					setFile={setFile}
				/>

				<div className="flex flex-col gap-1">
					<Input
						{...register('name')}
						label="Nome do Produto"
						name="name"
						error={errors.name?.message}
					/>
					<Textarea
						{...register('description')}
						label="Observações"
						name="description"
						error={errors.description?.message}
					/>
					<div className="grid grid-cols-2x1 gap-4">
						<Input
							{...register('value')}
							type="number"
							label="Valor"
							name="value"
							placeholder="R$"
							error={errors.value?.message}
						/>
						<Input
							{...register('quantity')}
							type="number"
							label="Quantidade"
							name="quantity"
							placeholder="00"
							error={errors.quantity?.message}
						/>
					</div>
				</div>
			</div>

			<div className="mt-8 pt-8 pb-4 border-t border-[#E9ECEF] flex items-center gap-2 justify-end">
				<Link
					href="/"
					className="bg-button-secondary w-[100px] h-[32px] rounded-base flex items-center justify-center text-white"
				>
					Voltar
				</Link>
				<button
					type="submit"
					className="bg-button-primary min-w-[100px] h-[32px] px-2 rounded-base flex items-center justify-center text-white disabled:opacity-80 disabled:cursor-not-allowed"
					disabled={loading}
				>
					{loading ? (
						<div className="flex items-center gap-2">
							<Spin />
							<span>Processando...</span>
						</div>
					) : (
						<span>Salvar</span>
					)}
				</button>
			</div>
		</form>
	)
}
