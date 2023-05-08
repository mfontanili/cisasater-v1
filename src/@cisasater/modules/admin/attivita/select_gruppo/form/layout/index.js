export const useLayout = () => {
    const layout = [
        {
            title: 'Chi organizza questa attività?',
            type: 'fields',
            items: [
                { name: 'gruppo'}
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