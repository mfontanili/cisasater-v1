import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import {AppLoader} from 'components';
import {useRoute} from 'hooks';
import HorizontalCollapse from './HorizontalCollapse';
import HorizontalGroup from './HorizontalGroup';
import HorizontalItem from './HorizontalItem';

const HorizontalNav = () => {
	const { isLoading, routes } = useRoute();

	if (isLoading) return <AppLoader/>;
	return (
		<List className="navbarNav">
			{routes.map((item) => !item.hidden && (
				<React.Fragment key={item.name}>
					{item.type === 'group' && (
						<HorizontalGroup item={item} nestedLevel={0} />
					)}

					{item.type === 'collapse' && (
						<HorizontalCollapse item={item} nestedLevel={0} />
					)}

					{item.type === 'item' && (
						<HorizontalItem item={item} nestedLevel={0} />
					)}

					{item.type === 'divider' && <Divider sx={{ my: 5 }} />}
				</React.Fragment>
			))}
		</List>
	);
};

export default HorizontalNav;
