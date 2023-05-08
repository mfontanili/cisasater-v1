import * as React from 'react';
import PropTypes from 'prop-types';
import { ContentView } from '../SharedComponents';
import Header from './Header';
import LayoutContainer from './LayoutContainer';
import LayoutWrapper from './LayoutWrapper';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const NavBarLayout = ({ children }) => {
	return (
		<LayoutContainer>
			<LayoutWrapper>
				<Sidebar />
				<MainContent>
					<Header />
					<ContentView>{children}</ContentView>
				</MainContent>
			</LayoutWrapper>
		</LayoutContainer>
	);
};

export default NavBarLayout;

NavBarLayout.propTypes = {
	children: PropTypes.node,
};
