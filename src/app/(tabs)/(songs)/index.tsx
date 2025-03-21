import TracksList from '@/components/TracksList'
import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'

const SongsScreen = () => {
	return (
		<SafeAreaView className="flex-1 bg-background px-4">
			<Text className="text-white text-4xl font-semibold pb-4 pt-8">Songs</Text>
			<ScrollView>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default SongsScreen
