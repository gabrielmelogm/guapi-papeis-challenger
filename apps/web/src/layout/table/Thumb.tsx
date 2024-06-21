import { DataGridTypes } from 'devextreme-react/cjs/data-grid'

export function Thumb(cellData: DataGridTypes.ColumnCellTemplateData) {
	return (
		<div className="w-full flex items-center justify-center">
			<img
				className="object-cover"
				src={cellData.value}
				alt={cellData.text}
				width={60}
				height={60}
			/>
		</div>
	)
}
