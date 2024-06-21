'use client'

import './table.css'

import { AddIcon } from '@/src/assets/icons/add'
import Add from '@/src/assets/icons/svg/add.svg'
import Del from '@/src/assets/icons/svg/del.svg'
import Edit from '@/src/assets/icons/svg/edit.svg'
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
import React, { ReactNode, useCallback, useState } from 'react'
import { Thumb } from './Thumb'

const pageSizes = [10, 25, 50, 100]

const dataSourceOptions = [
	{
		id: 1,
		image: 'https://picsum.photos/id/1/200/300',
		name: 'Bolo de Chocolate',
		description:
			'Nosso Bolo de Chocolate Clássico é um deleite irresistível. Com massa fofinha e úmida feita com cacau de alta qualidade, ele possui camadas generosas de ganache de chocolate belga. A cobertura é uma ganache suave e brilhante, adornada com raspas de chocolate artesanal. Perfeito para qualquer ocasião, este bolo oferece uma experiência sublime de sabor e textura.',
		value: 24.99,
		quantity: 20,
		createdAt: new Date(),
	},
	{
		id: 2,
		image: 'https://picsum.photos/id/1/200/300',
		name: 'Cheesecake',
		description:
			'Nosso Cheesecake Clássico é a perfeita combinação de suavidade e sabor. Feito com cream cheese de alta qualidade, ele tem uma textura cremosa e aveludada. A base crocante de biscoito de graham complementa perfeitamente o recheio rico. Finalizado com uma fina camada de geleia de frutas vermelhas e decorado com frutas frescas, é ideal para qualquer ocasião especial ou para um mimo diário.',
		value: 26.99,
		quantity: 20,
		createdAt: new Date(),
	},
]

export function Table() {
	const [collapsed, setCollapsed] = useState(true)
	const [selectedRowsKey, setSelectedRowsKey] = useState<number[]>([])

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
					dataField="image"
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
