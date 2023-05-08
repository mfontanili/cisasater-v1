import * as React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import {FormProvider, useForm, useFormState, useWatch} from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import {AppLoader} from 'components';
import {useForms, useModule} from 'hooks';
import AppFormItem from '../AppFormItem';
import {useEffect} from "react";

export const AppFormMain = ({ form }) => {
	const { setCurrentValues, setFormState } = useModule();
	const { formLayout, validationSchema, initialValues, submit, isLoading, options } = useForms(form);
	const {
		title = null
	} = options;

	const methods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: initialValues,
		shouldUnregister: false
	});

	useFormPersist(form, methods);

	const { setError, handleSubmit, control } = methods;
	const onSubmit = handleSubmit((values) => submit(values[form], setError));

	const { errors } = useFormState({control});
	useEffect(() => setFormState(errors), [errors]);

	const current = useWatch({control});
	useEffect(() => setCurrentValues(current), [current]);

	if (isLoading) return <AppLoader/>;
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={e => {
					e.preventDefault();
					onSubmit();
					e.stopPropagation();
				}}
				name={form}>
				{title && (
					<Typography sx={{ fontSize: 22, fontWeight: 500, mb: 2 }}>
						{title}
					</Typography>
				)}
				<Grid container columnSpacing={3} rowSpacing={3}>
					{formLayout.map((item, index) => {
						return (
							<AppFormItem row={index} item={item} key={form+index}/>
						);
					})}
				</Grid>
			</form>
		</FormProvider>
	);
};

export default React.memo(AppFormMain);

AppFormMain.propTypes = {
	form: PropTypes.string
};