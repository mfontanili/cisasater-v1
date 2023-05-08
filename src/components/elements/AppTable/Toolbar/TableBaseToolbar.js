import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {IconButton, Menu, MenuItem, Tooltip} from '@mui/material';
import PropTypes from 'prop-types';
import {AppForm, AppLoader} from 'components';
import {useAnchor, useAuthorization, useModule, useTables} from 'hooks';

export const TableBaseToolbar = ({ table }) => {
	const { actions: { add }, options: {CustomBaseToolbar = null}} = useTables(table);
	const form = add.form || table;
	const { openForm, setFormValues } = useModule(form);
	const { isLoading, can_add } = useAuthorization();
	const { openEl, anchorEl, handleOpen, handleClose } = useAnchor();

	const handleClick = (data) => {
		openForm();
		setFormValues(data);
		handleClose();
	};

	const click = add.type === 'select' ? handleOpen : openForm;

	if (isLoading) return <AppLoader/>;
	return (
		<>
			{CustomBaseToolbar && (<CustomBaseToolbar/>)}
			{add && can_add && (
				<>
					<Tooltip title={'Aggiungi'}>
						<IconButton onClick={click}>
							<AddIcon/>
						</IconButton>
					</Tooltip>
					{ add.type === 'select' && (
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={openEl}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							{ add.items?.map(item => (
								<MenuItem
									key={item.label}
									disabled={item.disabled}
									onClick={() => handleClick(item.options)}
								>
									{item.label}
								</MenuItem>
							))}
						</Menu>
					)}
					{ add.type === 'modal' && (
						<AppForm modal form={form}/>
					)}
				</>
			)}
		</>
	);
};

export default React.memo(TableBaseToolbar);

TableBaseToolbar.propTypes = {
	table: PropTypes.string,
	auth: PropTypes.bool,
	add: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	CustomBaseToolbar: PropTypes.func
};
