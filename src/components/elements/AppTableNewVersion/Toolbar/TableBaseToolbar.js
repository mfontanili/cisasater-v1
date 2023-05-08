import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import KeyIcon from '@mui/icons-material/Key';
import {IconButton, Menu, MenuItem, Tooltip} from '@mui/material';
import PropTypes from 'prop-types';
import {AppLoader} from 'components';
import {useAuthorization, useModule} from 'hooks';

export const TableBaseToolbar = ({ table, auth, add, CustomBaseToolbar }) => {
	const { openForm } = useModule(table);
	const { isLoading, can_add, set_auth } = useAuthorization();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = () => {
		openForm();
		handleClose();
	};

	const click = add.multi ? handleOpen : () => openForm();

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
					{ add.multi && (
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							{ add.items.map(item => (
								<MenuItem key={item.label} onClick={() => handleClick(item.options)}>{item.label}</MenuItem>
							))}
						</Menu>
					)}
				</>
			)}
			{auth && set_auth && (
				<Tooltip title={'Permessi'}>
					<IconButton onClick={() => openForm()}>
						<KeyIcon/>
					</IconButton>
				</Tooltip>
			)}

		</>
	);
};

TableBaseToolbar.propTypes = {
	table: PropTypes.string,
	auth: PropTypes.bool,
	add: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	CustomBaseToolbar: PropTypes.func
};
