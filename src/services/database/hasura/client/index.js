import {ApolloClient, InMemoryCache} from '@apollo/client';

export const graphqlClient = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
	cache: new InMemoryCache({
		addTypename: false
	}),
/*	headers: {
		'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET
	}*/
});