import React from 'react';
import { Wrapper, Title, Description } from './point.styled';

const Point = ({ title, description }) => {
	return (
		<Wrapper>
			<Title forwardedAs="h3" type="heading-4">
				{title}
			</Title>
			<Description>{description}</Description>
		</Wrapper>
	);
};

export default Point;
