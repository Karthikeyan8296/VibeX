import { unknownTrackImageUri } from '@/constants/images'
import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

//To send the props, we need to first initial it
export type TrackListItemProps = {
	track: { title: string; artist?: string; image?: string }
}

const TrackListItem = ({ track }: TrackListItemProps) => {
	const isActiveTrack = false

	return (
		<TouchableHighlight>
			<View className="flex flex-row">
				<View className="pr-3">
					<Image
						source={{
							uri: track.image ?? unknownTrackImageUri,
						}}
						className={`w-[50px] h-[50px] rounded-md ${isActiveTrack ? 'opacity-60' : 'opacity-100'}`}
					/>
				</View>

				{/* Track title and Artist */}
				<View className="flex flex-col justify-center w-full ">
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
						{track.artist ?? 'Unknown'}
					</Text>
				</View>
			</View>
		</TouchableHighlight>
	)
}

export default TrackListItem
