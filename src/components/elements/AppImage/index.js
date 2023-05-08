import * as React from 'react';

import { Box } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

const intro = require('assets/images/intro.png');
const logo = require('assets/images/logo_cisasater.png');

export const ImageRight = ({ src, width, alt }) => {
	return (
		<Box
			sx={{
				display: 'inline-block',
				width: { xs: 'auto', md: width },
				float: { xs: 'none', md: 'right' },
				paddingLeft: { xs: 0, md: 2 },
				paddingBottom: { xs: 2, md: 0 },
			}}
		>
			<Image src={src} priority={true} alt={alt}/>
		</Box>
	);
};

export const ImageLeft = ({ src, width }) => {
	return (
		<div
			style={{
				display: 'inline-block',
				width: { xs: 'auto', md: width },
				float: { xs: 'none', md: 'left' },
			}}
		>
			<Image src={src} priority={true} />
		</div>
	);
};

export const ImageCenter = ({ src, width, alt }) => {
	return (
		<div
			style={{
				display: 'inline-block',
				width: { xs: 'auto', md: width },
			}}
		>
			<Image src={src} priority={true} alt={alt} />
		</div>
	);
};


export const ImageLogo = ({ width }) => {
	return (
		<div style={{ display: 'inline-block', width: width }}>
			<Image src={logo} priority={true} alt='logo'/>
		</div>
	);
};

export const ImageIntro = ({ width }) => {
	return (
		<div style={{ display: 'inline-block', width: width }}>
			<Image src={intro} priority={true} alt='intro' />
		</div>
	);
};

ImageRight.propTypes = {
	src: PropTypes.object,
	width: PropTypes.any
};

ImageLeft.propTypes = {
	src: PropTypes.object,
	width: PropTypes.any
};

ImageCenter.propTypes = {
	src: PropTypes.object,
	width: PropTypes.any
};

ImageLogo.propTypes = {
	width: PropTypes.any
};

ImageIntro.propTypes = {
	width: PropTypes.any
};