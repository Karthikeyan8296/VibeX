import TracksList from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'

const SongsScreen = () => {
	return (
		<SafeAreaView
			className="flex-1 bg-background"
			style={{ paddingHorizontal: screenPadding.horizontal }}
		>
			<Text className="text-white text-4xl font-semibold pb-4 pt-8">Songs</Text>
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default SongsScreen
