import * as React from 'react';
import { Fragment } from 'react';
import List from '@mui/material/List';
import {AppLoader} from 'components';
import {useRoute} from 'hooks';
import VerticalNavCollapse from './VerticalNavCollapse';
import VerticalNavGroup from './VerticalNavGroup';
import VerticalNavItem from './VerticalNavItem';

const VerticalNav = () => {
	const { isLoading, routes } = useRoute();
	if (isLoading) return <AppLoader/>;

	return (
		<List
			sx={{
				position: 'relative',
				padding: 0
			}}
			component="div"
		>
			{routes.map((item) => !item.hidden && (
				<Fragment key={item.name}>
					{item.type === 'group' && (
						<VerticalNavGroup item={item} level={0} />
					)}

					{item.type === 'collapse' && (
						<VerticalNavCollapse item={item} level={0} />
					)}

					{item.type === 'item' && (
						<VerticalNavItem item={item} level={0} />
					)}
				</Fragment>
			))}
		</List>
	);
};

export default VerticalNav;
