import React from 'react';
import Image from 'next/image';
import Nav from '../nav';
import RequestInviteForm from '../request-invite-form';
import Container from '../container';
import { Content, Header, Hero, ImageWrap, Title } from './home-header.styled';

const HomeHeader = () => {
	return (
		<Header>
			<Container>
				<Nav />
				<Hero>
					<Content>
						<Title forwardedAs="h1" type="heading-0">
							Start building with our APIs for absolutely free.
						</Title>
						<RequestInviteForm inputIdPrefix="home-" showHelpText />
					</Content>
					<ImageWrap>
						<Image
							priority
							src="/assets/illustration-phone-mockup.png"
							width={263}
							height={500}
							alt=""
							aria-hidden="true"
						/>
					</ImageWrap>
				</Hero>
			</Container>
		</Header>
	);
};

export default HomeHeader;
