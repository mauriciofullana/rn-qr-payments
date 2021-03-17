import React from 'react';
import { TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../styles';
import { PrivateDrawerNavigationProp } from '../types';
import { StackNavigationOptions } from '@react-navigation/stack';

interface IScreenHeaderOptionsProps {
	title: string;
	includeNotifications?: boolean;
	props?: {};
}

export const ScreenHeaderCommonOptions = ({
	title,
	props,
	includeNotifications,
}: IScreenHeaderOptionsProps) => {
	const navigation = useNavigation<PrivateDrawerNavigationProp>();

	return {
		...props,
		headerTitle: title,
		headerTransparent: false,
		headerTitleStyle: {
			fontSize: 18,
		},
		headerLeft: () => {
			return (
				<TouchableOpacity
					style={styles.headerIconContainer}
					onPress={() => navigation.openDrawer()}
				>
					<Ionicons style={styles.hederMenuIcon} name="md-menu" size={28} />
				</TouchableOpacity>
			);
		},
		headerRight: () => {
			if (includeNotifications) {
				return (
					<TouchableOpacity
						style={styles.headerIconContainer}
						onPress={() => navigation.navigate('UserProfile')}
					>
						<Image
							style={styles.img}
							source={require('../../../assets/logo.png')}
						/>
					</TouchableOpacity>
				);
			} else {
				return null;
			}
		},
	};
};

export const StackCommonOptions = (): StackNavigationOptions => {
	return {
		headerBackTitleVisible: false,
		headerTitleAlign: 'center',
		headerStyle: {
			elevation: Platform.OS === 'ios' ? 0 : 4,
			shadowOpacity: Platform.OS === 'ios' ? 0 : 4,
			borderBottomWidth: 0,
			backgroundColor: Colors.screenBackground,
		},
		headerTintColor: Colors.headerText,
	};
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.headerIcon,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
	logoContainer: {
		flex: 1,
	},
	img: {
		height: 30,
		aspectRatio: 585 / 149,

		// width: 38,

		// borderRadius: 19,
		// borderColor: Colors.mediumGray,
		// borderWidth: 1,
		// marginRight: 10,
	},
});
