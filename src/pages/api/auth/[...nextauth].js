import bcrypt from 'bcryptjs';
import {
	AUTH_EMAIL_BODY,
	AUTH_EMAIL_BUTTON_LABEL,
	AUTH_EMAIL_SUBJECT,
	AUTH_ERROR_USER_NOT_FOUND,
	AUTH_ERROR_WRONG_PASSWORD,
	AUTH_PASSWORD_LABEL,
	AUTH_USERNAME_LABEL
} from '@cisasater/data';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import {request} from 'services';
import sendMail from '../mail';
import EmailDbAdapter from './EmailDbAdapter';

export default (req, res) => NextAuth(req, res, {
	site: process.env.NEXTAUTH_URL,
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: AUTH_USERNAME_LABEL,
					type: 'text',
					placeholder: AUTH_USERNAME_LABEL,
				},
				password: {
					label: AUTH_PASSWORD_LABEL,
					type: 'password',
					placeholder: AUTH_PASSWORD_LABEL,
				}
			},
			async authorize({username, password}) {
				const {nextAuthCredentialsProvider} = request;
				const user = await nextAuthCredentialsProvider(username);

				if (!user) {
					throw new Error(AUTH_ERROR_USER_NOT_FOUND);
				}

				const checkPassword = await bcrypt.compare(
					password,
					user.password,
				);

				if (!checkPassword) {
					throw new Error(AUTH_ERROR_WRONG_PASSWORD);
				}

				return user;
			},
		}),
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER,
				port: process.env.EMAIL_PORT,
				auth: {
					user: process.env.EMAIL_AUTH,
					pass: process.env.EMAIL_PASS,
				},
				secure: process.env.EMAIL_SECURE,
			},
			from: process.env.EMAIL_FROM,
			async sendVerificationRequest({ identifier: email, url, provider: { from } }) {
				let tempUrl = new URL(url);
				let search_params = tempUrl.searchParams;
				search_params.set('email', req.query.userId);
				tempUrl.search = search_params.toString();
				url = tempUrl.toString();
				await sendMail({
					body: {
						to: email,
						from,
						subject: AUTH_EMAIL_SUBJECT,
						message: AUTH_EMAIL_BODY,
						button: {
							path: url,
							label: AUTH_EMAIL_BUTTON_LABEL,
						},
					},
				});
			},
		}),
	],
	adapter: EmailDbAdapter({ userId: req.query.userId }),
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60,
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
		maxAge: 60 * 60 * 24 * 30,
	},
	pages: {
		signIn: '/app/profilo',
		error: '/errore',
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				token.user = user;
			}
			if (account) {
				token.accessToken = account.access_token;
				token.accessType = account.type;
			}

			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.accessType = token.accessType;
				session.accessToken = token.accessToken;

				if (token.accessType === 'email' || token.user.istruttore) {
					session.userType = 'istruttore';
					session.user = token.user.istruttore;
					session.user.fullName = token.user.istruttore.nome + ' ' + token.user.istruttore.cognome;
				} else {
					session.userType = 'user';
					session.user = token.user;
					session.user.fullName = token.user.nome;
				}
			}

			return session;
		}
	},
});
