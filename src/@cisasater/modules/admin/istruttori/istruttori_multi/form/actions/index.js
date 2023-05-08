import {useModule, useMutation} from "hooks";
import {isEmpty} from "lodash";

export const useActions = () => {
	const mutate = useMutation('submitIstruttori', ['queryIstruttori']);
	const { selectedData } = useModule();

	const submit = async (values) => {
		await mutate({
			id: selectedData.map(item => item.id),
			objects: selectedData.map(item => {
				const scuola = values.scuola || item.gruppi.find(gruppo => gruppo.scuola.ambito === 'sezionale').scuola.id;
				const altre_scuole = values.altre_scuole || item.gruppi.filter(gruppo => gruppo.scuola.ambito !== 'sezionale')

				return {
					...item,
					titoli: isEmpty(values.titoli) ? item.titoli : values.titoli,
					specialita: isEmpty(values.specialita) ? item.specialita : values.specialita,
					sezione: values.sezione || item.sezione,
					bollino: values.bollino || item.bollino,
					stato: values.stato || item.stato,
					note: values.note || item.note,
					gruppi: {
						data: [scuola, ...altre_scuole].map(item => ({gruppo_id: item}))
					}
				}
			})
		});
	};

	return {
		submit
	};
};