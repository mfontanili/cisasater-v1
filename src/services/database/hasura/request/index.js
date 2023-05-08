import {graphqlClient} from '../client';
import {
	addToken,
	deleteTokenById,
	getIstruttori,
	getToken,
	queryIstruttoriByCodiceFiscale,
	queryUsersByUsername
} from "../query";

export const nextAuthCreateUser = async (id) => {
	return await graphqlClient.query({
		query: getIstruttori,
		variables: { id }
	}).then(res => res.data.istruttori);
};

export const nextAuthCreateVerificationToken = async (id, data) => {
	await graphqlClient.query({
		query: deleteTokenById,
		variables: {
			identifier: { eq: id }
		}
	});

	return await graphqlClient.query({
		query: addToken,
		variables: {
			input: data
		}
	});
};

export const nextAuthUseVerificationToken = async ({ identifier, token }) => {
	return await graphqlClient.query({
		query: getToken,
		variables: {
			identifier: identifier,
			token: token
		}
	}).then(
		res => {
			if (res.data.tokens) {
				graphqlClient.query({
					query: deleteTokenById,
					variables: {
						identifier: { eq: identifier }
					}
				});
			}

			return res.data.getTokens;
		}
	);
};

export const nextAuthCredentialsProvider = async (username) => {
	return await graphqlClient.query({
		query: queryUsersByUsername,
		variables: {
			username
		}
	}).then(
		res => res.data.users.at(0)
	);
};

export const nextAuthQueryByCodiceFiscale = async (codice_fiscale) => {
	return await graphqlClient.query({
		query: queryIstruttoriByCodiceFiscale,
		variables: {
			codice_fiscale
		}
	}).then(
		res => res.data.istruttori.at(0)
	);
};