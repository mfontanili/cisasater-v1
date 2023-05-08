import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import {useLayoutStore} from 'hooks';

import {
	MainSidebar,
	Scrollbar,
	UserInfo,
	VerticalNav,
} from '../../SharedComponents';
import AppSidebarWrapper from './AppSidebarWrapper';


const Sidebar = () => {
	const { viewSidebar, closeSidebar } = useLayoutStore();

	return (
		<Drawer
			open={Boolean(viewSidebar)}
			onClose={closeSidebar}
			sx={{ position: 'absolute' }}
		>
			<AppSidebarWrapper className="standard-sidebar">
				<MainSidebar>
					<UserInfo />

					<Scrollbar
						sx={{
							py: 2,
							height: 'calc(100vh - 70px) !important',
						}}
					>
						<VerticalNav />
					</Scrollbar>
				</MainSidebar>
			</AppSidebarWrapper>
		</Drawer>
	);
};

export default Sidebar;
