import {gql} from '@apollo/client';

export const queryUsers = gql`
    query queryUsers {
        users(order_by: {username: asc}) {
            id
            nome
            password
            username
            email
            ruoli {
				id
                gruppo {
                    id
                    nome
                    ambito
                    tipo
                }
                ruolo {
                    nome
                }
            }
            istruttore {
                cognome
                nome
                email
                scuola: ruoli(where: {_and: [{gruppo: {ambito: {_eq: "sezionale"}}}, {gruppo: {tipo: {_eq: "scuola"}}}]}) {
                    gruppo {
                        nome
                    }
                }
                ruoli {
                    ruolo {
                        nome
                    }
                }
            }
        }
    }
`;

export const submitUsers = gql`
    mutation submitUsers($id: uuid = "", $email: String = "", $nome: String = "", $password: String = "", $username: String = "", $ruoli: [ruoli_users_insert_input!] = {}) {
        delete_ruoli_users(where: {user_id: {_eq: $id}}) {
            affected_rows
        }
        insert_users(objects: {email: $email, id: $id, nome: $nome, password: $password, username: $username, ruoli: {data: $ruoli}}, on_conflict: {constraint: users_pkey, update_columns: [username, password, nome, email]}) {
            affected_rows
        }
    }

`;

export const deleteUsers = gql`
    mutation deleteUsers($id: uuid = "") {
        delete_users_by_pk(id: $id) {
            id
        }
    }
`;

export const getUserRoles = gql`
    query getUserRoles($id: uuid = "") {
        users_by_pk(id: $id) {
            ruoli {
                gruppo {
                    id
                    nome
                    tipo
                    ambito
                }
                ruolo {
                    id
                    nome
                    admin_layout
                }
            }
        }
        istruttori_by_pk(id: $id) {
            ruoli {
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

export const queryUsersByUsername = gql`
    query userByUsername ($username: String = "") {
        users(where: {username: { _eq: $username}}) {
            email
            id
            istruttore {
                bollino
                cellulare
                codice_fiscale
                cognome
                data_nascita
                email
                id
                nome
                sezione_cai
                specialita
                stato
                titoli
                iban
                ruoli {
                    gruppo {
                        id
                        nome
                        tipo
                        ambito
                    }
                    ruolo {
                        id
                        nome
                        admin_layout
                    }
                }
            }
            nome
            password
            username
            ruoli {
                gruppo {
                    id
                    nome
                    tipo
                    ambito
                }
                ruolo {
                    nome
                    admin_layout
                }
            }
        }
    }
`;