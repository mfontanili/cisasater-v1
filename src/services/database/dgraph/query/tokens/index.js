import {gql} from "@apollo/client";

export const getToken = gql`
    query getTokens($identifier: String = "", $token: String = "") {
        getTokens(identifier: $identifier, token: $token) {
            expires
            identifier
            token
        }
    }
`;

export const addToken = gql`
    mutation addTokens($identifier: String = "", $token: String = "") {
        addTokens(input: {identifier: $identifier, token: $token}) {
            numUids
        }
    }
`;

export const deleteTokenById = gql`
    mutation deleteTokens($identifier: StringHashFilter = {}) {
        deleteTokens(filter: {identifier: $identifier}) {
            numUids
        }
    }
`;