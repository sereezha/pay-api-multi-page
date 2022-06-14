import React from 'react';
import Container from '../container';
import Nav from '../nav';
import { Wrapper } from './header.styled';

const Header = () => (
	<Wrapper>
		<Container>
			<Nav />
		</Container>
	</Wrapper>
);

export default Header;
