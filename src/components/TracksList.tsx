import React from 'react'
import { FlatList } from 'react-native'
import library from "@/assets/data/library.json"

const TracksList = () => {
	return <FlatList data={library} renderItem={() => null} />
}

export default TracksList
