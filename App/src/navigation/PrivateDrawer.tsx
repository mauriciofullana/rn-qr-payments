import React, { FunctionComponent } from 'react';

import { DraweParamList } from './types';
import DrawerContent from './common/DrawerContent';
import UserProfileStackNavigator from './userProfile';
import HomeStackNavigator from './home';
import ProductsStackNavigator from './products';
import TransferStackNavigator from './transfer';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNav = createDrawerNavigator<DraweParamList>();

const DrawerNavigator: FunctionComponent = () => {
	return (
		<DrawerNav.Navigator
			drawerContent={(props) => {
				return <DrawerContent {...props} />;
			}}
		>
			<DrawerNav.Screen name="HomeScreen" component={HomeStackNavigator} />
			<DrawerNav.Screen
				name="ProductsScreen"
				component={ProductsStackNavigator}
			/>
			<DrawerNav.Screen name="Transfer" component={TransferStackNavigator} />
			<DrawerNav.Screen
				name="UserProfile"
				component={UserProfileStackNavigator}
			/>
		</DrawerNav.Navigator>
	);
};

export default DrawerNavigator;
