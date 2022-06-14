import styled, { css } from 'styled-components';
import { getBreakpoint } from '../../helpers';

export const BaseInput = styled.input`
	display: inline-block;
	background: none;
	border: none;
	padding: 0;
	appearance: none;
	font-family: inherit;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 16px;
	color: var(--color-secondary);
	outline: none;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		font-size: 15px;
	}

	&::placeholder {
		opacity: 0.5;
	}

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
`;
