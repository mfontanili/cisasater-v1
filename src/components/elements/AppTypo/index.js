import * as React from 'react';

import { Link as MuiLink, Typography } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

export const H1 = ({ children, ...props }) => {
	return (
		<Typography
			variant="h1"
			{...props}
			sx={{
				fontSize: { xs: 32, md: 36 },
				fontWeight: 500,
				marginBottom: 5,
				lineHeight: 1.4,
			}}
		>
			{children}
		</Typography>
	);
};

export const H2 = ({ children, ...props }) => {
	return (
		<Typography
			variant="h2"
			{...props}
			sx={{
				fontSize: { xs: 24, md: 28 },
				marginBottom: 5,
				lineHeight: 1.2,
			}}
		>
			{children}
		</Typography>
	);
};

export const H3 = ({ children, ...props }) => {
	return (
		<Typography
			variant="h2"
			{...props}
			sx={{
				fontSize: { xs: 20, md: 24 },
				marginBottom: 3,
				lineHeight: 1.2,
			}}
		>
			{children}
		</Typography>
	);
};

export const Span = (props) => {
	return (
		<Typography
			variant="inherit"
			component="span"
			sx={{
				px: 1,
				color: (theme) => theme.palette.primary.main,
				fontSize: 'inherit',
			}}
			{...props}
		/>
	);
};

export const TitleH1 = ({ title1, title2, ...props }) => {
	return (
		<H1 {...props}>
			{title1}<Span>{title2}</Span>
		</H1>
	);
};

export const Link = ({ href, children, ...props }) => {
	return (
		<NextLink href={href} passHref legacyBehavior>
			<MuiLink underline="hover" {...props}>
				{children}
			</MuiLink>
		</NextLink>
	);
};

H1.propTypes = {
	children: PropTypes.node,
};

H2.propTypes = {
	children: PropTypes.node,
};

H3.propTypes = {
	children: PropTypes.node,
};

Link.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string
};

TitleH1.propTypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
};