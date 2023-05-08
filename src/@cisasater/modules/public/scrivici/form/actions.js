import swal from 'sweetalert';
import {useMail, useRoute} from 'hooks';

export const useActions = () => {
	const { sendMail } = useMail();
	const router = useRoute();

	const submit = async (values) => {
		await sendMail({
			from: values.email,
			subject: `CISASATER - Messaggio da ${values.name}`,
			message: values.message,
			template: false,
		})
		await swal({
			title: 'Grazie!',
			text: 'Grazie per averci scritto, ti risponderemo il prima possibile',
			icon: 'success',
			button: 'Torna alla Home',
		});
		router.push('/')
	};

	return {
		submit
	};
};