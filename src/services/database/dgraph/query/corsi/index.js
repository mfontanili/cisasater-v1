import {gql} from "@apollo/client";

export const getCorsoModuli = gql`
    query getCorsi($id: ID = "") {
        getCorsi(id: $id) {
            moduli {
                id
                luogo
                descrizione
            }
        }
    }
`;