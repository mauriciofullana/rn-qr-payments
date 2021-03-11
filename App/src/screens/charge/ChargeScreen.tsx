import React, { FunctionComponent } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Buttons } from '../../styles';
import {
	containerHeaderText,
	largeHeaderFontSize,
} from '../../styles/typography';

const ChargeScreen: FunctionComponent = () => {
	return (
		<View style={styles.container}>
			<View style={styles.qrContainer}>
				<View style={styles.infoContainer}>
					<Text style={styles.qrAmount}>$ 550.00</Text>
					<Text style={styles.qrDate}>Concepto del cobro</Text>
					<Text style={styles.qrDate}>Vence el 10/11/2020</Text>
				</View>
				<View style={styles.separator} />
				<View style={styles.qr}>
					<Image
						style={styles.img}
						source={require('../../../assets/qr.png')}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: 50,
	},
	qrContainer: {
		flex: 1.5,
		backgroundColor: Colors.sectionBackground,
		borderRadius: 10,
		marginTop: 20,
		marginBottom: 50,

		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		elevation: 3,
		shadowRadius: 5,
	},
	separator: {
		borderColor: Colors.mediumGray,
		borderWidth: 0.5,
	},
	infoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	qr: {
		flex: 1.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		height: '60%',
		width: undefined,
		aspectRatio: 712 / 711,
		borderColor: 'white',
		borderWidth: 8,
		borderRadius: 5,
	},
	qrAmount: {
		color: Colors.lightGray,
		...containerHeaderText,
		fontSize: largeHeaderFontSize,
		marginBottom: 15,
	},
	qrDate: {
		color: Colors.lightGray,
		...containerHeaderText,
	},
	optionsContainer: {
		flex: 1,
		//alignItems: 'center'
	},
	commonButton: {
		...Buttons.actionButton,
		marginBottom: 20,
		flexDirection: 'row',
		paddingHorizontal: 15,
	},
	buttonText: {
		flex: 1,
		fontWeight: 'bold',
		color: Colors.white,
	},
	editButton: {
		backgroundColor: 'transparent',
		borderColor: Colors.main,
		borderWidth: 1,
	},
	editButtonText: {
		color: Colors.screenBackground,
	},
	shareButton: {
		backgroundColor: 'transparent',
	},
	shareButtonText: {
		color: Colors.white,
	},
	iconContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
	buttonIcon: {},
});

export default ChargeScreen;
