import * as React from 'react';
import { useState } from 'react';
import {
	Box,
	Grow,
	Icon,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Paper,
} from '@mui/material';
import clsx from 'clsx';
import { isUrlInChildren } from 'helpers';
import PropTypes from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';
import {useAuthorization, useRoute} from 'hooks';
import HorizontalCollapse from '../HorizontalCollapse';
import HorizontalItem from '../HorizontalItem';

const HorizontalGroup = ({ item, nestedLevel }) => {
	const [opened, setOpened] = useState(false);
	const { pathname } = useRoute();

	const { can_view } = useAuthorization(item);
	if (!can_view) return null;

	const handleToggle = (open) => {
		setOpened(open);
	};

	return (
		<Manager>
			<Reference>
				{({ ref }) => (
					<ListItem
						ref={ref}
						className={clsx(
							'navItem',
							isUrlInChildren(item, pathname) && 'active'
						)}
						onMouseEnter={() => handleToggle(true)}
						onMouseLeave={() => handleToggle(false)}
						aria-owns={opened ? 'menu-list-grow' : null}
						aria-haspopup="true"
					>
						{item.icon && (
							<Icon color="action" className="navLinkIcon">
								{item.icon}
							</Icon>
						)}
						<ListItemText
							primary={item.title}
							sx={{
								fontWeight: 400,
							}}
						/>
						{nestedLevel > 0 && (
							<IconButton
								sx={{
									ml: 2,
								}}
								disableRipple
							>
								<Icon
									sx={{
										fontSize: 18,
									}}
									className="arrow-icon"
								>
                                    keyboard_arrow_right
								</Icon>
							</IconButton>
						)}
					</ListItem>
				)}
			</Reference>
			<Popper
				placement={nestedLevel === 0 ? 'bottom-start' : 'right'}
				eventsEnabled={opened}
				positionFixed
			>
				{({ ref, style, placement }) =>
					opened && (
						<Box
							ref={ref}
							sx={{
								...style,
								boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
								zIndex: 1110 + nestedLevel,
								'& .popperClose': {
									pointerEvents: 'none',
								},
							}}
							data-placement={placement}
							className={clsx({
								popperClose: !opened,
							})}
						>
							<Grow
								in={opened}
								id="menu-list-grow"
								style={{ transformOrigin: '0 0 0' }}
							>
								<Paper
									onMouseEnter={() => handleToggle(true)}
									onMouseLeave={() => handleToggle(false)}
								>
									{item.children && (
										<List
											sx={{
												px: 0,
											}}
										>
											{item.children.map((item) => (
												<React.Fragment key={item.name}>
													{item.type === 'group' && (
														<HorizontalGroup
															item={item}
															nestedLevel={
																nestedLevel
															}
														/>
													)}

													{item.type ===
                                                        'collapse' && (
														<HorizontalCollapse
															item={item}
															nestedLevel={
																nestedLevel
															}
														/>
													)}

													{item.type === 'item' && (
														<HorizontalItem
															item={item}
															nestedLevel={
																nestedLevel
															}
														/>
													)}
												</React.Fragment>
											))}
										</List>
									)}
								</Paper>
							</Grow>
						</Box>
					)
				}
			</Popper>
		</Manager>
	);
};

export default React.memo(HorizontalGroup);

HorizontalGroup.propTypes = {
	item: PropTypes.object,
	nestedLevel: PropTypes.number,
};
