import React from 'react';
import { getIcon } from '../icons';

const Icon = ({ glyph, className, ...restProps }) => {
	const Icon = getIcon(glyph);

	if (!Icon) return null;

	return <Icon {...restProps} className={className} />;
};

export default Icon;
