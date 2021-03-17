import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { Colors } from '../../styles';
import { baseFontSize, baseText } from '../../styles/typography';

const SettingsScreen: FunctionComponent = () => {
	const [selectedLanguage, setSelectedLanguage] = useState<number>(0);

	return (
		<View style={styles.container}>
			<View style={styles.optionContainer}>
				<MaterialIcons name="language" size={22} color={Colors.baseText} />
				<Text style={styles.optionText}>Idioma</Text>
				<View style={styles.segmentedControlContainer}>
					<SegmentedControlTab
						values={['Español', 'English']}
						selectedIndex={selectedLanguage}
						onTabPress={(index) => setSelectedLanguage(index)}
						activeTabStyle={{
							backgroundColor: Colors.main,
						}}
						tabTextStyle={{
							color: Colors.main,
						}}
						tabStyle={{
							borderColor: Colors.main,
						}}
					/>
				</View>
			</View>
			<View style={styles.optionContainer}>
				<MaterialIcons name="star-border" size={23} color={Colors.baseText} />
				<Text style={styles.optionText}>Califique la app</Text>
				<View style={styles.rightIconContainer}>
					<Feather name="chevron-right" size={22} color={Colors.baseText} />
				</View>
			</View>
			<View style={styles.optionContainer}>
				<Feather name="info" size={22} color={Colors.baseText} />
				<Text style={styles.optionText}>Version 1.0.0</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
	},
	optionText: {
		flex: 1,
		...(baseText as TextStyle),
		fontSize: baseFontSize,
		marginLeft: 10,
	},
	optionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
		height: 80,
		borderBottomColor: Colors.mediumGray,
		borderBottomWidth: 0.5,
	},
	segmentedControlContainer: {
		flex: 1,
	},
	rightIconContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
});

export default SettingsScreen;
