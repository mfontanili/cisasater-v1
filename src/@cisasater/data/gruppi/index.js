export const PROFILI = [
    {
        id: 'admin',
        nome: 'Amministratore globale',
        priority: 9
    },
    {
        id: 'tesoreria',
        nome: 'Tesoriere GR',
        priority: 8
    },
    {
        id: 'presidente',
        nome: 'Presidente',
        priority: 7
    },
    {
        id: 'direttore',
        nome: 'Direttore',
        priority: 6
    },
    {
        id: 'vicepresidente',
        nome: 'Vicepresidente',
        priority: 5
    },
    {
        id: 'vicedirettore',
        nome: 'Vicedirettore',
        priority: 4
    },
    {
        id: 'segretario',
        nome: 'Segretario',
        priority: 3
    },
    {
        id: 'responsabile',
        nome: 'Responsabile',
        priority: 2
    },
    {
        id: 'istruttore',
        nome: 'Istruttore',
        priority: 1
    }
];

export const TIPI_GRUPPO = [
    {
        id: 'commissione',
        nome: 'Commissione',
        profili: ['presidente', 'vicepresidente', 'segretario', 'responsabile'],
        responsabile: 'presidente',
        priority: 40
    },
    {
        id: 'scuola',
        nome: 'Scuola',
        profili: ['direttore', 'vicedirettore', 'segretario', 'responsabile', 'istruttore'],
        responsabile: 'direttore',
        priority: 20
    },
    {
        id: 'locale',
        nome: 'Locale',
        profili: ['admin','tesoreria'],
        priority: 0
    }
];

export const AMBITO_GRUPPO = [
    {
        id: 'nazionale',
        nome: 'Nazionale',
        admin_layout: true,
        priority: 300
    },
    {
        id: 'regionale',
        nome: 'Regionale',
        admin_layout: true,
        priority: 200
    },
    {
        id: 'sezionale',
        nome: 'Sezionale',
        admin_layout: false,
        priority: 100
    },
    {
        id: 'locale',
        nome: 'Locale',
        admin_layout: true,
        priority: 400
    }
];

export const PROFILI_DEF = PROFILI.reduce((obj, item) => (obj[item.id] = item, obj), {});
export const TIPI_GRUPPO_DEF = TIPI_GRUPPO.reduce((obj, item) => (obj[item.id] = item, obj), {});
export const AMBITO_GRUPPO_DEF = AMBITO_GRUPPO.reduce((obj, item) => (obj[item.id] = item, obj), {});