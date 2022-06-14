import React, { forwardRef } from 'react';
import { Wrapper } from './input.styled';

const Input = forwardRef(({ className, invalid, ...restProps }, ref) => {
	return (
		<Wrapper ref={ref} {...restProps} invalid={invalid} className={className} />
	);
});

Input.displayName = 'Input';

export default Input;
