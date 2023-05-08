import {gql} from "@apollo/client";
import {TITOLIALL} from "@cisasater/data";

export const queryIstruttori = gql`
    query queryIstruttori ($filter: IstruttoriFilter = {}) {
        queryIstruttori(order: {asc: cognome, then: {asc: nome, then: {asc: codice_fiscale}}}, filter: $filter) {
            bollino
            cellulare
            codice_fiscale
            cognome
            data_nascita
            email
            id
            nome
            note
            ruoli {
                id
            }
            scuola {
                nome
                id
                tipo
                ambito
            }
            sezione
            specialita
            stato
            titoli
            iban
        }
    }
`;

export const submitIstruttori = gql`
    mutation submitIstruttori($input: [AddIstruttoriInput!]!) {
        addIstruttori(input: $input) {
            numUids
        }
    }
`;

export const deleteIstruttori = gql`
    mutation deleteIstruttori($id: [ID!] = "") {
        deleteIstruttori(filter: {id: $id}) {
            numUids
        }
    }
`;

export const queryIstruttoriTitolati = gql`
    query queryIstruttoriTitolati {
        queryIstruttori(filter: {titoli: {in: ${JSON.stringify(TITOLIALL)}}}, order: {asc: cognome, then: {asc: nome, then: {asc: codice_fiscale}}}) {
            codice_fiscale
            cognome
            email
            nome
            id
            titoli
            specialita
        }
    }
`;

export const queryIstruttoriByCodiceFiscale = gql`
    query queryIstruttoriByCodiceFiscale ($codice_fiscale: StringExactFilter = {}) {
        queryIstruttori(filter: {codice_fiscale: $codice_fiscale, stato: {eq: "Attivo"}}) {
            id
            email
        }
    }
`;

export const getIstruttori = gql`
    query getIstruttori ($id: ID = "") {
        getIstruttori(id: $id) {
            bollino
            cellulare
            codice_fiscale
            cognome
            data_nascita
            email
            id
            nome
            note
            scuola {
                nome
                id
                tipo
                ambito
            }
            sezione
            specialita
            stato
            titoli
            iban
        }
    }
`;