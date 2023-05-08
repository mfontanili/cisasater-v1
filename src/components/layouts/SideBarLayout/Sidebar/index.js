import * as React from 'react';
import {Box, Drawer} from '@mui/material';
import {useLayoutStore} from 'hooks';
import {MainSidebar, Scrollbar, VerticalNav} from '../../SharedComponents';
import SidebarWrapper from './SidebarWrapper';

const AppSidebar = () => {
	const { viewSidebar, closeSidebar } = useLayoutStore();

	return (
		<>
			<Drawer
				open={Boolean(viewSidebar)}
				onClose={closeSidebar}
				sx={{
					display: { xl: 'none', xs: 'block' },
					position: 'absolute',
				}}
			>
				<SidebarWrapper>
					<MainSidebar>
						<Scrollbar sx={{ paddingY: 2 }}>
							<VerticalNav/>
						</Scrollbar>
					</MainSidebar>
				</SidebarWrapper>
			</Drawer>

			<Box sx={{ display: { xs: 'none', lg: 'block' } }}>
				<SidebarWrapper>
					<MainSidebar>
						<Scrollbar
							sx={{
								paddingY: 4,
								height: 'calc(100vh - 71px) !important',
							}}
						>
							<VerticalNav/>
						</Scrollbar>
					</MainSidebar>
				</SidebarWrapper>
			</Box>
		</>
	);
};

export default AppSidebar;
