import {gql} from '@apollo/client';

export const queryUsers = gql`
    query queryUsers {
        queryUsers(order: {asc: username}) {
            id
            uuid
            nome
            password
            username
            email
            ruoli {
                id
                profilo
                gruppo {
                    id
                    nome
                    ambito
                    tipo
                }
            }
        }
    }
`;

export const submitUsers = gql`
    mutation submitUsers($remove: [ID!] = "", $input: [AddUsersInput!]!) {
        deleteRuoli(filter: {id: $remove}) {
            numUids
        }
        addUsers(input: $input, upsert: true) {
            numUids
        }
    }
`;

export const deleteUsers = gql`
    mutation deleteUsers($id: [ID!] = "") {
        deleteUsers(filter: {id: $id}) {
            numUids
        }
    }
`;

export const queryUsersByUsername = gql`
    query userByUsername ($username: StringExactFilter = {}) {
        queryUsers(filter: {username: $username}) {
            email
            id
            istruttore {
                id
            }
            nome
            password
            username
            ruoli {
                id
                profilo
                gruppo {
                    id
                    nome
                    tipo
                    ambito
                }
            }
        }
    }
`;

export const getUserRoles = gql`
    query getUserRoles($id: ID = "") {
        getUsers(id: $id) {
            ruoli {
                id
                profilo
                gruppo {
                    id
                    nome
                    tipo
                    ambito
                }
            }
        }
        getIstruttori(id: $id) {
            ruoli {
                id
                profilo
                gruppo {
                    id
                    nome
                    tipo
                    ambito
                }
            }
            scuola {
                nome
                id
                tipo
                ambito
            }
        }
    }
`;