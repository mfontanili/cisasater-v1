import * as React from 'react';
import {merge} from 'lodash';
import PropTypes from 'prop-types';
import {AppLoader} from 'components';
import {useModule, useMount, useTables} from 'hooks';
import {baseOptions} from './baseOptions';
import {TableBaseToolbar} from './Toolbar/TableBaseToolbar';
import { DataGrid } from '@mui/x-data-grid';
import {Box} from '@mui/material';

export const AppTable = ({ table }) => {
	const { data, columns, isLoading, options } = useTables(table);
	const { resetSelectedData } = useModule();

	useMount(() => resetSelectedData());

	const {
		auth = true,
		CustomBaseToolbar = null,
		add = true,
		...tableProps
	} = options;

	const tableOptions = merge(
		{},
		baseOptions,
		tableProps
	);

	if (isLoading) return <AppLoader/>;
	return (
		<Box
			sx={{
				display: 'flex',
				height: '800px',
				width: 'auto',
			}}
		>
			<Box
				sx={{
					flexGrow: 1
				}}
			>
				<DataGrid
					rows={data}
					columns={columns.map(column => ({
						...column,
						flex: 1
					}))}
					sx={{
						border: 0,
					}}
					components={{
						Toolbar: TableBaseToolbar
					}}
					componentsProps={{
						toolbar: {
							table,
							add,
							auth,
							CustomBaseToolbar
						}
					}}

					{...tableOptions}
				/>
			</Box>
		</Box>
	);
};

AppTable.propTypes = {
	table: PropTypes.string
};
