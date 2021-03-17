import React from 'react';
import { Provider } from 'react-redux';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_300Light_Italic,
	Roboto_900Black,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import store from './src/state';
import Navigator from './src/navigation';
import { CommonResult, Spinner } from './src/components';

export default function App() {
	let [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_300Light_Italic,
		Roboto_900Black,
		Roboto_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Provider store={store}>
			<Spinner />
			<CommonResult />
			<Navigator />
		</Provider>
	);
}
