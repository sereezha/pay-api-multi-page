import styled, { css } from 'styled-components';
import { APPEARANCES } from './constants';

const appearancesMap = {
	[APPEARANCES.dark]: css`
		--color-default: var(--color-secondary-light);
		--color-hover: var(--color-secondary);
	`,
	[APPEARANCES.light]: css`
		--color-default: var(--color-text-light-pale);
		--color-hover: var(--color-link-water-white);
	`,
};

const getColorVariables = (appearance) => appearancesMap[appearance];

export const NavLink = styled.a`
	${({ appearance }) => getColorVariables(appearance)}
  --color-active: var(--color-hover);

	font-weight: 700;
	font-size: 15px;
	line-height: 1.2;
	color: var(--color-default);
	transition: color var(--transition-duration);

	@media (hover: hover) {
		&:hover {
			color: var(--color-hover);
		}
	}

	${({ isActive }) =>
		isActive &&
		css`
			color: var(--color-active);
		`}
`;
