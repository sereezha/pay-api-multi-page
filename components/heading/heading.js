import React from 'react';
import { APPEARANCES, TYPES } from './constants';
import {
	Heading0,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
} from './heading.styled';

const headingsMap = {
	[TYPES.h0]: Heading0,
	[TYPES.h1]: Heading1,
	[TYPES.h2]: Heading2,
	[TYPES.h3]: Heading3,
	[TYPES.h4]: Heading4,
	[TYPES.h5]: Heading5,
};

const Heading = (props) => {
	const {
		appearance = APPEARANCES.dark,
		forwardedAs = 'h2',
		children,
		type = TYPES.h2,
		className,
		...delegated
	} = props;

	const Tag = headingsMap[type];

	return (
		<Tag
			appearance={appearance}
			{...delegated}
			className={className}
			forwardedAs={forwardedAs}
		>
			{children}
		</Tag>
	);
};

export default Heading;
