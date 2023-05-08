import * as React from 'react';
import {AppTable} from 'components';
import {useActions} from './actions';
import {useData} from './data';
import {useLayout} from './layout';

const TableAttivita = () => {
    const actions = useActions();
    const data = useData();
    const layout = useLayout();

    return <AppTable
        name='attivita'
        actions={actions}
        data={data}
        layout={layout}
    />
}

export default TableAttivita

export * from './actions';
export * from './data';
export * from './layout';