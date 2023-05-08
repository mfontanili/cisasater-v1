export const baseOptions = {
	print: false,
	elevation: 0,
	viewColumns: false,
	fixedHeader: true,
	tableBodyHeight: '73vh',
	enableNestedDataAccess: '.',
	selectableRowsHideCheckboxes: true,
	selectableRowsOnClick: true,
	rowsPerPage: 25,
	rowsPerPageOptions: [25, 50, 100],
	setTableProps: () => {
		return {
			size: 'small',
		};
	},
	textLabels: {
		body: {
			noMatch: 'Nessun record trovato',
			toolTip: 'Ordina',
			columnHeaderTooltip: (column) => `Ordina per ${column.label}`,
		},
		pagination: {
			next: 'Successivo',
			previous: 'Precedente',
			rowsPerPage: 'Righe per pagina:',
			displayRows: 'di',
		},
		toolbar: {
			search: 'Cerca',
			downloadCsv: 'Download CSV',
			print: 'Stampa',
			viewColumns: 'Visualizza colonne',
			filterTable: 'Filtra dati',
		},
		filter: {
			all: 'Tutto',
			title: 'FILTRI',
			reset: 'CANCELLA',
		},
		viewColumns: {
			title: 'Visualizza colonne',
			titleAria: 'Visualizza/Nascondi colonne',
		},
		selectedRows: {
			text: 'record selezionato',
			delete: 'Cancella',
			deleteAria: 'Cancella record selezionato',
		},
	},
};
