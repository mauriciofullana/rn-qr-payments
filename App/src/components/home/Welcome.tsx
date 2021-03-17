import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import {
	baseBoldText,
	baseText,
	largeFontSize,
	largestFontSize,
} from '../../styles/typography';

const Welcome: FunctionComponent = () => {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.header}>
					<Text style={styles.headerText}>Bienvenido, </Text>
					<Text style={[styles.headerNameText]}>Mauricio Fullana</Text>
				</View>
			</View>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		justifyContent: 'center',
	},
	header: {
		marginLeft: 50,
	},
	headerText: {
		...(baseText as TextStyle),
		fontSize: largeFontSize,
	},
	headerNameText: {
		...(baseBoldText as TextStyle),
		fontSize: largestFontSize,
	},
});
