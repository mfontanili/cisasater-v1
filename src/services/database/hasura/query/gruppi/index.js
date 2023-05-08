import {gql} from "@apollo/client";

export const queryScuole = gql`
    query queryScuole {
        gruppi(where: {ambito: {_eq: "sezionale"}, tipo: {_eq: "scuola"}}, order_by: {nome: asc}) {
            id
            nome
            sezioni_cai
            ambito
            tipo
            ruoli: ruoli(where: {ruolo: {profilo: {_neq: "istruttore"}}}) {
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
                }
                ruolo {
                    nome
					profilo
                }
            }
			organico: ruoli(where: {ruolo: {profilo: {_eq: "istruttore"}}}) {
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
                }
                ruolo {
                    nome
                    profilo
                }
			}
        }
    }
`;

export const queryOrganiTecnici = gql`
    query queryOrganiTecnici {
        gruppi(where: {ambito: {_in: ["regionale","nazionale"]}}, order_by: {nome: asc}) {
            id
            ambito
            nome
            tipo
            ruoli: ruoli(where: {ruolo: {profilo: {_neq: "istruttore"}}}) {
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
                }
                ruolo {
                    nome
                    profilo
                }
            }
            organico: ruoli(where: {ruolo: {profilo: {_eq: "istruttore"}}}) {
                istruttore {
                    id
                    cognome
                    nome
                    email
                    titoli
                }
                ruolo {
                    nome
                    profilo
                }
            }
        }
    }
`;

export const submitGruppi = gql`
    mutation submitGruppi($id: uuid = "", $nome: String = "", $ambito: String = "", $tipo: String = "", $sezioni: jsonb = [], $ruoli: [ruoli_istruttori_insert_input!] = {}) {
        delete_ruoli_istruttori(where: {gruppo_id: {_eq: $id}}) {
            affected_rows
        }
        insert_gruppi(objects: {id: $id, nome: $nome, ambito: $ambito, tipo: $tipo, sezioni: $sezioni, ruoli: {data: $ruoli}}, on_conflict: {constraint: gruppi_pkey, update_columns: [nome,ambito,tipo,sezioni]}) {
            affected_rows
        }
    }
`;

export const deleteGruppi = gql`
    mutation deleteGruppi($id: uuid = "") {
        delete_gruppi_by_pk(id: $id) {
            id
        }
    }
`;

export const getGruppiIstruttori = gql`
    query getGruppiIstruttori($id: uuid = "") {
        gruppi_by_pk(id: $id) {
            organico(order_by: {istruttore: {cognome: asc, nome: asc}}) {
                istruttore {
                    id
                    cognome
                    nome
                    codice_fiscale
                    email
                    titoli
                    specialita
                    gruppi {
                        scuola {
                            nome
                        }
                    }
                }
            }
        }
    }
`;

export const queryGruppi = gql`
    query queryGruppi {
        gruppi {
            id
            nome
            tipo
            ambito
            organico(order_by: {istruttore: {cognome: asc, nome: asc}}) {
                istruttore {
                    id
                    cognome
                    nome
                }
            }
            ruoli {
                istruttore {
                    id
                    cognome
                    nome
                }
            }
        }
    }
`;

export const queryScuoleSin = gql`
    query queryScuole {
        scuole_sezionali: gruppi(where: {ambito: {_eq: "sezionale"}, tipo: {_eq: "scuola"}}, order_by: {nome: asc}) {
            id
            nome
			tipo
			ambito
        }
        organi_tecnici: gruppi(where: {ambito: {_neq: "sezionale"}, tipo: {_eq: "scuola"}}, order_by: {nome: asc}) {
            id
            nome
			tipo
			ambito
        }
    }
`;

export const queryScuoleSezionaliSin = gql`
    query queryScuole {
        gruppi(where: {ambito: {_eq: "sezionale"}, tipo: {_eq: "scuola"}}, order_by: {nome: asc}) {
            id
            nome
        }
    }
`;

export const queryScuoleRegionaliSin = gql`
    query queryOrganiTecnici {
        gruppi(where: {ambito: {_neq: "sezionale"}, tipo: {_eq: "scuola"}}, order_by: {nome: asc}) {
            id
            nome
        }
    }
`;

export const queryGruppiSin = gql`
    query queryGruppi {
        gruppi {
            id
            nome
            tipo
            ambito
        }
    }
`;