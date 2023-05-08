export const useLayout = () => {
    const layout = [
        {
            label: 'Istruttore',
            name: 'istruttore',
            options: {
                customBodyRender: value => value && value.cognome + ' ' + value.nome,
            },
        },
        {
            label: 'Titolo',
            name: 'istruttore.titoli',
            options: {
                customBodyRender: value => value && value.join(', ')
            }
        },
        {
            label: 'Scuola',
            name: 'istruttore.scuola',
            options: {
                customBodyRender: value => value && value.at(0).nome
            }
        }
    ];

    const options = {
        title: 'Responsabili evento',
        download: false,
        tableBodyHeight: 'auto',
        search: false,
        filter: false,
        rowsPerPage: 10,
        rowsPerPageOptions: [10],
        sortOrder: {
            name: 'responsabili',
            direction: 'asc'
        }
    };

    return {
        layout,
        options
    }
}