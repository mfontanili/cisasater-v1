import * as React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';

import { NavButton } from './NavButton';

export const LinkButton = React.forwardRef(function CustomComponent(
	{ href, children, ...rest },
	ref
) {
	return (
		<Link href={href} passHref>
			<NavButton href={href} ref={ref} {...rest}>
				{children}
			</NavButton>
		</Link>
	);
});

LinkButton.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string
};