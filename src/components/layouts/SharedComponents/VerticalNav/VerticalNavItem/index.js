import * as React from 'react';
import { ListItemText } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {useAuthorization, useLayoutStore} from 'hooks';
import VerticalNavListItem from './VerticalNavListItem';

const VerticalNavItem = ({ level, item }) => {
	const { closeSidebar } = useLayoutStore();
	const { can_view } = useAuthorization(item);
	if (!can_view) return null;

	return (
		<Link href={item.url} as={item.as} passHref legacyBehavior>
			<VerticalNavListItem
				item={item}
				level={level}
				onClick={closeSidebar}
			>
				<ListItemText
					primary={item.title}
					classes={{ primary: 'nav-item-text' }}
				/>
			</VerticalNavListItem>
		</Link>
	);
};

export default VerticalNavItem;

VerticalNavItem.propTypes = {
	item: PropTypes.object,
	level: PropTypes.number,
};
