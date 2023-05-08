import {gql} from "@apollo/client";

export const queryScuole = gql`
    query queryScuole {
        queryGruppi(filter: {ambito: {eq: "sezionale"}, tipo: {eq: "scuola"}}, order: {asc: nome}) {
            id
            uuid
            nome
            sezioni
            ambito
            tipo
            ruoli(filter: {has: istruttore}) {
                id
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
                }
                gruppo {
                    id
                    nome
                    ambito
                    tipo
                }
                profilo
            }
            istruttori(order: {asc: cognome, then: {asc: nome}}) {
                id
                cognome
                nome
                email
                titoli
            }
        }
    }
`;

export const queryOrganiTecnici = gql`
    query queryOrganiTecnici {
        queryGruppi(filter: {not: {ambito: {eq: "sezionale"}}}, order: {asc: nome}) {
            id
            uuid
            ambito
            nome
            tipo
            ruoli(filter: {has: istruttore}) {
                id
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
                }
                gruppo {
                    id
                    nome
                    ambito
                    tipo
                }
                profilo
            }
            istruttori(order: {asc: cognome, then: {asc: nome}}) {
                id
                cognome
                nome
                email
                titoli
            }
        }
    }
`;

export const submitGruppi = gql`
    mutation submitGruppi($remove: [ID!] = "", $input: [AddGruppiInput!]!) {
        deleteRuoli(filter: {id: $remove}) {
            numUids
        }
        addGruppi(input: $input, upsert: true) {
            numUids
        }
    }
`;

export const deleteGruppi = gql`
    mutation deleteGruppi($id: [ID!] = "") {
        deleteGruppi(filter: {id: $id}) {
            numUids
        }
    }
`;

export const getGruppiIstruttori = gql`
    query getGruppiIstruttori($id: ID = "") {
        getGruppi(id: $id) {
            istruttori(order: {asc: cognome, then: {asc: nome, then: {asc: codice_fiscale}}}) {
                id
                cognome
                nome
                codice_fiscale
                email
                titoli
                specialita
                scuola(filter: {ambito: {eq: "sezionale"}}) {
                    nome
                }
            }
        }
    }
`;

export const queryGruppi = gql`
    query queryGruppi {
        queryGruppi {
            id
            nome
            tipo
            ambito
            istruttori(order: {asc: cognome, then: {asc: nome}}) {
                id
                cognome
                nome
            }
            ruoli(filter: {has: istruttore}) {
                istruttore {
                    id
                    cognome
                    nome
                }
            }
        }
    }
`;

export const queryScuoleSezionaliSin = gql`
    query queryScuole {
        queryGruppi(filter: {ambito: {eq: "sezionale"}, tipo: {eq: "scuola"}}, order: {asc: nome}) {
            id
            nome
        }
    }
`;

export const queryScuoleRegionaliSin = gql`
    query queryOrganiTecnici {
        queryGruppi(filter: {not: {ambito: {eq: "sezionale"}}, tipo: {eq: "scuola"}}, order: {asc: nome}) {
            id
            nome
        }
    }
`;

export const queryGruppiSin = gql`
    query queryGruppi {
        queryGruppi {
            id
            nome
            tipo
            ambito
        }
    }
`;