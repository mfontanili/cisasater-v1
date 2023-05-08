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
import {useAnchor, useAuthorization, useModule, useTables} from 'hooks';

export const TableSelectToolbar = ({ table }) => {
	const { actions: { remove, edit }, options: {CustomSelectToolbar = null} } = useTables(table);
	const { openForm, selectedRows, selectedData } = useModule(table);
	const { can_edit, can_delete } = useAuthorization();
	const { openEl, handleOpen, handleClose, handleConfirm } = useAnchor();
	const confirm = () => handleConfirm(() => remove(selectedData));

	return (
		<Box sx={{ marginRight: 3 }}>
			{CustomSelectToolbar && (<CustomSelectToolbar/>)}
			{edit && selectedRows.length === 1 && (
				<Tooltip title={can_edit ? 'Modifica' : 'Apri'}>
					<IconButton onClick={openForm}>
						<EditIcon/>
					</IconButton>
				</Tooltip>
			)}
			{remove && can_delete && (
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

export default React.memo(TableSelectToolbar);

TableSelectToolbar.propTypes = {
	table: PropTypes.string,
	removeRow: PropTypes.func,
	CustomSelectToolbar: PropTypes.func
};
