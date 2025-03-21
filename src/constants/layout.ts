import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from './tokens'

//larger text layout
export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerTitleStyle: {
		fontSize: 32,
	},
	headerLargeStyle: {
		backgroundColor: colors.background,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: true,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,
}
