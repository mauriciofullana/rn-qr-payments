import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
	DrawerContentOptions,
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';
import {
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Colors } from '../../styles';
import Welcome from '../../components/drawer/DrawerWelcome';
import { logout } from '../../state';

export default function DrawerContent(
	props: DrawerContentComponentProps<DrawerContentOptions>
) {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		props.navigation.dispatch(DrawerActions.closeDrawer());
		dispatch(logout());
	};

	const renderDrawerItem = (
		label: string,
		navigateTo: string,
		renderBorder: boolean,
		icon: any
	) => {
		return (
			<DrawerItem
				style={renderBorder ? styles.drawerItem : null}
				label={label}
				inactiveTintColor={Colors.darkGray}
				activeTintColor={Colors.main}
				onPress={() => props.navigation.navigate(navigateTo)}
				icon={icon}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.welcomeContainer}>
				<Welcome />
			</View>
			<DrawerContentScrollView>
				<View>
					{renderDrawerItem('Inicio', 'Home', true, () => (
						<MaterialCommunityIcons
							name="home"
							color={Colors.darkGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Pagar', 'Transfer', true, () => (
						<MaterialCommunityIcons
							name="bank-transfer-out"
							color={Colors.darkGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Cobrar', 'ChargeList', true, () => (
						<MaterialCommunityIcons
							name="qrcode"
							color={Colors.darkGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Historial', 'Movements', true, () => (
						<MaterialCommunityIcons
							name="format-list-bulleted"
							color={Colors.darkGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Ajustes', 'Settings', false, () => (
						<MaterialIcons name="settings" color={Colors.darkGray} size={26} />
					))}
				</View>
			</DrawerContentScrollView>
			<DrawerItem
				style={{
					marginBottom: 10,
					marginLeft: 12,
					borderTopColor: Colors.darkGray,
					borderTopWidth: 0.5,
				}}
				labelStyle={{ fontWeight: 'bold' }}
				label="Salir"
				inactiveTintColor={Colors.darkGray}
				activeTintColor={Colors.main}
				onPress={() => handleLogOut()}
				icon={() => (
					<Ionicons name="ios-log-out" size={28} color={Colors.darkGray} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
	},
	welcomeContainer: {
		backgroundColor: Colors.darkestGray,
		paddingTop: 50,
	},
	drawerItem: {
		borderBottomColor: Colors.darkGray,
		borderBottomWidth: 0.3,
	},
});
