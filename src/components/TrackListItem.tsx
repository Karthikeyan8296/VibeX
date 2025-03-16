import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import FastImage from 'react-native-fast-image'

export type TrackListItemProp = {
	track: { title: String; image?: String }
}

const TrackListItem = ({ track }: TrackListItemProp) => {
	return (
		<TouchableHighlight>
			<View>
				<FastImage source={{}} />
			</View>
		</TouchableHighlight>
	)
}

export default TrackListItem
