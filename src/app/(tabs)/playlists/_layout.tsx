import { StackScreenWithSearchBar } from '@/constants/layout'
import { Stack } from 'expo-router'

import React from 'react'

const PlaylistNavigation = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ ...StackScreenWithSearchBar, headerTitle: 'Playlists' }}
			/>
		</Stack>
	)
}

export default PlaylistNavigation
