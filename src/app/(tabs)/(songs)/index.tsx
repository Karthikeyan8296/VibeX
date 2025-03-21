import TracksList from '@/components/TracksList'
import React from 'react'
import { ScrollView, View } from 'react-native'

const SongsScreen = () => {
	return (
		<View className="flex-1 bg-background">
			<ScrollView>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
