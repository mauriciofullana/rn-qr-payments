import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import { Colors } from '../../styles';
import { inputErrorText } from '../../styles/typography';

interface IFloatingTitleTextInputProps {
	value?: string;
	label: string;
	currencyDivider: ',' | '.';
	blurOnSubmit: boolean;
	maxLength: number;
	onChangeText(text: string): void;
	secureTextEntry?: boolean;
	errorMessage?: string;
	onEndEditingFunction?: () => void;
	required?: boolean;
}

const FormFloatingLabelInput: FunctionComponent<IFloatingTitleTextInputProps> = ({
	value,
	label,
	currencyDivider,
	errorMessage,
	onChangeText,
	secureTextEntry,
	onEndEditingFunction,
	required,
}) => {
	const inputLabel = (label += required ? ' *' : '');

	return (
		<View style={styles.container}>
			<FloatingLabelInput
				currencyDivider={currencyDivider}
				label={inputLabel}
				value={value}
				blurOnSubmit={false}
				maxLength={20}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
				onEndEditing={onEndEditingFunction}
				containerStyles={
					errorMessage && errorMessage != ''
						? {
								borderBottomColor: Colors.lightRed,
								borderBottomWidth: 1,
						  }
						: {}
				}
			/>
			{errorMessage && errorMessage != '' ? (
				<Animatable.Text
					style={styles.errorMessageText}
					animation="fadeInLeft"
					duration={500}
				>
					{errorMessage}
				</Animatable.Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	errorMessageText: {
		...inputErrorText,
	},
});

export default FormFloatingLabelInput;
