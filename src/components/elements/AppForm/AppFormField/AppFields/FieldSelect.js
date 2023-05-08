import * as React from 'react';
import {ListSubheader, MenuItem} from '@mui/material';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';

export const FieldSelect = (props) => {
    const {
        name,
        label,
        multi = false,
        options = [],
        isDisabled
    } = props;
    const { control } = useFormContext();

    const optionsArray = [
        ...multi ? [] : [{
            value: '',
            label,
        }],
        ...options
    ];

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { invalid, error } }) => {
                return (
                    <TextField
                        select
                        inputRef={field.ref}
                        label={label}
                        disabled={isDisabled}
                        SelectProps={{
                            multiple: multi
                        }}
                        error={!!invalid}
                        helperText={error?.message}
                        fullWidth
                        {...field}
                    >
                        {optionsArray.map(option => {
                            if (option.group) {
                                return [
                                        <ListSubheader
                                            key={option.group}
                                            sx={{
                                                fontSize: '1.1rem',
                                                fontWeight: 700
                                            }}
                                        >
                                            {option.group}
                                        </ListSubheader>,
                                        option.items.map(item => {
                                            const { value, label, disabled = false } = item;
                                            return (
                                                <MenuItem
                                                    sx={{
                                                        maxWidth: '300px'
                                                    }}
                                                    key={value}
                                                    value={value}
                                                    disabled={disabled}
                                                >
                                                    {label}
                                                </MenuItem>
                                            );
                                        })
                                    ]
                            }

                            const { value, label, disabled = false } = option;
                            return (
                                <MenuItem
                                    sx={{
                                        maxWidth: '300px'
                                    }}
                                    key={value}
                                    value={value}
                                    disabled={disabled}
                                >
                                    {label}
                                </MenuItem>
                            );

                        })}
                    </TextField>
                );
            }}
        />
    );
};

FieldSelect.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    multi: PropTypes.bool,
    creatable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    options: PropTypes.array,
};
