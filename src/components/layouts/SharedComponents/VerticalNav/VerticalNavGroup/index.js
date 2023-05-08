import * as React from 'react';
import PropTypes from 'prop-types';
import {useAuthorization} from 'hooks';
import VerticalNavCollapse from '../VerticalNavCollapse';
import VerticalNavItem from '../VerticalNavItem';
import VerticalNavListItem from './VerticalNavListItem';

const VerticalNavGroup = ({ item, level }) => {
	const { can_view } = useAuthorization(item);
	if (!can_view) return null;

	return (
		<>
			<VerticalNavListItem
				level={level}
				component="div"
				className={'nav-item nav-item-header'}
			>
				{item.title}
			</VerticalNavListItem>

			{item.children && (
				<>
					{item.children.map((item) => (
						<React.Fragment key={item.name}>
							{item.type === 'group' && (
								<VerticalNavGroup item={item} level={level+1} />
							)}

							{item.type === 'collapse' && (
								<VerticalNavCollapse
									item={item}
									level={level+1}
								/>
							)}

							{item.type === 'item' && (
								<VerticalNavItem item={item} level={level+1} />
							)}
						</React.Fragment>
					))}
				</>
			)}
		</>
	);
};

export default VerticalNavGroup;

VerticalNavGroup.propTypes = {
	item: PropTypes.object,
	level: PropTypes.number,
};
