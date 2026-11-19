import { Link, Stack } from 'expo-router'
import { useState } from 'react'
import { Pressable, ScrollView, Text } from 'react-native'

export default function Home() {
	const [filtered, setFiltered] = useState(false)

	return (
		<>
			<Stack.Screen options={{ title: 'Home' }} />
			<ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ padding: 16, gap: 12 }}>
				<Link href="/list" asChild>
					<Pressable style={{ padding: 16, borderRadius: 12, backgroundColor: '#eee' }}>
						<Text style={{ fontSize: 17 }}>Open list</Text>
					</Pressable>
				</Link>
			</ScrollView>
			<Stack.Toolbar>
				<Stack.Toolbar.Button variant="plain" selected={filtered} onPress={() => setFiltered(f => !f)}>
					<Stack.Toolbar.Icon sf="line.3.horizontal.decrease" />
				</Stack.Toolbar.Button>
				<Stack.Toolbar.Spacer />
			</Stack.Toolbar>
		</>
	)
}
