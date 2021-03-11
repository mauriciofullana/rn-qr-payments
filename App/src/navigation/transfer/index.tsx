import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransferStackParamList } from './types';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../common/CommonHeaderOption';
import { TransferInitialScreen } from '../../screens';

const TransferStack = createStackNavigator<TransferStackParamList>();

const TransferStackNavigator: FunctionComponent = () => {
	return (
		<TransferStack.Navigator
			initialRouteName="TransferInital"
			screenOptions={StackCommonOptions()}
		>
			<TransferStack.Screen
				name="TransferInital"
				component={TransferInitialScreen}
				options={() => ScreenHeaderCommonOptions({ title: 'Cobrar' })}
			/>
		</TransferStack.Navigator>
	);
};

export default TransferStackNavigator;
