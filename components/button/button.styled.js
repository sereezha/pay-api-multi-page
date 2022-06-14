import styled, { css } from 'styled-components';
import { APPEARANCES } from './constants';
import BaseButton from '../base-button';

const appearancesMap = {
	[APPEARANCES.primary]: css`
		--color-default: var(--color-white);
		--color-hover: var(--color-white);
		--color-focus: var(--color-white);
		--background-color: var(--color-primary);
		--background-color-hover: var(--color-primary-active);
		--background-color-focus: var(--color-primary-active);
		--border-color: transparent;
	`,
	[APPEARANCES.secondaryDark]: css`
		--color-default: var(--color-secondary);
		--color-hover: var(--color-white);
		--color-focus: var(--color-white);
		--background-color: transparent;
		--background-color-hover: var(--color-secondary);
		--background-color-focus: var(--color-secondary);
		--border-color: var(--color-secondary);
	`,
	[APPEARANCES.secondaryLight]: css`
		--color-default: var(--color-white);
		--color-hover: var(--color-mirage-blue);
		--color-focus: var(--color-mirage-blue);
		--background-color: transparent;
		--background-color-hover: var(--color-white);
		--background-color-focus: var(--color-white);
		--border-color: var(--color-white);
	`,
};

const getColorVariables = (appearance) => appearancesMap[appearance];

export const Button = styled(BaseButton)`
	${({ appearance }) => getColorVariables(appearance)}

	display: inline-flex;
	justify-content: center;
	min-width: 130px;
	padding: 15px 23px;
	border-radius: 24px;
	color: var(--color-default);
	font-weight: 700;
	line-height: 1.1;
	letter-spacing: -0.11px;
	background: var(--background-color);
	border: 1px solid var(--border-color);
	transition-property: border-color, background-color, color;
	transition-duration: var(--transition-duration);

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	@media (hover: hover) {
		&:hover:not(:disabled) {
			color: var(--color-hover);
			background-color: var(--background-color-hover);
		}
	}

	&:focus {
		color: var(--color-focus);
		background-color: var(--background-color-focus);
	}

	&:disabled {
		opacity: 0.5;
    cursor: default;
	}

	${({ appearance }) =>
		appearance === APPEARANCES.primary &&
		css`
			box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
		`}
`;
