import React from 'react';
import { Wrapper } from './visually-hidden.styled';

const VisuallyHidden = ({ children, ...delegated }) => (
	<Wrapper {...delegated}>{children}</Wrapper>
);

export default VisuallyHidden;
