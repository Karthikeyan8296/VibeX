import { unknownArtistImageUri } from '@/constants/images'
import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import FastImage from 'react-native-fast-image'

export type TrackListItemProps = {
	track: { title: string; artist?: string; image?: string }
}

const TrackListItem = ({ track }: TrackListItemProps) => {
	const isActiveTrack = false
	return (
		<TouchableHighlight>
			<View className="flex flex-row items-center">
				{/* Track Image */}
				<View>
					<FastImage
						source={{
							uri: track.image ?? unknownArtistImageUri,
							priority: FastImage.priority.normal,
						}}
						className={`w-[50px] h-[50px] rounded-md ${isActiveTrack ? 'opacity-60' : 'opacity-100'}`}
					/>
				</View>
				{/* Track title and Artist */}
				<View className="w-full">
					<Text
						className={`${isActiveTrack ? 'text-primary' : 'text-white'} text-sm font-semibold max-w-[90%]`}
						numberOfLines={1}
					>
						{track.title}
					</Text>
					<Text
						className={`${isActiveTrack ? 'text-text-muted' : 'text-white'} text-sm mt-1 max-w-[90%]`}
						numberOfLines={1}
					>
						{track.artist}
					</Text>
				</View>
			</View>
		</TouchableHighlight>
	)
}

export default TrackListItem
