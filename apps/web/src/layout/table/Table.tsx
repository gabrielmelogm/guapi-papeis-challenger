'use client'

import './table.css'

import { AddIcon } from '@/src/assets/icons/add'
import Add from '@/src/assets/icons/svg/add.svg'
import Del from '@/src/assets/icons/svg/del.svg'
import Edit from '@/src/assets/icons/svg/edit.svg'
import { api } from '@/src/lib/api'
import DataGrid, {
	Column,
	DataGridTypes,
	Grouping,
	GroupPanel,
	Pager,
	Paging,
	SearchPanel,
	Selection,
} from 'devextreme-react/data-grid'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { Thumb } from './Thumb'

const pageSizes = [10, 25, 50, 100]

interface ProductProps {
	id: number
	name: string
	description: string
	value: number
	imageUrl: string
	quantity: number
	createdAt: string
}

export function Table() {
	const [collapsed, setCollapsed] = useState(true)
	const [selectedRowsKey, setSelectedRowsKey] = useState<number[]>([])
	const [dataSourceOptions, setDataSourceOptions] = useState<ProductProps[]>([])

	async function getData() {
		const response = await api.get('/')
		const listData = []
		for (const product of response.data) {
			if (!product.imageUrl.includes('https')) {
				product.imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/${product.imageUrl}`
				listData.push(product)
			} else {
				listData.push(product)
			}
		}
		setDataSourceOptions(listData)
	}

	const selectEmployee = useCallback((e: any) => {
		setSelectedRowsKey(e.selectedRowKeys)
	}, [])

	const selectedData = dataSourceOptions.filter((data) =>
		selectedRowsKey.includes(data.id),
	)

	const onContentReady = useCallback(
		(e: DataGridTypes.ContentReadyEvent) => {
			if (collapsed) {
				e.component.expandRow(['EnviroCare'])
				setCollapsed(false)
			}
		},
		[collapsed],
	)

	async function onDelete() {
		const ids = selectedData.map((data) => data.id)
		await api
			.delete('/', {
				data: {
					productsId: ids,
				},
			})
			.then(async () => await getData())
			.catch((error) => {
				console.error(error)
				alert('Erro ao excluir dados, tente novamente')
			})
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<div>
				<ul className="flex items-center gap-4">
					<ActionButton>
						<button type="button">
							<Image src={Edit} alt="Edit logo" />
						</button>
					</ActionButton>
					<ActionButton variant="outline">
						<Link href="/product/create">
							<AddIcon />
						</Link>
					</ActionButton>
					<ActionButton variant="destroy">
						<button
							className="disabled:opacity-40 disabled:cursor-not-allowed"
							type="button"
							disabled={selectedData.length === 0}
							onClick={onDelete}
						>
							<Image src={Del} alt="Delete logo" />
						</button>
					</ActionButton>
				</ul>
			</div>

			<h2 className="pt-6 font-bold text-base">
				Arraste o cabeçalho de uma coluna aqui para agrupar por essa coluna
			</h2>
			<DataGrid
				dataSource={dataSourceOptions}
				allowColumnReordering={true}
				rowAlternationEnabled={true}
				showBorders={true}
				width="100%"
				onContentReady={onContentReady}
				keyExpr={'id'}
				onSelectionChanged={selectEmployee}
				selectedRowKeys={selectedRowsKey}
			>
				<Selection mode="multiple" />
				<GroupPanel visible={true} />
				<SearchPanel visible={true} highlightCaseSensitive={true} />
				<Grouping autoExpandAll={false} />

				<Column
					dataField="imageUrl"
					caption="IMAGEM"
					dataType="string"
					alignment="center"
					cellRender={Thumb}
					cssClass="data-header"
				/>
				<Column
					dataField="name"
					caption="NOME DO PRODUTO"
					dataType="string"
					alignment="center"
					cssClass="data-header"
				/>
				<Column
					dataField="description"
					caption="DESCRIÇÃO"
					dataType="string"
					alignment="center"
					cssClass="data-header"
				/>
				<Column
					dataField="value"
					caption="VALOR"
					dataType="number"
					format="currency"
					alignment="center"
					cssClass="data-header"
				/>
				<Column
					dataField="quantity"
					caption="QUANTIDADE"
					dataType="number"
					alignment="center"
					cssClass="data-header"
				/>
				<Column
					dataField="createdAt"
					caption="DATA DE CADASTRO"
					dataType="date"
					alignment="center"
					cssClass="data-header"
				/>

				<Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
				<Paging defaultPageSize={10} />
			</DataGrid>
		</>
	)
}

function ActionButton(props: {
	children: ReactNode
	variant?: 'destroy' | 'outline'
}) {
	return (
		<li
			className={`${props.variant === 'destroy' ? 'bg-button-destructive' : props.variant === 'outline' ? 'border border-primary dark:border-none dark:bg-primary' : 'bg-primary'} w-[34px] h-[34px] rounded-base flex items-center justify-center`}
		>
			{props.children}
		</li>
	)
}
