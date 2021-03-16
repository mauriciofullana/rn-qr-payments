import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../styles';
import {
	baseFontSize,
	smallestFontSize,
	smallFontSize,
} from '../../styles/typography';

const Welcome: FunctionComponent = () => {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.header}>
					<Text style={styles.headerText}>Bienvenido, </Text>
					<Text style={[styles.headerText, { fontWeight: 'bold' }]}>
						Mauricio Fullana
					</Text>
				</View>
				<Text style={styles.infoText}>Último acceso: 20 May 14:48</Text>
				<Text style={styles.infoText}>
					Último cambio de contraseña: 7 May 14:22
				</Text>
			</View>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 40,
	},
	header: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	headerText: {
		color: Colors.baseText,
		fontSize: baseFontSize,
	},
	infoText: {
		fontSize: smallestFontSize,
		color: Colors.baseText,
	},
});
