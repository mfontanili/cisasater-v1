import * as React from 'react';
import { alpha } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppLoader } from 'components';
import {useRoute} from "hooks";

const VerticalNavListItem = React.forwardRef(
	({ children, item, level, ...rest }, ref) => {
		const { isLoading, pathName } = useRoute();
		if (isLoading) return <AppLoader/>;

		return (
			<ListItem
				ref={ref}
				className={clsx({ active: item.url === pathName })}
				sx={{
					height: 40,
					my: 0.25,
					cursor: 'pointer',
					textDecoration: 'none !important',
					pr: 3,
					position: 'relative',
					transition: 'all 0.4s ease',
					whiteSpace: 'nowrap',
					mx: 0,
					width: '100%',
					pl: 30 + 33 * level + 'px',
					borderRadius: 0,
					'&:after': {
						content: '""',
						position: 'absolute',
						right: 0,
						top: 0,
						height: '100%',
						width: 4,
						backgroundColor: 'transparent',
					},
					'&.active:after': {
						backgroundColor: (theme) => theme.palette.primary.main,
					},
					'& .nav-item-text': {
						color: (theme) =>
							alpha(theme.palette.text.primary, 0.7),
						fontWeight: 400,
						fontSize: level === 1 ? 15 : 14,
					},

					'& .MuiTouchRipple-root': {
						zIndex: 1,
					},
					'&.nav-item-header': {
						textTransform: 'uppercase',
					},
					'&:hover, &:focus': {
						'& .nav-item-text, & .nav-item-icon, & .nav-item-icon-arrow':
                            {
								color: (theme) => theme.palette.text.primary,
                            },
					},
					'&.active': {
						backgroundColor: (theme) => theme.palette.primary.main,
						pointerEvents: 'none',
						'& .nav-item-text': {
							color: (theme) =>
								theme.palette.dark.text + '!important',
							fontWeight: 400,
						},
					},
				}}
				{...rest}
			>
				{children}
			</ListItem>
		);
	}
);

export default VerticalNavListItem;

VerticalNavListItem.displayName = 'VerticalNavListItem';

VerticalNavListItem.propTypes = {
	children: PropTypes.node,
	item: PropTypes.object,
	level: PropTypes.number,
};
