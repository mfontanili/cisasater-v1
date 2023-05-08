import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";
import AppFormItem from "../AppFormItem";

const AppFormGroup = ({ items }) => {

    return (
        <Grid container columnSpacing={3} rowSpacing={3}>
            {items.map((item, index) => (
                    <AppFormItem item={item} key={index}/>
                )
            )}
        </Grid>
    );
};

export default React.memo(AppFormGroup);

AppFormGroup.propTypes = {
    items: PropTypes.array
};