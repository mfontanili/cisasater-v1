import * as React from 'react';
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel} from '@mui/material';
import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';

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
		paddingLeft: '14px',
		...error && { color: '#d32f2f' }
	},
});

export const FieldCheckbox = (props) => {
	const { name, label, options, isDisabled } = props;
	const { control, getFieldState } = useFormContext();
	const { error } = getFieldState(name);

	return (
		<FormControl error={!!error} variant='outlined' fullWidth>
			<Box sx={style(error).control}>
				<FormLabel sx={style(error).label}>{label}</FormLabel>
				<FormGroup
					row
					sx={style(error).group}
				>
					<Controller
						name={name}
						control={control}
						render={({ field: { onChange, ...field } }) => {
							return options.map((option) => (
								<FormControlLabel
									key={option.value}
									control={
										<Checkbox
											sx={error && { color: '#d32f2f' }}
											onChange={(e) => onChange(e.target.checked)}
											value={option.value}
											{...field}
										/>
									}
									label={option.label}
									disabled={isDisabled}
								/>
							));
						}}
					/>
				</FormGroup>
			</Box>
			<FormHelperText sx={{ mx: '14px' }}>{error?.message}</FormHelperText>
		</FormControl>
	);
};

FieldCheckbox.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	options: PropTypes.array,
	isDisabled: PropTypes.bool,
};