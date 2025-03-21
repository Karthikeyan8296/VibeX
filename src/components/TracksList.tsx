import library from '@/data/library.json'
import React from 'react'
import { FlatList, FlatListProps, View } from 'react-native'
import TrackListItem from './TrackListItem'

export type TrackListProps = Partial<FlatListProps<any>>

const itemDivider = () => <View className="h-[1px] bg-text-muted opacity-15 my-3 mx-1" />

const TracksList = ({ ...flatlistProps }: TrackListProps) => {
	return (
		<FlatList
			data={library}
			keyExtractor={(item) => item.title}
			ItemSeparatorComponent={itemDivider}
			renderItem={({ item: value }) => <TrackListItem track={{ ...value, image: value.artwork }} />}
			{...flatlistProps}
		/>
	)
}

export default TracksList
