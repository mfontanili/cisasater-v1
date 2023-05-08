import * as React from 'react';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import 'moment/locale/it';
import {Controller, useFormContext} from 'react-hook-form';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';

export const FieldDate = (props) => {
    const { name, label, isDisabled, ...rest } = props;
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, ...field }, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                error={!!error?.message}
                                helperText={error?.message}
                                sx={{ ...!!error?.message && { svg: { color: '#d32f2f' } } }}
                            />
                        )}
                        value={value}
                        inputFormat='DD/MM/YYYY'
                        label={label}
                        disabled={isDisabled}
                        fullWidth
                        {...rest}
                        {...field}
                    />
                </LocalizationProvider>
            )
            }
        />
    );
};

FieldDate.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
};