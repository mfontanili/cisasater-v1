import * as React from 'react';
import {Fragment, useEffect, useState} from 'react';
import {Collapse, ListItemIcon, ListItemText} from '@mui/material';
import clsx from 'clsx';
import {isUrlInChildren} from 'helpers';
import PropTypes from 'prop-types';
import {useAuthorization, useRoute} from 'hooks';
import VerticalItem from '../VerticalNavItem';
import VerticalNavListItem from './VerticalNavListItem';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const needsToBeOpened = (pathname, item) => {
    return pathname && isUrlInChildren(item, pathname);
};

const VerticalNavCollapse = ({ item, level }) => {
    const { pathname } = useRoute();
    const [open, setOpen] = useState(() => needsToBeOpened(pathname, item));

    useEffect(() => {
        if (needsToBeOpened(pathname, item)) {
            setOpen(true);
        }
    }, [pathname, item]);

    const handleClick = () => {
        setOpen(!open);
    };

    const { can_view } = useAuthorization(item);
    if (!can_view) return null;

    return (
        <>
            <VerticalNavListItem
                level={level}
                button
                component="div"
                className={clsx('menu-vertical-collapse', open && 'open')}
                onClick={handleClick}
            >
                <ListItemText
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}
                    className="nav-item-content"
                    primary={item.title}
                    primaryTypographyProps={{
                        fontSize: '15px'
                    }}
                />
                <ListItemIcon
                    sx={{
                        pt: 0.25
                    }}
                >
                    { open ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)}
                </ListItemIcon>
            </VerticalNavListItem>

            {item.children && (
                <Collapse in={open} className="collapse-children">
                    {item.children.map((item) => (
                        <Fragment key={item.name}>
                            {item.type === 'collapse' && (
                                <VerticalNavCollapse
                                    item={item}
                                    level={level + 1}
                                />
                            )}

                            {item.type === 'item' && (
                                <VerticalItem item={item} level={level + 1}/>
                            )}
                        </Fragment>
                    ))}
                </Collapse>
            )}
        </>
    );
};

export default React.memo(VerticalNavCollapse);

VerticalNavCollapse.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number,
};
