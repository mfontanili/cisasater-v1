export const useLayout = () => {
    const layout = [
        {
            type: 'fields',
            items: [
                { name: 'profilo' },
                { name: 'gruppo' },
            ],
        },
        {
            type: 'buttons',
            items: [ 'submit', 'back' ],
        }
    ];

    return {
        layout,
    };
};