import { StackScreenWithSearchBar } from '@/constants/layout'
import { Stack } from 'expo-router'
import React from 'react'

const ArtistsNavigation = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ ...StackScreenWithSearchBar, headerTitle: 'Artists' }}
			/>
		</Stack>
	)
}

export default ArtistsNavigation
