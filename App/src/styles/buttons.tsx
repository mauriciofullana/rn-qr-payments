import * as Colors from './colors';
import * as Typography from './typography';
import * as Spacing from './spacing';

export const base = {
	backgroundColor: Colors.enabled,
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 15,
	height: 44,
};

export const text = {
	color: Colors.white,
	fontSize: Typography.smallestFontSize,
	fontWeight: 'bold',
	letterSpacing: 1,
};

export const textUnselected = {
	...text,
	color: Colors.mediumGray,
};

export const small = {
	paddingHorizontal: Spacing.small,
	paddingVertical: Spacing.small + 2,
	width: 75,
};

export const large = {
	paddingHorizontal: Spacing.large,
	paddingVertical: Spacing.large + 4,
};

export const rounded = {
	borderRadius: 50,
};

export const enabledButton = {
	backgroundColor: Colors.enabled,
};

export const disabledButton = {
	backgroundColor: Colors.mainDisabled,
};

export const smallRounded = {
	...base,
	...small,
	...rounded,
};

export const actionButton = {
	...base,
	height: 50,
	backgroundColor: 'transparent',
	borderWidth: 0.5,
	borderColor: Colors.main,
};
