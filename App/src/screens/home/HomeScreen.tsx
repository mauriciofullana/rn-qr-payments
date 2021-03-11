import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/home/types';
import RecentMovements from '../../components/home/RecentMovements';
import { baseFontSize } from '../../styles/typography';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightWarmGray } from '../../styles/colors';
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
							color={Colors.white}
							size={38}
						/>
					</View>
					<View>
						<Text style={styles.sectionText}>Cobrar</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.section}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							style={styles.icon}
							name="bank-transfer-out"
							color={Colors.white}
							size={38}
						/>
					</View>
					<View>
						<Text style={styles.sectionText}>Pagar</Text>
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
		paddingHorizontal: 20,
	},
	accountsLinkContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	accountsLinkText: {
		color: Colors.mediumGray,
		fontSize: baseFontSize,
		marginRight: 10,
	},
	productsCarouselContainer: {
		marginTop: 10,
	},
	recentTrasnsactionsContainer: {
		flex: 1,
		marginTop: 40,

		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		elevation: 3,
		shadowRadius: 3,
	},
	section: {
		flex: 1,
		alignItems: 'center',
	},
	iconContainer: {
		marginBottom: 10,
		backgroundColor: lightWarmGray,
		borderRadius: 10,
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		elevation: 3,
		shadowRadius: 3,
	},
	icon: {
		padding: 24,
		backgroundColor: 'transparent',
	},
	sectionText: {
		color: Colors.white,
		fontSize: 14,
	},
});

export default HomeScreen;
