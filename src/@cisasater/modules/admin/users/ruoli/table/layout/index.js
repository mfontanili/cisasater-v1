export const useLayout = () => {
    const layout = [
        {
            name: 'ruolo.nome',
            options: {
                customHeadRender: () => null
            }
        }
    ];

    const options = {
        title: 'Ruoli utente',
        download: false,
        tableBodyHeight: 'auto',
        pagination: false,
        search: false,
        filter: false,
    };

    return {
        layout,
        options
    };
};