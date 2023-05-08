'use client';
import * as React from 'react';
import {TailSpin} from "react-loader-spinner";
import {Box} from "@mui/material";

export const AppLoader = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20
            }}
        >
            <TailSpin
                height="80"
                width="80"
                color="#1C84F4"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </Box>
    )
}

export default AppLoader
