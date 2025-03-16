import { Stack } from 'expo-router'
import React from 'react'

const FavoritesNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerTitle: 'Favorites' }} />
		</Stack>
	)
}

export default FavoritesNavigation
