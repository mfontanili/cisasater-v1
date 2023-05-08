import * as React from 'react';
import {ListItem, ListItemText} from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {AppLoader} from 'components';
import {useAuthorization, useRoute} from 'hooks';

const HorizontalItem = ({ item }) => {
	const { isLoading, asPath } = useRoute();
	const { can_view } = useAuthorization(item);

	if (isLoading) return <AppLoader/>;
	if (!can_view) return null;
	return (
		<Link href={item.url} as={item.as} legacyBehavior>
			<ListItem
				className={clsx('navItemSubmenu', {
					active: item.url === asPath,
				})}
				exact={item.exact}
				sx={{
					textAlign: 'center',
					minHeight: 40,
					padding: '4px 12px',
					cursor: 'pointer',
					borderRadius: 1,
					color: (theme) => theme.palette.text.primary,
					textDecoration: 'none!important',
					minWidth: 120,
					'&.active': {
						backgroundColor: (theme) => theme.palette.primary.main,
						color: (theme) =>
							theme.palette.dark.text + '!important',
						'& .list-item-text-primary': {
							color: 'inherit',
						},
						'& .list-item-icon': {
							color: 'inherit',
						},
					},
					'& .list-item-text': {
						padding: '0 0 0 16px',
					},
					'&.dense': {
						padding: '4px 12px',
						minHeight: 40,
						'& .list-item-text': {
							padding: '0 0 0 8px',
						},
					},
				}}
			>
				<ListItemText
					className="AppNavLinkTextSubmenu"
					primary={item.title}
				/>
			</ListItem>
		</Link>
	);
};

export default React.memo(HorizontalItem);

HorizontalItem.propTypes = {
	item: PropTypes.object,
	checkACL: PropTypes.bool,
};
