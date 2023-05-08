import {gql} from "@apollo/client";
import {TITOLIALL} from "@cisasater/data";

export const queryIstruttori = gql`
    query queryIstruttori {
        istruttori(order_by: [{cognome: asc}, {nome: asc}, {codice_fiscale: asc}]) {
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
            scuola: ruoli(where: {_and: [{ruolo: { profilo: {_eq: "istruttore"}}}, {gruppo: {ambito: {_eq: "sezionale"}}}, {gruppo: {tipo: {_eq: "scuola"}}}]}) {
                gruppo {
                    id
                    nome
					tipo
                    ambito
                }
            }
			altre_scuole: ruoli(where: {_and: [{ruolo: { profilo: {_eq: "istruttore"}}}, {gruppo: {ambito: {_neq: "sezionale"}}}, {gruppo: {tipo: {_eq: "scuola"}}}]}) {
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

export const submitIstruttori = gql`
    mutation submitIstruttori($objects: [istruttori_insert_input!] = {}, $istruttore_id: uuid = "", $scuole_id: [uuid!] = "") {
        delete_ruoli_gruppi(where: {_and: [{istruttore_id: {_eq: $istruttore_id}}, {gruppo_id: {_in: $scuole_id}}]}) {
            affected_rows
        }
        insert_istruttori(objects: $objects, on_conflict: {constraint: istruttori_pkey, update_columns: [bollino, cellulare, codice_fiscale, cognome, data_nascita, email, iban, nome, sezione_cai, specialita, stato, titoli, note]}) {
            affected_rows
        }
    }
`;

export const deleteIstruttori = gql`
    mutation deleteIstruttori($id: uuid = "") {
        delete_istruttori_by_pk(id: $id) {
            id
        }
    }
`;

export const queryIstruttoriTitolati = gql`
    query queryIstruttoriTitolati {
        istruttori(where: {titoli: {_has_keys_any: ${JSON.stringify(TITOLIALL)}}}, order_by: [{cognome: asc}, {nome: asc}, {codice_fiscale: asc}]) {
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
    query queryIstruttoriByCodiceFiscale ($codice_fiscale: String = "") {
        istruttori(where: {codice_fiscale: { _eq: $codice_fiscale}, stato: {_eq: "Attivo"}}) {
            id
            email
        }
    }
`;

export const getIstruttori = gql`
    query getIstruttori ($id: uuid = "") {
        istruttori_by_pk(id: $id) {
            bollino
            cellulare
            codice_fiscale
            cognome
            data_nascita
            email
            id
            nome
            scuole {
                scuola {
                    id
                    nome
                    ambito
                }
            }
            ruoli {
                gruppo {
                    nome
                }
                ruolo {
                    nome
                    admin_layout
                }
            }
            sezione_cai
            specialita
            stato
            titoli
            iban
        }
    }
`;