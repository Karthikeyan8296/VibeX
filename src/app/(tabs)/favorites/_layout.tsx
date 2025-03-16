import { StackScreenWithSearchBar } from '@/constants/layout'
import { Stack } from 'expo-router'
import React from 'react'

const FavoritesNavigation = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ ...StackScreenWithSearchBar, headerTitle: 'Favorites' }}
			/>
		</Stack>
	)
}

export default FavoritesNavigation
