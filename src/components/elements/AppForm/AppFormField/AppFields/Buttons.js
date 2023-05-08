import * as React from 'react';
import { Grid } from '@mui/material';
import { ButtonPrimary } from 'components/index';
import PropTypes from 'prop-types';
import {useFormContext} from 'react-hook-form';
import {useModule} from 'hooks';

export const SubmitButton = ({ label, ...rest }) => {
	const { formState: { isSubmitting }} = useFormContext();

	return (
		<Grid item {...rest}>
			<ButtonPrimary
				variant='contained'
				type='submit'
				disabled={isSubmitting}
			>
				{label}
			</ButtonPrimary>
		</Grid>
	);
};

export const BackButton = ({ label, ...rest }) => {
	const { formState: { isSubmitting }} = useFormContext();
	const { closeForm } = useModule();

	return (
		<Grid item {...rest}>
			<ButtonPrimary
				variant='outlined'
				type='button'
				onClick={closeForm}
				disabled={isSubmitting}
			>
				{label}
			</ButtonPrimary>
		</Grid>
	);
};

export const Button = ({ label, ...rest }) => {
	const { formState: { isSubmitting }} = useFormContext();

	return (
		<Grid item {...rest}>
			<ButtonPrimary
				variant='outlined'
				type='button'
				disabled={isSubmitting}
			>
				{label}
			</ButtonPrimary>
		</Grid>
	);
};

SubmitButton.propTypes = {
	label: PropTypes.string,
};

BackButton.propTypes = {
	label: PropTypes.string,
};

Button.propTypes = {
	label: PropTypes.string,
};
