import React from 'react';
import { Provider } from 'react-redux';

import store from './src/state';
import Navigator from './src/navigation';
import { CommonResult, Spinner } from './src/components';

export default function App() {
	return (
		<Provider store={store}>
			<Spinner />
			<CommonResult />
			<Navigator />
		</Provider>
	);
}
