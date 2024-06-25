import { Text, View } from 'react-native'

export function TableLoading() {
	return (
		<View className="flex flex-row items-center gap-2 mt-2 py-3 px-2 bg-white dark:bg-badge-dark rounded-xl relative shadow-md">
			<View className="w-[67px] h-[67px] rounded-md bg-slate-200 dark:bg-slate-700 animate-pulse">
				<Text style={{ display: 'none' }}>Placeholder</Text>
			</View>
			<View className="w-[70%] bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse">
				<Text className="text-slate-200 dark:text-slate-700">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
					quisquam praesentium tempora debitis asperiores laborum molestiae esse
				</Text>
			</View>
		</View>
	)
}
