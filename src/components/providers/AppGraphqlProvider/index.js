import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import PropTypes from 'prop-types';
import {graphqlClient} from 'services';

const AppGraphqlProvider = ({ children }) => {
	return (
		<ApolloProvider client={graphqlClient}>
			{children}
		</ApolloProvider>
	);
};

export default AppGraphqlProvider;

AppGraphqlProvider.propTypes = {
	children: PropTypes.node,
};