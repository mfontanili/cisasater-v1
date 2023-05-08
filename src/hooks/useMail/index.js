import {appConfig} from '@cisasater/config';
import DOMPurify from 'dompurify';

export const useMail = () => {
	const { to, from } = appConfig.email;
	return {
		sendMail: (values) =>
			fetch('/api/mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...values,
					from,
					to,
					message: DOMPurify.sanitize(values.message),
				}),
			}),
	};
};
