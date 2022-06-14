import React, { useState, useEffect } from 'react';
import Button from '../button';
import Icon from '../icon';
import {
	Wrapper,
	NavListWrapper,
	NavList,
	NavItem,
	NavLogo,
	CloseButton,
	OpenButton,
  NavLink
} from './nav.styled';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);
	const handleMQLChange = (event) => {
		setIsMobile(event.matches);
	};

	useEffect(() => {
		if (!window) return;
		const mql = window.matchMedia('(max-width: 768px)');
		mql.addEventListener('change', handleMQLChange);
		handleMQLChange(mql);

		return () => {
			mql.removeEventListener('change', handleMQLChange);
		};
	}, []);

	const navLinkAppearance = isMobile ? 'light' : 'dark';

	return (
		<Wrapper>
			<NavLogo />
			<NavListWrapper id="header-nav" isOpen={isOpen}>
				{isMobile && (
					<CloseButton
						aria-expanded={isOpen}
						aria-controls="header-nav"
						onClick={handleClose}
					>
						<Icon glyph="close" />
					</CloseButton>
				)}
				<NavList>
					<NavItem>
						<NavLink appearance={navLinkAppearance} href="/pricing">
							Pricing
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink appearance={navLinkAppearance} href="/about">
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink appearance={navLinkAppearance} href="/contact">
							Contact
						</NavLink>
					</NavItem>
					<NavItem isPrimaryItem>
						<Button fullWidth href="/contact" appearance="primary">
							Schedule a demo
						</Button>
					</NavItem>
				</NavList>
			</NavListWrapper>
			{isMobile && (
				<OpenButton
					aria-expanded={isOpen}
					aria-controls="header-nav"
					onClick={handleOpen}
				>
					<Icon glyph="menu" />
				</OpenButton>
			)}
		</Wrapper>
	);
};

export default Nav;
