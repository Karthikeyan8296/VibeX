import { Tabs } from 'expo-router'
import React from 'react'

const TabsNavigation = () => {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen name="favorites" />
			<Tabs.Screen name="playlists" />
			<Tabs.Screen name="(songs)" />
			<Tabs.Screen name="artists" />
		</Tabs>
	)
}

export default TabsNavigation
