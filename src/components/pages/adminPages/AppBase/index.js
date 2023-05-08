import * as React from 'react';
import { Box } from '@mui/material';
import {AppForm, AppLoader, AppTable} from 'components';
import {useModule, useRoute} from 'hooks';

const AppBase = () => {
	const { viewForm } = useModule();
	const { module, isLoading } = useRoute();

	if (isLoading) return <AppLoader/>;
	if (viewForm) {
		return (
			<Box sx={{ p: 5 }}>
				<AppForm form={module} />
			</Box>
		);
	}

	return <AppTable table={module} />;
};

export default React.memo(AppBase)