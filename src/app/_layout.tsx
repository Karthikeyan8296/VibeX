import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import '../../global.css'

const App = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(tabs)" />
		</Stack>
	)
}

export default App
