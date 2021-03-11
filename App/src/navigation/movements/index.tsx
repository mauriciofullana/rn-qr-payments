import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { MovementsStackParamList } from './types';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import { Colors } from '../../styles';
import { PrivateDrawerNavigationProp } from '../types';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../common/CommonHeaderOption';

const MovementsStack = createStackNavigator<MovementsStackParamList>();

const MovementsStackNavigator: FunctionComponent = () => {
	const navigation = useNavigation<PrivateDrawerNavigationProp>();

	return (
		<MovementsStack.Navigator
			initialRouteName="Movements"
			screenOptions={StackCommonOptions()}
		>
			<MovementsStack.Screen
				name="Movements"
				component={MovementsScreen}
				options={() => ScreenHeaderCommonOptions({ title: 'Movimientos' })}
			/>
		</MovementsStack.Navigator>
	);
};

export default MovementsStackNavigator;
