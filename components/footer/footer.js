import React from 'react';
import Container from '../container';
import Icon from '../icon';
import NavLink from '../nav-link';
import { NAV_LINKS, SOCIAL_LINKS } from './constants';
import {
	Wrapper,
	Inner,
	Nav,
	NavList,
	NavItem,
	Socials,
	SocialsItem,
	SocialsLink,
	FooterLogo,
} from './footer.styled';

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<Inner>
					<FooterLogo appearance="light" />
					<Nav aria-label="secondary nav">
						<NavList>
							{NAV_LINKS.map(({ id, href, label }) => (
								<NavItem key={id}>
									<NavLink href={href} appearance="light">
										{label}
									</NavLink>
								</NavItem>
							))}
						</NavList>
					</Nav>
					<Socials>
						{SOCIAL_LINKS.map(({ id, href, label, iconGlyph }) => (
							<SocialsItem key={id}>
								<SocialsLink aria-label={label} href={href}>
									<Icon glyph={iconGlyph} aria-hidden="true" />
								</SocialsLink>
							</SocialsItem>
						))}
					</Socials>
				</Inner>
			</Container>
		</Wrapper>
	);
};

export default Footer;
