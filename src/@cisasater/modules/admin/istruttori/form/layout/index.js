export const useLayout = () => {
    const layout = [
        {
            title: 'Info personali',
            type: 'fields',
            items: [
                { name: 'id' },
                { name: 'cognome', col: 4 },
                { name: 'nome', col: 4 },
                { name: 'codice_fiscale', col: 4 },
                { name: 'data_nascita', col: 2 },
                { name: 'email', col: 5 },
                { name: 'cellulare', col: 5 },
            ]
        },
        {
            title: 'Info istruttore CAI',
            type: 'fields',
            items: [
                { name: 'scuola', col: 3 },
                { name: 'altre_scuole', col: 3 },
                { name: 'titoli', col: 3 },
                { name: 'specialita', col: 3 },
                { name: 'sezione_cai', col: 4 },
                { name: 'bollino', col: 2 },
                { name: 'stato', col: 6 },
                { name: 'note', col: 12 },
            ]
        },
        {
            type: 'buttons',
            items: ['submit', 'back']
        }
    ];

    return {
        layout
    }
}