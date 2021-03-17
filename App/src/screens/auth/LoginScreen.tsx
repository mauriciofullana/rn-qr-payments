import React, { FunctionComponent, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Image,
	Switch,
	TextStyle,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { Colors } from '../../styles';
import { LoginScreenNavigationProp } from '../../navigation/auth/types';
import { pageHorizontalPadding } from '../../styles/spacing';
import { FormButton, FormInput } from '../../components';
import { login } from '../../state';
import { baseText } from '../../styles/typography';

interface LoginProps {
	navigation: LoginScreenNavigationProp;
}

const LoginScreen: FunctionComponent<LoginProps> = ({ navigation }) => {
	const [userName, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
	const [isEnabled, setIsEnabled] = useState<boolean>(false);
	const dispatch = useDispatch();

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	// const disabledLogin = () => !userName || !password;
	// const handleSecurityTextEntry = () => setSecureTextEntry((state) => !state);
	//const handleLogin = () => dispatch(login({ userName, password }));

	return (
		<ScrollView
			style={styles.scrollContainer}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<Animatable.View
				style={styles.logoContainer}
				animation="bounceIn"
				duration={1500}
			>
				<Image
					style={styles.img}
					source={require('../../../assets/logo.png')}
				/>
			</Animatable.View>
			<View style={styles.formContainer}>
				<FormInput
					value={userName}
					onChangeValue={setUsername}
					placeHolderText="Usuario"
					iconName="user"
				>
					{userName.length > 0 ? (
						<Animatable.View animation="bounceIn">
							<Feather
								style={styles.inputIcon}
								name="check-circle"
								color={Colors.green}
								size={20}
							/>
						</Animatable.View>
					) : null}
				</FormInput>
				<FormInput
					value={password}
					onChangeValue={setPassword}
					placeHolderText="Contraseña"
					iconName="lock"
					secureTextEntry={secureTextEntry}
				>
					<TouchableOpacity onPress={() => {}}>
						<Ionicons
							style={styles.inputIcon}
							name={secureTextEntry ? 'md-eye' : 'md-eye-off'}
							color={Colors.darkGray}
							size={20}
						/>
					</TouchableOpacity>
				</FormInput>
				<View style={styles.switchContainer}>
					<Switch
						style={styles.switch}
						trackColor={{ false: Colors.lightGray, true: Colors.main }}
						thumbColor={Colors.lightGray}
						ios_backgroundColor={Colors.mediumGray}
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
					<Text style={styles.switchText}>Recordar Usuario</Text>
				</View>

				<FormButton
					isDisabled={() => false}
					onPressCallback={() => {}}
					text="INGRESAR"
				/>

				<TouchableOpacity
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('Forgot')}
				>
					<Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
				</TouchableOpacity>
				<View style={styles.signupContainer}>
					<Text style={styles.signupText}>¿No tienes una cuenta?</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
						<Text style={[styles.signupText, styles.signupActionText]}>
							Regístrate
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: pageHorizontalPadding,
	},
	logoContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: '55%',
		height: undefined,
		aspectRatio: 585 / 149,
	},
	formContainer: {
		flex: 1,
	},
	inputIcon: {
		padding: 5,
	},
	switchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	switch: {
		marginRight: 10,
	},
	switchText: {
		...(baseText as TextStyle),
		color: Colors.baseText,
	},
	forgotPasswordText: {
		padding: 10,
		...(baseText as TextStyle),
		color: Colors.baseText,
	},
	signupContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingBottom: 35,
	},
	signupText: {
		...(baseText as TextStyle),
		color: Colors.baseText,
		marginHorizontal: 5,
	},
	signupActionText: {
		...(baseText as TextStyle),
		color: Colors.main,
	},
});

export default LoginScreen;
