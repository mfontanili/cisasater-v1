import {gql} from '@apollo/client';

export const queryAttivita = gql`
    query queryAttivita {
        queryAttivita(filter: {not: {has: corso}}) {
            id
            uuid
            luogo
            descrizione
            data_inizio
            data_fine
            gruppo {
                id
                nome
            }
            ruoli(filter: {has: istruttore}) {
                id
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
                    scuola(filter: {ambito: {eq: "sezionale"}}) {
                        nome
                    }
                }
                gruppo {
                    id
                    nome
                    ambito
                    tipo
                }
                profilo
            }
            corso {
                id
            }
        }
    }
`;

export const submitAttivita = gql`
    mutation submitAttivita($remove: [ID!] = "", $input: [AddAttivitaInput!]!) {
        deleteRuoli(filter: {id: $remove}) {
            numUids
        }
        addAttivita(input: $input, upsert: true) {
            numUids
        }
    }
`;

export const deleteAttivita = gql`
    mutation deleteAttivita($id: [ID!] = "") {
        deleteAttivita(filter: {id: $id}) {
            numUids
        }
    }
`;