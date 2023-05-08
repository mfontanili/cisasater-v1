import * as React from 'react';
import { useState } from 'react';
import { Box, Icon, IconButton, ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import clsx from 'clsx';
import { isUrlInChildren } from 'helpers';
import PropTypes from 'prop-types';
import {useAuthorization, useRoute} from 'hooks';

const HorizontalCollapse = ({ item }) => {
	const [opened, setOpened] = useState(false);
	const { pathname } = useRoute();
	const active = isUrlInChildren(item, pathname);

	const handleToggle = (open) => {
		setOpened(open);
	};

	const { can_view } = useAuthorization(item);
	if (!can_view) return null;

	return (
		<List
			sx={{
				py: 0,
				'& .list-item-text': {
					padding: '0 0 0 16px',
				},
			}}
			className="navbarNavSubmenu"
		>
			<ListItem
				button
				sx={{
					color: (theme) => theme.palette.text.primary,
					padding: '0px 12px',
					'&.active, &.active:hover, &.active:focus': {
						backgroundColor: (theme) =>
							theme.palette.primary.main + '!important',
						color: (theme) =>
							theme.palette.dark.text + '!important',
					},
					'&.open': {
						backgroundColor: 'rgba(0,0,0,.08)',
					},
					'&.dense': {
						padding: '0px 12px',
						'& .list-item-text': {
							padding: '0 0 0 8px',
						},
					},
				}}
				className={clsx(
					'navItemSubmenu',
					opened && 'open',
					active && 'active'
				)}
				onMouseEnter={() => handleToggle(true)}
				onMouseLeave={() => handleToggle(false)}
				aria-owns={opened ? 'menu-list-grow' : null}
				aria-haspopup="true"
			>
				{item.icon && (
					<Icon
						sx={{
							color: active
								? (theme) => theme.palette.dark.text
								: 'action',
							mr: 3.5,
							fontSize: { xs: 16, xl: 18 },
						}}
					>
						{item.icon}
					</Icon>
				)}
				<ListItemText
					className="navLinkTextSubmenu"
					primary={item.title}
				/>
				<Box p={0} clone>
					<IconButton disableRipple>
						<Icon
							sx={{
								color: active
									? (theme) => theme.palette.dark.text
									: 'action',
							}}
						>
							{(theme) =>
								theme.direction === 'ltr'
									? 'chevron_right'
									: 'chevron_left'
							}
						</Icon>
					</IconButton>
				</Box>
			</ListItem>
		</List>
	);
};

export default React.memo(HorizontalCollapse);

HorizontalCollapse.propTypes = {
	item: PropTypes.object,
};
