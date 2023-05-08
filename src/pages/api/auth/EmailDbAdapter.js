import {request} from 'services';

export default function EmailDbAdapter(options = {}) {
	const {
		nextAuthCreateUser,
		nextAuthCreateVerificationToken,
		nextAuthUseVerificationToken,
	} = request;

	return {
		async createUser({ email }) {
			return await nextAuthCreateUser(email);
		},
		async getUser() {
		},
		async getUserByEmail() {
			return null;
		},
		async getUserByAccount() {
		},
		async updateUser() {
		},
		async deleteUser() {
		},
		async linkAccount() {
		},
		async unlinkAccount() {
		},
		async getSessionAndUser() {
		},
		async createSession() {
		},
		async updateSession() {
		},
		async deleteSession() {
		},
		async createVerificationToken(data) {
			data = {
				...data,
				identifier: options.userId,
			};

			return await nextAuthCreateVerificationToken(options.userId, data);
		},
		async useVerificationToken(data) {
			return await nextAuthUseVerificationToken(data);
		},
	};
}
