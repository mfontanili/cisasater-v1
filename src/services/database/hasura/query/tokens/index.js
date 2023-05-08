import {gql} from "@apollo/client";

export const getToken = gql`
    query getTokens($identifier: String = "", $token: String = "") {
        tokens_by_pk(identifier: $identifier, token: $token) {
            expires
            identifier
            token
        }
    }
`;

export const addToken = gql`
    mutation addTokens($identifier: String = "", $token: String = "") {
        insert_tokens(objects: {identifier: $identifier, token: $token}) {
            affected_rows
        }
    }
`;

export const deleteTokenById = gql`
    mutation deleteTokens($identifier: String_comparison_exp = {}) {
        delete_tokens(where: {identifier: $identifier}) {
            affected_rows
        }
    }
`;