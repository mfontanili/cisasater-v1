import {useModule} from 'hooks';
import {findItem} from "helpers";
import {PROFILI} from "@cisasater/data";

export const useActions = () => {
	const { formValues, submitValues } = useModule();

	const submit = async (values) => {
		const profilo = findItem(PROFILI, 'id', values.profilo);
		await submitValues({
			ruoli: [
				...formValues.ruoli,
				{
					profilo,
					istruttore: JSON.parse(values.istruttore),
					gruppo: {
						id: formValues.id,
						nome: formValues.nome,
						ambito: formValues.ambito,
						tipo: formValues.tipo
					}
				}
			]
		});
	};

	return {
		submit
	};
};