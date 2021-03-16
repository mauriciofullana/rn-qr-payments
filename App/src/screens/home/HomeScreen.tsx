import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/home/types';
import RecentMovements from '../../components/home/RecentMovements';
import { baseFontSize, smallestFontSize } from '../../styles/typography';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sectionBackground } from '../../styles/colors';
import { Welcome } from '../../components';
import {
	IMovement,
	movementsSelector,
	productsSelector,
	products as productsAction,
	movements as movementsAction,
} from '../../state';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
	const dispatch = useDispatch();
	const [activeProdutId, setActiveProdutId] = useState('');
	const { movements } = useSelector(movementsSelector);
	const { products } = useSelector(productsSelector);

	var activeMovements: IMovement[] = [];
	// MovementsFilter
	if (movements.length > 0) {
		activeMovements = movements.filter((movement) => {
			if (activeProdutId === '') {
				setActiveProdutId(products[0]._id);
				return;
			}

			return movement.productId == activeProdutId;
		});
	}

	useEffect(() => {
		dispatch(productsAction());
		dispatch(movementsAction());
	}, [dispatch]);

	return (
		<View style={styles.container}>
			<Welcome />

			<View style={styles.actionsContainer}>
				<TouchableOpacity
					style={styles.section}
					onPress={() => navigation.navigate('Transfer')}
				>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							style={styles.icon}
							name="qrcode"
							color={Colors.mainOpacity}
							size={58}
						/>
						<Text style={styles.sectionText}>COBRAR</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.section}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							style={styles.icon}
							name="bank-transfer-out"
							color={Colors.mainOpacity}
							size={58}
						/>
						<Text style={styles.sectionText}>PAGAR</Text>
					</View>
				</TouchableOpacity>
			</View>

			{activeMovements.length > 0 && products.length > 0 ? (
				<Animatable.View
					style={styles.recentTrasnsactionsContainer}
					animation="fadeInUpBig"
				>
					<RecentMovements movements={activeMovements} />
				</Animatable.View>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
	},
	actionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	section: {
		alignItems: 'center',
	},
	iconContainer: {
		marginBottom: 10,
		backgroundColor: sectionBackground,
		borderRadius: 10,
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.3,
		elevation: 3,
		shadowRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		height: 120,
		width: 120,
	},
	icon: {
		backgroundColor: 'transparent',
		marginBottom: 10,
	},
	sectionText: {
		color: Colors.main,
		fontSize: smallestFontSize,
		fontWeight: 'bold',
	},
	recentTrasnsactionsContainer: {
		flex: 1,
		marginTop: 40,
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		elevation: 3,
		shadowRadius: 8,
	},
});

export default HomeScreen;
