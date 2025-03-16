import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'

const SongsScreen = () => {
	return (
		<SafeAreaView className="flex-1 bg-background">
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Text className="text-white text-base">Songs Screen</Text>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SongsScreen
