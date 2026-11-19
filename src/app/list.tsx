import { Stack } from 'expo-router'
import { useState } from 'react'
import { FlatList, Text } from 'react-native'

const ITEMS = Array.from({ length: 40 }, (_, i) => `Item ${i + 1}`)

export default function List() {
	const [filtered, setFiltered] = useState(false)

	return (
		<>
			<Stack.Screen
				options={{
					title: 'List',
					headerSearchBarOptions: {
						placeholder: 'Search',
						allowToolbarIntegration: true,
					},
				}}
			/>
			<FlatList
				contentInsetAdjustmentBehavior="automatic"
				data={ITEMS}
				keyExtractor={item => item}
				renderItem={({ item }) => <Text style={{ padding: 16, fontSize: 17 }}>{item}</Text>}
			/>
			<Stack.Toolbar>
				<Stack.Toolbar.Button variant="plain" selected={filtered} onPress={() => setFiltered(f => !f)}>
					<Stack.Toolbar.Icon sf="line.3.horizontal.decrease" />
				</Stack.Toolbar.Button>
				<Stack.Toolbar.Spacer />
				<Stack.Toolbar.SearchBarSlot separateBackground />
			</Stack.Toolbar>
		</>
	)
}
