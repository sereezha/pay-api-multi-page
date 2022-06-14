import styled, { css } from 'styled-components';
import Logo from '../logo';
import BaseButton from '../base-button';
import Link from '../nav-link';
import { getBreakpoint } from '../../helpers';

export const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;

	@media screen and (min-width: ${getBreakpoint('md')}) {
		gap: 64px;
	}
`;

export const NavLogo = styled(Logo)`
	flex-shrink: 0;
`;

export const NavListWrapper = styled.div`
	flex-grow: 1;
	@media screen and (max-width: ${getBreakpoint('md', 'max')}) {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		max-width: 300px;
		width: 100%;
		padding: 48px 24px;
		background-color: hsl(207, 28%, 15%);
		box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
		transition: transform var(--transition-duration) ease-out;
		transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
	}
`;

export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 32px;
	padding-top: 42px;
	border-top: 1px solid hsl(210, 15%, 29%);

	@media screen and (min-width: ${getBreakpoint('md')}) {
		flex-direction: row;
		align-items: center;
		gap: 40px;
		padding: 0;
		border: 0;
		text-align: left;
	}
`;

export const NavItem = styled.li`
	${({ isPrimaryItem }) =>
		isPrimaryItem &&
		css`
			@media screen and (min-width: ${getBreakpoint('md')}) {
				margin-left: auto;
			}
		`}
`;

export const NavLink = styled(Link)`
	@media screen and (max-width: ${getBreakpoint('md', 'max')}) {
		font-size: 20px;
	}
`;

const NavToggle = styled(BaseButton)`
	display: flex;
	flex-shrink: 0;

	@media screen and (min-width: ${getBreakpoint('md')}) {
		display: none;
	}
`;

export const CloseButton = styled(NavToggle)`
	margin-left: auto;
	margin-bottom: 24px;

	svg {
		fill: var(--color-white);
	}
`;

export const OpenButton = styled(NavToggle)`
	svg {
		fill: var(--color-secondary);
	}
`;
