import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { Colors } from '../../styles';
import { baseText } from '../../styles/typography';

const ForgotScreen: FunctionComponent = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean
				euismod elementum nisi quis. Pulvinar pellentesque habitant morbi
				tristique senectus et netus. Viverra maecenas accumsan lacus vel
				facilisis. Velit euismod in pellentesque massa placerat. Sed nisi lacus
				sed viverra tellus in hac. Morbi enim nunc faucibus a pellentesque sit
				amet porttitor eget. Elementum facilisis leo vel fringilla est
				ullamcorper eget nulla facilisi. Leo duis ut diam quam. Eget duis at
				tellus at urna condimentum mattis pellentesque id. Urna id volutpat
				lacus laoreet.
			</Text>
			<Text style={styles.paragraph}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean
				euismod elementum nisi quis. Pulvinar pellentesque habitant morbi
				tristique senectus et netus. Viverra maecenas accumsan lacus vel
				facilisis. Velit euismod in pellentesque massa placerat. Sed nisi lacus
				sed viverra tellus in hac. Morbi enim nunc faucibus a pellentesque sit
				amet porttitor eget. Elementum facilisis leo vel fringilla est
				ullamcorper eget nulla facilisi. Leo duis ut diam quam. Eget duis at
				tellus at urna condimentum mattis pellentesque id. Urna id volutpat
				lacus laoreet.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: Colors.screenBackground,
	},
	paragraph: {
		...(baseText as TextStyle),
		color: Colors.baseText,
		marginBottom: 10,
		textAlign: 'justify',
	},
});

export default ForgotScreen;
