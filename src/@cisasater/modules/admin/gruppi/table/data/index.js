import {useQuery, useRoute} from 'hooks';

export const useData = () => {
    const { data: [scuole], isLoading: l1 } = useQuery('queryScuole');
    const { data: [organiTecnici], isLoading: l2 } = useQuery('queryOrganiTecnici');
    const { name } = useRoute();

    const gruppi = name === 'scuole' ? scuole.map(scuola => {
        const direttore = scuola.ruoli.find(r => r.ruolo.profilo === 'direttore');
        const vicedirettore = scuola.ruoli.filter(r => r.ruolo.profilo === 'vicedirettore');
        const segretario = scuola.ruoli.filter(r => r.ruolo.profilo === 'segretario');

        return {
            ...scuola,
            organico: scuola.organico.map(v => v.istruttore),
            direttore: direttore?.istruttore,
            vicedirettore: vicedirettore.map(v => v.istruttore),
            segretario: segretario.map(v => v.istruttore)
        };
    }) : organiTecnici.map(gruppo => ({
        ...gruppo,
        organico: gruppo.organico.map(v => v.istruttore)
    }));

    return  {
        data: gruppi,
        isLoading: l1 || l2
    };
};