export const useLayout = () => {
    const layout = [
        {
            title: 'Seleziona un istruttore',
            type: 'fields',
            items: [
                { name: 'responsabile'}
            ]
        },
        {
            type: 'buttons',
            items: ['submit','back']
        }
    ];

    return {
        layout
    }
}