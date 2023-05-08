import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	IconButton,
	Tooltip,
} from '@mui/material';
import PropTypes from 'prop-types';
import {useAnchor, useAuthorization, useModule} from 'hooks';

export const TableSelectToolbar = ({ table, removeRow, CustomSelectToolbar }) => {
	const { openForm, selectedRows, selectedData } = useModule(table);
	const { can_edit, can_delete } = useAuthorization();
	const { openEl, handleOpen, handleClose, handleConfirm } = useAnchor();
	const confirm = () => handleConfirm(() => removeRow(selectedData));

	return (
		<Box sx={{ marginRight: 3 }}>
			{CustomSelectToolbar && (<CustomSelectToolbar/>)}
			{selectedRows.length === 1 && (
				<Tooltip title={can_edit ? 'Modifica' : 'Apri'}>
					<IconButton onClick={() => openForm()}>
						<EditIcon/>
					</IconButton>
				</Tooltip>
			)}
			{can_delete && (
				<>
					<Tooltip title={'Cancella'}>
						<IconButton onClick={handleOpen}>
							<DeleteIcon/>
						</IconButton>
					</Tooltip>
					<Dialog
						open={openEl}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
					>
						<DialogTitle id="alert-dialog-title">
                            Sei sicuro di voler cancellare il record?
						</DialogTitle>
						<DialogActions>
							<Button onClick={confirm} autoFocus>
                                OK
							</Button>
							<Button onClick={handleClose}>Annulla</Button>
						</DialogActions>
					</Dialog>
				</>
			)}
		</Box>
	);
};

TableSelectToolbar.propTypes = {
	table: PropTypes.string,
	removeRow: PropTypes.func,
	CustomSelectToolbar: PropTypes.func
};
