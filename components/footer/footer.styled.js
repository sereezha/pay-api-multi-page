import styled from 'styled-components';
import Logo from '../logo';
import { getBreakpoint } from '../../helpers';

export const Wrapper = styled.footer`
	padding: 40px 0 56px;
	background-color: var(--color-mirage-blue);

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		padding: 32px 0;
	}
`;

export const FooterLogo = styled(Logo)`
	flex-shrink: 0;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
	text-align: center;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media screen and (min-width: ${getBreakpoint('md')}) {
		gap: 64px;
	}
`;

export const Nav = styled.nav`
	@media screen and (min-width: ${getBreakpoint('sm')}) {
		margin-right: auto;
		flex-grow: 1;
	}
`;

export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		flex-direction: row;
		gap: 40px;
	}
`;

export const NavItem = styled.li``;

export const Socials = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	flex-shrink: 0;
`;

export const SocialsItem = styled.li``;

export const SocialsLink = styled.a`
	--icon-color: var(--color-white);
	outline: none;

	svg {
		fill: var(--icon-color);
		transition: fill var(--transition-duration);
	}

	@media (hover: hover) {
		&:hover {
			--icon-color: var(--color-primary-active);
		}
	}

	&:focus {
		--icon-color: var(--color-primary-active);
	}
`;
