import { colors, fontSize } from '@/constants/tokens'
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const TabsNavigation = () => {
	return (
		<Tabs
			initialRouteName="(songs)"
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					height: 65,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 4,
					elevation: 0,
				},
				tabBarBackground: () => (
					<BlurView
						intensity={90}
						tint="dark"
						style={{
							...StyleSheet.absoluteFillObject,
							overflow: 'hidden',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							backgroundColor: 'rgba(14, 14, 14, 0.9)',
						}}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlists',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="playlist-play" size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
					tabBarIcon: ({ color }) => (
						<Ionicons name="musical-notes-sharp" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
					tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />,
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
