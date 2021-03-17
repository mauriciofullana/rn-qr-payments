import { StyleProp, TextStyle } from 'react-native';
import * as Colors from './colors';

export const extraLargeFontSize = 40;
export const largeFontSize = 18;
export const largestFontSize = 20;
export const buttonFontSize = 18;
export const baseFontSize = 15;
export const smallFontSize = 14;
export const smallestFontSize = 12;
export const largeHeaderFontSize = 28;
export const headerFontSize = 18;

const base = {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
};

export const baseText: StyleProp<TextStyle> = {
	fontFamily: 'Roboto_400Regular',
	fontSize: baseFontSize,
};

export const baseBoldText: StyleProp<TextStyle> = {
	fontFamily: 'Roboto_700Bold',
	fontSize: baseFontSize,
};

export const link = {
	color: Colors.thoughtbotRed,
	fontWeight: 'bold',
};

export const bodyText = {
	color: Colors.baseText,
	fontSize: smallFontSize,
	lineHeight: 19,
};

export const headerText = {
	color: Colors.darkText,
	fontSize: headerFontSize,
	fontWeight: 'bold',
};

export const descriptionText = {
	color: Colors.baseText,
	fontSize: smallFontSize,
};

export const screenHeader = {
	...base,
	color: Colors.baseText,
	fontSize: largeFontSize,
	fontWeight: 'bold',
};

export const inputText = {
	...baseText,
	color: Colors.loginText,
	fontSize: baseFontSize,
};

export const inputErrorText = {
	color: Colors.lightRed,
	fontSize: smallestFontSize,
	marginLeft: 10,
};

export const screenFooter = {
	...base,
	...descriptionText,
};

export const sectionHeader = {
	...base,
	...headerText,
};

export const containerHeaderText = {
	fontSize: smallFontSize,
};
