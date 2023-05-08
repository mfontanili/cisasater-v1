import moment from 'moment';
import {useModule, useMutation} from 'hooks';
import {PROFILI_DEF, TIPI_GRUPPO_DEF, AMBITO_GRUPPO_DEF} from "@cisasater/data";

export const useActions = () => {
	const mutate = useMutation('submitIstruttori', ['queryIstruttori']);
	const {formValues} = useModule();
	const {istruttore} = PROFILI_DEF;

	const submit = async (values) => {
		const {scuola, altre_scuole, data_nascita, ...rest} = values;
		const scuole = [JSON.parse(scuola), ...altre_scuole.map(s => JSON.parse(s))];
		const remove_id = [...formValues.scuola, ...formValues.altre_scuole].map(s => s.gruppo.id)

		await mutate({
			istruttore_id: formValues.id,
			scuole_id: remove_id,
			objects: [{
				...rest,
				data_nascita: moment(data_nascita).add(1, 'day').format('DD/MM/YYYY'),
				ruoli: {
					data: scuole.map(scuola => ({
						gruppo_id: scuola.id,
						ruolo: {
							data: {
								profilo: istruttore.id,
								admin_layout: AMBITO_GRUPPO_DEF[scuola.ambito].admin_layout,
								nome: istruttore.nome + ' Scuola ' + scuola.nome,
								priority: istruttore.priority + TIPI_GRUPPO_DEF[scuola.tipo].priority + AMBITO_GRUPPO_DEF[scuola.ambito].priority,
							},
							on_conflict: {
								constraint: 'ruoli_nome_key',
								update_columns: ['admin_layout','profilo','nome','priority']
							}
						}
					}))
				}
			}]
		});
	};

	return {
		submit
	};
};