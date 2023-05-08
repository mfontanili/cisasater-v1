import {useQuery as useApolloQuery, useMutation as useApolloMutation} from '@apollo/client';
import {isEmpty} from 'lodash';
import {useModule} from "../useStore";
import {useCallback} from "react";
import {query} from "services";
import {v4 as uuidv4} from "uuid";

export const useQuery = (queryName, variables) => {
    const queryString = query[queryName];
    const { loading, error, data: rawData } = useApolloQuery(queryString, { variables });
    const data = loading || isEmpty(rawData) ? [[]] : Object.values(rawData);

    return {
        data,
        isLoading: loading,
        error
    };
};

export const useMutation = (queryName, refetchQueries) => {
    const queryString = query[queryName];
    const { closeForm, formValues } = useModule();
    const [mutate] = useApolloMutation(queryString, {
        refetchQueries,
        awaitRefetchQueries: true
    });

    return useCallback(async (data) => {
        if (data) await mutate({
            variables: {
                id: formValues.id,
                uuid: formValues.uuid || uuidv4(),
                ...data,
            }
        });
        closeForm()
    }, []);
};