import {isEmpty} from "lodash";

export const useLayout = () => {
	const layout = [
		{
			label: 'User',
			name: 'username',
		},
		{
			name: 'nome',
			options: {
				display: false
			}
		},
		{
			name: 'istruttore',
			options: {
				display: false
			}
		},
		{
			label: 'Tipo',
			name: 'tipo',
			options: {
				customBodyRender: (value, table) => {
					const istruttore = table.rowData[2];
					if (istruttore) {
						return 'Istruttore'
					} else {
						return 'Locale'
					}
				}
			}
		},
		{
			label: 'Nome',
			name: 'displayName',
			options: {
				customBodyRender: (value, table) => {
					const istruttore = table.rowData[2];
					const user = table.rowData[1];

					if (istruttore) {
						return `${istruttore.cognome} ${istruttore.nome} (Scuola ${istruttore.scuola.at(0).gruppo.nome})`
					} else {
						return user
					}
				}
			},
		},
		{
			label: 'Email',
			name: 'email',
			options: {
				customBodyRender: (value, table) => {
					const istruttore = table.rowData[2];
					return istruttore?.email || value
				}
			}
		},
		{
			label: 'Profilo',
			name: 'ruoli',
			options: {
				customBodyRender: (value, table) => {
					const istruttore = table.rowData[2];
					const ruoli = isEmpty(istruttore?.ruoli) ? value : istruttore.ruoli;
					return ruoli.map(v => v.ruolo.nome).join("\r\n")
				}
			},
		}
	];

	return {
		layout
	};
};