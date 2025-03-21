import library from '@/data/library.json'
import React from 'react'
import { FlatList, FlatListProps } from 'react-native'
import TrackListItem from './TrackListItem'

//to send the props, we need to initial it
export type TrackListProps = Partial<FlatListProps<any>>

const TracksList = ({ ...flatlistProps }: TrackListProps) => {
	return (
		<FlatList
			data={library}
			renderItem={({ item: value }) => <TrackListItem track={{ ...value, image: value.artwork }} />}
			{...flatlistProps}
		/>
	)
}

export default TracksList
