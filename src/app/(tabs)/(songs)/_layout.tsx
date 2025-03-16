import { Stack } from 'expo-router'
import React from 'react'

const SongsNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerTitle: 'Artists' }} />
		</Stack>
	)
}

export default SongsNavigation
