import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Colors } from '../../styles';
import { smallestFontSize } from '../../styles/typography';
import { authSelector } from '../../state';

const DrawerWelcome: FunctionComponent = () => {
	const { user } = useSelector(authSelector);

	const verifyPermissions = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (!result.granted) {
			Alert.alert(
				'Insufficient permissions!',
				'You need to grant gallery permissions to use this feature.',
				[{ text: 'OK' }]
			);
			return false;
		}

		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			return;
		}
		const image = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			base64: true,
		});

		console.log(image);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.lastAccess}>Último acceso: 20 May 14:48</Text>
			<Text style={styles.lastPassChange}>
				Último cambio de contraseña: 7 May 14:22
			</Text>
		</View>
	);
};

export default DrawerWelcome;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		justifyContent: 'center',
	},
	img: {
		width: 55,
		height: 55,
		borderRadius: 35,
		borderColor: Colors.mediumGray,
		borderWidth: 1,
		marginRight: 10,
	},
	headerContainer: {
		flexDirection: 'row',
		marginVertical: 10,
	},
	headerFirst: {
		color: Colors.lightGray,
	},
	headerSecond: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.lightGray,
	},
	lastAccess: {
		fontSize: smallestFontSize,
		color: Colors.lightGray,
	},
	lastPassChange: {
		fontSize: smallestFontSize,
		color: Colors.lightGray,
	},
});
