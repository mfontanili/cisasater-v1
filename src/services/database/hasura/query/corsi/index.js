import {gql} from "@apollo/client";

export const getCorsoModuli = gql`
    query getCorsi($id: uuid = "") {
        corsi_by_pk(id: $id) {
            moduli {
                id
                luogo
                descrizione
            }
        }
    }
`;