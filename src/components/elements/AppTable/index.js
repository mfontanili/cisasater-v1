import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import PropTypes from 'prop-types';
import {AppForm, AppLoader} from 'components';
import {useModule, useTables} from 'hooks';
import {baseOptions} from './baseOptions';
import TableBaseToolbar from './Toolbar/TableBaseToolbar';
import TableSelectToolbar from './Toolbar/TableSelectToolbar';
import {Box} from "@mui/material";

export const AppTable = ({ table, modal, ...props }) => {
    const { data, columns, isLoading, options } = useTables(table);
    const { openForm, setSelectedRows, selectedRows, setSelectedData } = useModule(table);

    const {
        title = '',
        selectableRows = 'single',
        ...tableProps
    } = options;

    const tableOpts = {
        ...baseOptions,
        storageKey: table,
        rowsSelected: selectedRows,
        selectableRows,
        onRowSelectionChange: (a, b, c) => {
            setSelectedRows(c);
            const selected = selectableRows === 'multiple'
                ? data.filter((d, i) => c.includes(i))
                : data[c];
            setSelectedData(selected);
        },
        setRowProps: (row, dataIndex) => ({
            onDoubleClick: () => {
                setSelectedData(data[dataIndex]);
                openForm();
            },
        }),
        customToolbarSelect: () => (
            <TableSelectToolbar table={table}/>
        ),
        customToolbar: () => (
            <TableBaseToolbar table={table}/>
        ),
        ...tableProps
    }

    if (isLoading) return <AppLoader/>;
    return (
        <Box {...props}>
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={tableOpts}
            />
            {modal && <AppForm modal form={table}/>}
        </Box>
    );
};

AppTable.propTypes = {
    table: PropTypes.string,
    modal: PropTypes.bool
};