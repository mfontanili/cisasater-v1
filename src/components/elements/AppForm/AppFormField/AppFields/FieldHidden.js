import * as React from 'react';
import {Input} from '@mui/material';
import PropTypes from 'prop-types';

export const FieldHidden = (props) => {
	const { name } = props;

	return (
		<Input name={name} type='hidden' />
	);
};

FieldHidden.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	isDisabled: PropTypes.bool,
	type: PropTypes.string,
	multi: PropTypes.bool,
};