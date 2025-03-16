import { StatusBar, Text, View } from 'react-native'
import '../../global.css'

export default function App() {
	return (
		<View className="flex-1 items-center justify-center">
			<StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
			<Text className="text-xl font-semibold">VibeX</Text>
		</View>
	)
}
