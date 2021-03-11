import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeStackParamList } from './types';
import { Colors } from '../../styles';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../common/CommonHeaderOption';
import {
	HomeScreen,
	MovementsScreen,
	ProductsListScreen,
	SettingsScreen,
} from '../../screens';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: FunctionComponent = () => {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			screenOptions={StackCommonOptions()}
		>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={() =>
					ScreenHeaderCommonOptions({
						title: '',
						includeNotifications: true,
						props: {
							headerStyle: {
								elevation: 0,
								shadowOpacity: 0,
								borderBottomWidth: 0,
								backgroundColor: Colors.screenBackground,
							},
						},
					})
				}
			/>
			<HomeStack.Screen
				name="ProductsList"
				component={ProductsListScreen}
				options={{
					headerTitle: 'Mis Cuentas',
				}}
			/>
			<HomeStack.Screen name="Settings" component={SettingsScreen} />
			<HomeStack.Screen name="Movements" component={MovementsScreen} />
		</HomeStack.Navigator>
	);
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.lightGray,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
	headerTitle: {
		alignItems: 'center',
	},
});

export default HomeStackNavigator;
