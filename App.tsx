// import { StatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>VibeX</Text>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
