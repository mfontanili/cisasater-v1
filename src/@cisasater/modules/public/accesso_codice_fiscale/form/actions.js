import {signIn} from 'next-auth/react';
import swal from 'sweetalert';
import {request} from 'services';

export const useActions = () => {
	const submit = async (values, setError) => {
		const {nextAuthQueryByCodiceFiscale} = request;
		await nextAuthQueryByCodiceFiscale(values.codice_fiscale).then(istruttore => {
			if (istruttore) {
				signIn(
					'email',
					{
						email: istruttore.email,
						redirect: false,
					},
					{ userId: istruttore.id },
				).then(
					swal({
						title: 'Controlla la posta!',
						text: 'Ti abbiamo mandato il link per accedere al portale; controlla la tua posta elettronica.',
						icon: 'success',
						button: 'Torna alla Home',
					}),
				);
			} else {
				setError('accesso_codice_fiscale.codice_fiscale', {
					type: 'focus',
					message: 'Codice fiscale non riconosciuto'
				}, { shouldFocus: true });
			}
		});
	};

	return {
		submit
	};
};