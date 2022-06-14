import styled from 'styled-components';
import { getBreakpoint } from '../../../../helpers';

export const Wrapper = styled.div`
	--vertical-padding: 48px;

	padding: var(--vertical-padding) 0;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--vertical-padding: 64px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		--vertical-padding: 72px;
	}
`;

export const Inner = styled.div`
	--border: 1px solid hsl(207, 21%, 79%);

	padding: 16px 0;
	border-top: var(--border);
	border-bottom: var(--border);

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		padding: 0;
		border: none;
	}
`;

export const List = styled.ul`
	display: grid;
	gap: 32px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		gap: 30px;
	}
`;

export const ListItem = styled.li`
	text-align: center;
	@media screen and (min-width: ${getBreakpoint('sm')}) {
		padding: 16px 0;
		border-top: var(--border);
		border-bottom: var(--border);
		text-align: left;
	}
`;

export const ListTitle = styled.div`
	font-size: 16px;
	color: var(--color-secondary);
	opacity: 0.7;
`;

export const ListStat = styled.div`
	font-size: 56px;
	line-height: 1.28;
	letter-spacing: -0.43px;
	color: var(--color-primary);
	font-family: var(--font-heading);
`;
