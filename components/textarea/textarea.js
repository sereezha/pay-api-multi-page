import React, { forwardRef } from 'react';
import { Wrapper } from './textarea.styled';

const Textarea = forwardRef(({ className, invalid, ...restProps }, ref) => {
	return <Wrapper ref={ref} {...restProps} invalid={invalid} className={className} as="textarea" />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
