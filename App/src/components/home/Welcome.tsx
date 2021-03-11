import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
	return (
		<View style={styles.welcome}>
			<View style={styles.welcomeTextContainer}>
				<View style={{ flexDirection: 'row', marginBottom: 5 }}>
					<Text style={{ color: '#d6d6d6' }}>Bienvenido, </Text>
					<Text style={{ fontWeight: 'bold', color: '#d6d6d6' }}>
						Mauricio Fullana
					</Text>
				</View>
				<Text style={{ fontSize: 13, color: '#c9c9c9' }}>
					Último acceso: 20 May 14:48
				</Text>
				<Text style={{ fontSize: 13, color: '#c9c9c9' }}>
					Último cambio de contraseña: 7 May 14:22
				</Text>
			</View>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	welcome: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 40,
	},
	welcomeTextContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},
});
