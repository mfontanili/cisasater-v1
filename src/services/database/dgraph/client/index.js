import {ApolloClient, InMemoryCache} from '@apollo/client';

export const graphqlClient = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_DGRAPH_ENDPOINT,
	cache: new InMemoryCache({
		addTypename: false
	}),
	headers: {
		'Dg-Auth': process.env.NEXT_PUBLIC_DGRAPH_API_KEY
	}
});