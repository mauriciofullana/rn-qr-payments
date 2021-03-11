import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductsStackParamList } from './types';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../common/CommonHeaderOption';
import { ProductsListScreen } from '../../screens';

const ProductsStack = createStackNavigator<ProductsStackParamList>();

const ProductsStackNavigator: FunctionComponent = () => {
	return (
		<ProductsStack.Navigator
			initialRouteName="ProductsList"
			screenOptions={StackCommonOptions()}
		>
			<ProductsStack.Screen
				name="ProductsList"
				component={ProductsListScreen}
				options={() => ScreenHeaderCommonOptions({ title: 'Mis Cuentas' })}
			/>
		</ProductsStack.Navigator>
	);
};

export default ProductsStackNavigator;
