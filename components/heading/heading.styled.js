import styled from 'styled-components';
import { getBreakpoint } from '../../helpers';
import { APPEARANCES } from './constants';

const appearancesMap = {
	[APPEARANCES.dark]: '--color-secondary',
	[APPEARANCES.darkPale]: '--color-secondary-light',
	[APPEARANCES.light]: '--color-text-light',
	[APPEARANCES.primary]: '--color-primary',
};

const getColor = (appearance) => appearancesMap[appearance];

export const Heading = styled.h1`
	--color: var(
		${({ appearance }) => getColor(appearance)},
		var(--color-secondary)
	);

	margin: 0;
	font-family: var(--font-heading);
	font-weight: 400;
	line-height: 1;
	color: var(--color);
`;

export const Heading0 = styled(Heading)`
	font-size: 32px;
	letter-spacing: -0.25px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		font-size: 48px;
		letter-spacing: -0.37px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		font-size: 72px;
		letter-spacing: -0.55px;
	}
`;

export const Heading1 = styled(Heading0)`
	@media screen and (min-width: ${getBreakpoint('lg')}) {
		font-size: 56px;
		letter-spacing: -0.43px;
	}
`;

export const Heading2 = styled(Heading)`
	font-size: 32px;
	letter-spacing: -0.28px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		font-size: 48px;
		letter-spacing: -0.37px;
	}
`;

export const Heading3 = styled(Heading)`
	font-size: 24px;
	letter-spacing: -0.18px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		font-size: 32px;
		letter-spacing: -0.25px;
	}
`;

export const Heading4 = styled(Heading)`
	font-size: 24px;
	letter-spacing: -0.18px;
`;

export const Heading5 = styled(Heading)`
	font-size: 18px;
	letter-spacing: -0.14px;
	font-family: var(--font-text);
	font-weight: 700;
	line-height: 1.38;
`;
