import styled, { css } from 'styled-components';
import { getBreakpoint } from '../../helpers';
import Circ from '../circle';

export const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

export const Circle = styled(Circ)`
	--top: -550px;
	--right: 50%;
	--translateX: 50%;

	position: absolute;
	top: var(--top);
	right: var(--right);
	transform: translateX(var(--translateX));

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--top: -663px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		--top: -172px;
		--right: -140px;
		--translateX: translateX(0);
	}

	${({ isHomePage }) =>
		!isHomePage &&
		css`
			--top: -644px;
			--right: -479px;
      --translateX: 0;

			@media screen and (min-width: ${getBreakpoint('sm')}) {
				--top: -464px;
				--right: -517px;
			}

			@media screen and (min-width: ${getBreakpoint('lg')}) {
				--top: -527px;
				--right: -140px;
			}
		`}
`;

export const Main = styled.main``;
