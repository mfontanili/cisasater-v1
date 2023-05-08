import * as React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';

export const FieldText = (props) => {
	const { name, label, type, isDisabled, multi = false } = props;
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { invalid, error } }) => {
				return (
					<TextField
						{...field}
						inputRef={field.ref}
						label={label}
						type={type}
						disabled={isDisabled}
						error={!!invalid}
						helperText={error?.message}
						multiline={multi}
						rows={5}
						fullWidth
					/>
				);
			}}
		/>
	);
};

FieldText.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	isDisabled: PropTypes.bool,
	type: PropTypes.string,
	multi: PropTypes.bool,
};