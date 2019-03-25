
import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import moment from 'moment'

export const FBApp = firebase.app()

const window = Dimensions.get('window');

export const overlay = StyleSheet.absoluteFillObject

export const isIphoneX = Platform.OS === 'ios' && (window.height === 812 || window.width === 812)

export const width = (pers) => {
    return pers / 100 * window.width
}
export const height = (pers) => {
    return (pers / 100 * window.height) - (Platform.OS == 'ios' ? isIphoneX ? 44 : 20 : StatusBar.currentHeight)
}

export const widthForOr = (initialOrientationKey, orientationkey) => initialOrientationKey == 'PORTRAIT'
    ? orientationkey == 'PORTRAIT' ? width : height
    : orientationkey == 'LANDSCAPE' ? height : width


export const heightForOr = (initialOrientationKey, orientationkey) => initialOrientationKey == 'PORTRAIT'
  ? orientationkey == 'PORTRAIT' ? height : width
	: orientationkey == 'LANDSCAPE' ? width : height


export const demWidth = Dimensions.get('window').width
export const demHeight = Dimensions.get('window').height