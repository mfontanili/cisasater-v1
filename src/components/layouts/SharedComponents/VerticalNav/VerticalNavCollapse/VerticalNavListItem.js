import * as React from 'react';

import {alpha, Stack} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';

const VerticalNavListItem = ({ children, level, ...rest }) => {
    return (

        <ListItem
            sx={{
                height: 40,
                my: 0.25,
                pl: 30 + 33 * level + 'px',
                pr: 3,
                color: (theme) => alpha(theme.palette.text.primary, 0.7),
                cursor: 'pointer',
                textDecoration: 'none !important',
                whiteSpace: 'nowrap',
                transition: 'all 0.4s ease',
                '&.nav-item-header': {
                    cursor: 'auto',
                    transition: 'all 0.4s ease',
                }
            }}
            {...rest}
        >
            <Stack direction="row" spacing={1}>
                {children}
            </Stack>
        </ListItem>
    );
};

export default VerticalNavListItem;

VerticalNavListItem.propTypes = {
    children: PropTypes.node,
    level: PropTypes.number,
};
