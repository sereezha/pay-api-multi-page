import React from 'react';
import Header from '../header';
import HomeHeader from '../home-header';
import Footer from '../footer';
import RequestInviteSection from '../request-invite-section';
import { Wrapper, Main, Circle } from './layout.styled';

const Layout = ({ isHomePage, children }) => {
	return (
		<Wrapper>
			<Circle isHomePage={isHomePage} />
			{isHomePage ? <HomeHeader /> : <Header />}
			<Main>{children}</Main>
			<div>
				<RequestInviteSection />
				<Footer />
			</div>
		</Wrapper>
	);
};

export default Layout;
