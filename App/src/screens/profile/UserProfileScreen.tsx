import React, { FunctionComponent, useState } from 'react';
import {
	StyleSheet,
	Image,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { pageHorizontalPadding } from '../../styles/spacing';
import { Colors } from '../../styles';
import UserForm from '../../components/user/UserForm';
import { useSelector } from 'react-redux';
import { authSelector, updateUser } from '../../state';

const UserProfileScreen: FunctionComponent = () => {
	const { user } = useSelector(authSelector);
	const dispatch = useDispatch();
	const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			enabled
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableOpacity
					style={styles.userPicContainer}
					// onPress={takeImageHandler}
				>
					<Image
						style={styles.img}
						source={require('../../../assets/pic.jpeg')}
					/>
				</TouchableOpacity>
				<UserForm
					formButtonText="ACTUALIZAR"
					formButtonCallback={(
						id: string,
						name: string,
						lastName: string,
						email: string,
						userName: string
					) => {
						dispatch(updateUser({ id, name, lastName, email, userName }));
					}}
					user={user}
					updatePassword={false}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: pageHorizontalPadding,
	},
	img: {
		width: 130,
		height: 130,
		borderRadius: 75,
	},
	userPicContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15,
		padding: 10,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.3,
		elevation: 8,
		shadowRadius: 5,
	},
});

export default UserProfileScreen;
