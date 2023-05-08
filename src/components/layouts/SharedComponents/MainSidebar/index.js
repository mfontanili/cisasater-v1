import * as React from 'react';

import PropTypes from 'prop-types';

import SidebarContainer from './SidebarContainer';
import SidebarWrapper from './SidebarWrapper';

const MainSidebar = ({ children }) => {
	return (
		<SidebarContainer className="app-sidebar">
			<SidebarWrapper>{children}</SidebarWrapper>
		</SidebarContainer>
	);
};

export default MainSidebar;

MainSidebar.propTypes = {
	children: PropTypes.node,
};
