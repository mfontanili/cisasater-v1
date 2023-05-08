import * as React from 'react';
import {IconButton, Tooltip} from '@mui/material';
import {AppForm} from 'components';
import {useModule} from 'hooks';
import EditIcon from "@mui/icons-material/Edit";

export const CustomSelectToolbar = () => {
	const { openEmptyForm } = useModule('istruttori_multi');
	const { selectedRows } = useModule();

	return selectedRows.length > 1 ? (
		<Tooltip title='Modifica selezione'>
			<IconButton onClick={openEmptyForm}>
				<EditIcon/>
				<AppForm modal form={'istruttori_multi'} />
			</IconButton>
		</Tooltip>
	) : null;
};