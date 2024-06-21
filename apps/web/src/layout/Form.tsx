'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../components/Input'
import { InputFile } from '../components/InputFile'
import { Textarea } from '../components/Textarea'

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
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<InputProps>({
		resolver: zodResolver(inputsSchema),
	})

	async function onSubmit(data) {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mt-6">
			<div className="grid grid-cols-1x4 gap-4">
				<InputFile label="Foto do Produto" name="image" />

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
					className="bg-button-primary w-[100px] h-[32px] rounded-base flex items-center justify-center text-white"
				>
					Salvar
				</button>
			</div>
		</form>
	)
}
