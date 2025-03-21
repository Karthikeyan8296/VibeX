import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const SongsNavigation = () => {
	return (
		<View className="flex-1 bg-background">
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
			</Stack>
		</View>
	)
}

export default SongsNavigation
