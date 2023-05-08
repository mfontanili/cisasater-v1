import {gql} from '@apollo/client';

export const queryAttivita = gql`
    query queryAttivita {
        attivita(where: {corso_id: {_is_null: true}}) {
            id
            luogo
            descrizione
            data_inizio
            data_fine
            gruppo {
                id
                nome
            }
            ruoli {
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
					gruppi(where: {scuola: {ambito: {_eq: "sezionale"}}}) {
						scuola {
							nome
                        }
					}
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
    mutation submitAttivita($corso_id: uuid = "", $data_fine: String = "", $data_inizio: String = "", $descrizione: String = "", $gruppo_id: uuid = "", $id: uuid = "", $luogo: String = "", $ruoli: [ruoli_attivita_insert_input!] = {}) {
        delete_ruoli_attivita(where: {attivita_id: {_eq: $id}}) {
            affected_rows
        }
        insert_attivita(objects: {corso_id: $corso_id, data_fine: $data_fine, data_inizio: $data_inizio, descrizione: $descrizione, gruppo_id: $gruppo_id, id: $id, luogo: $luogo, ruoli: {data: $ruoli}}, on_conflict: {constraint: attivita_pkey, update_columns: [corso_id,luogo,descrizione,data_inizio,data_fine, gruppo_id]}) {
            affected_rows
        }
    }
`;

export const deleteAttivita = gql`
    mutation deleteAttivita($id: uuid = "") {
        delete_attivita_by_pk(id: $id) {
            id
        }
    }
`;