import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { ContentView } from '../SharedComponents';
import Header from './Header';
import LayoutContainer from './LayoutContainer';
import LayoutWrapper from './LayoutWrapper';
import Sidebar from './Sidebar';

const SideBarLayout = ({ children }) => {
	return (
		<LayoutContainer>
			<LayoutWrapper>
				<Header />
				<Box className="mainContent">
					<Sidebar />
					<ContentView>{children}</ContentView>
				</Box>
			</LayoutWrapper>
		</LayoutContainer>
	);
};

export default SideBarLayout;

SideBarLayout.propTypes = {
	children: PropTypes.node,
};
