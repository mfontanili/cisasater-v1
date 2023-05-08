import bcrypt from 'bcryptjs';
import {useModule, useMutation} from 'hooks';

const cryptPass = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

export const useActions = () => {
    const mutate = useMutation('submitUsers', ['queryUsers']);
    const { formValues } = useModule();

    const submit = async (values) => {
        const { password, ...rest } = values;

        await mutate({
            ...rest,
            password: password ? cryptPass(password) : formValues.password,
            ruoli: formValues.ruoli.map(ruolo => ({
                gruppo_id: ruolo.gruppo?.id,
                profilo: ruolo.profilo
            }))
        });
    };

    return {
        submit
    };
};