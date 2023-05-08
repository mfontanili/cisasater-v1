import * as React from 'react';
import {
	Box,
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel, Radio,
	RadioGroup,
} from '@mui/material';
import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';
import {v4 as uuid} from 'uuid';

const style = (error) => ({
	control: {
		borderColor: error ? '#d32f2f' : 'hsl(0, 0%, 80%)',
		borderRadius: '4px',
		borderStyle: 'solid',
		borderWidth: '1px',
		height: '56px',
		display: 'flex'
	},
	label: {
		position: 'absolute',
		fontSize: 12,
		paddingX: '5px',
		top: -10,
		backgroundColor: 'white',
		marginX: '9px',
	},
	group: {
		paddingX: '14px',
		...error && { color: '#d32f2f' }
	}
});

export const FieldRadio = (props) => {
	const { control, getFieldState } = useFormContext();
	const { name, label, options, isDisabled, ...rest } = props;
	const { error } = getFieldState(name);

	return (
		<FormControl error={!!error} variant='outlined' fullWidth>
			<Box sx={style(error).control}>
				<FormLabel sx={style(error).label}>{label}</FormLabel>
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<RadioGroup
							row
							sx={style(error).group}
							{...rest}
							{...field}
						>
							{options.map((option) => (
								<FormControlLabel
									key={uuid()}
									value={option.value}
									disabled={isDisabled}
									control={<Radio size='small' sx={error && { color: '#d32f2f' }}/>}
									label={option.label}
								/>
							))}
						</RadioGroup>
					)}
				/>
			</Box>
			<FormHelperText sx={{ mx: '14px' }}>{error?.message}</FormHelperText>
		</FormControl>
	);
};

FieldRadio.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	options: PropTypes.array,
	isDisabled: PropTypes.bool,
};