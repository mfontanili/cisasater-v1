import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import {AppTable} from 'components';
import AppFormField from '../AppFormField';
import Typography from "@mui/material/Typography";
import AppFormGroup from "../AppFormGroup";
import {Box} from "@mui/material";
import {useFormContext} from "react-hook-form";
import {useModule} from "hooks";

const AppFormItem = ({ item, row }) => {
    const { formState: { errors }} = useFormContext();
    const { moduleName } = useModule();

    if (item.show === false) return null

    let title;
    if (item.title) {
        title = (
            <Grid item xs={12} key={'title'+row}>
                <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                    {item.title}
                </Typography>
            </Grid>
        )
    }

    if (item.type === 'group') {
        return [
            title,
            (
                <Grid item xs={12} sm={item.col || 12} key={'group'+row}>
                    <AppFormGroup items={item.items}/>
                </Grid>
            )
        ]
    }

    if (item.type === 'hidden') {
        return item.items.map(field => (
            <AppFormField key={field.name} item={field}/>
        ))
    }

    if (item.type === 'buttons') {
        return (
            <Grid item>
                <Box className='form-buttons'>
                    {item.items.map(button => {
                        return (
                            <AppFormField
                                item={button}
                                key={button.name}
                                sx={{ marginTop: 1 }}
                            />
                        )
                    })}
                </Box>
            </Grid>
        )
    }

    if (item.type === 'table') {
        return (
            <Grid item xs={12} sm={item.col || 12}>
                <AppTable
                    modal
                    table={item.table}
                    sx={{
                        p: 2,
                        pb: 4,
                        border: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        borderRadius: '3px'
                    }}
                />
            </Grid>
        )
    }

    if (item.type === 'error' && errors[moduleName]) {
        return (
            <Grid item xs={12} key={'error'+row}>
                <Typography sx={{ fontSize: 16, color: 'red', pl: 2 }}>
                    {errors[moduleName][item.field]?.message}
                </Typography>
            </Grid>
        )
    }

    if (item.type === 'fields') {
        return [
            title,
            item.items.map(field => {
                return field.type === 'hidden' ? (
                        <AppFormField item={field} key={field.name} sx={{ display: 'none' }}/>
                    ) : (
                        <Grid item xs={12} sm={field.col || 12} key={field.name}>
                            <AppFormField item={field}/>
                        </Grid>
                    )
                }
            )
        ]
    }

    return null
};

export default React.memo(AppFormItem);

AppFormItem.propTypes = {
    item: PropTypes.object,
    row: PropTypes.number,
};