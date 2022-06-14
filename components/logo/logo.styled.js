import styled from 'styled-components';
import { APPEARANCES } from './constants';

const appearancesMap = {
	[APPEARANCES.dark]: '--color-secondary',
	[APPEARANCES.light]: '--color-text-light',
};

const getColor = (appearance) => appearancesMap[appearance];

export const Logo = styled.a`
	display: flex;
	svg {
		fill: var(${({ appearance }) => getColor(appearance)});
	}
`;
