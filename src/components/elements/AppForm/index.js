import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Dialog} from "@mui/material";
import AppFormMain from "./AppFormMain";
import {useModule} from "hooks";


export const AppForm = ({ modal, form, ...props }) => {
    const { viewForm, closeForm } = useModule(form);

    return modal ? (
        <Dialog
            open={viewForm}
            onClose={closeForm}
            maxWidth={'xl'}
        >
            <Box
                sx={{
                    py: 6,
                    px: 12,
                    '& .form-buttons': {
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1
                    }
                }}
            >
                <AppFormMain
                    form={form}
                    {...props}
                />
            </Box>
        </Dialog>
    ) : (
        <Box
            sx={{
                '& .form-buttons': {
/*                    position: 'absolute',
                    top: '78vh',*/
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1
                }
            }}
        >
            <AppFormMain
                form={form}
                {...props}
            />
        </Box>
    )
};

AppForm.propTypes = {
    modal: PropTypes.bool,
    form: PropTypes.string
};