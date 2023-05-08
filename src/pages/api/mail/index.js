// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {AUTH_EMAIL_BUTTON_LABEL} from '@cisasater/data';
import ButtonTemplate from './template/button.html';
import EmailTemplate from './template/email.html';

export default function handler(req, res) {
	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_SERVER,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_AUTH,
			pass: process.env.EMAIL_PASS,
		},
		secure: process.env.EMAIL_SECURE,
	});

	const buttonLabel = req.body.button?.label || AUTH_EMAIL_BUTTON_LABEL;
	const buttonPath = req.body.button?.path || process.env.NEXT_PUBLIC_SITE_URL;

	const Button = ButtonTemplate
		.replace('%PATH%', buttonPath)
		.replace('%LABEL%', buttonLabel);

	const Template = EmailTemplate
		.replace('%CONTENT%', req.body.message)
		.replace('%BUTTON%', Button);

	const mailData = {
		from: process.env.EMAIL_FROM,
		to: req.body.to,
		subject: req.body.subject,
		html: Template,
	};

	transporter.sendMail(mailData, (err) => {
		if (err) {
			res.send('error' + JSON.stringify(err));
		} else {
			res.send('success');
		}
	});
}
