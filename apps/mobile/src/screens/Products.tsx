import { TableRow } from '@/components/Table/TableRow'
import { container } from '@/styles/container'
import axios from 'axios'
import { useEffect } from 'react'
import { ScrollView, View } from 'react-native'

export function Products() {
	async function getData() {
		console.log('Called')
		await axios
			.get('http://172.23.200.107:3333')
			.then((res) => console.log(res.data))
			.catch((error) => console.error(error))
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<View className={container}>
			<ScrollView>
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
			</ScrollView>
		</View>
	)
}
