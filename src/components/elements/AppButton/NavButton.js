import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavButton = styled(Button)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: 16,
	':hover': {
		color: theme.palette.primary.main,
		backgroundColor: 'transparent',
	},
	disableElevation: true,
	disableRipple: true,
	variant: 'text',
}));
