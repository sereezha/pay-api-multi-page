import styled, { css } from 'styled-components';
import Heading from '../heading';
import Circ from '../circle';
import { getBreakpoint } from '../../helpers';

export const Section = styled.div`
	overflow: hidden;
	padding-top: var(--first-section-padding);
	padding-bottom: var(--req-invite-section-padding);
`;

export const Title = styled(Heading)`
	margin-bottom: 40px;

	text-align: center;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		margin-bottom: 54px;
		max-width: 573px;
		width: 100%;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		max-width: 730px;
		margin: 0;
		margin-bottom: 50px;
		text-align: left;
	}
`;

export const AboutImageWrapper = styled.div`
	position: relative;
	max-width: 1440px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-top: 76px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		padding-top: 100px;
	}
`;

const imageTypeMap = {
	mobile: css`
		@media screen and (min-width: ${getBreakpoint('sm')}) {
			display: none;
		}
	`,
	tablet: css`
		display: none;

		@media screen and (min-width: ${getBreakpoint('sm')}) {
			display: block;
		}

		@media screen and (min-width: ${getBreakpoint('lg')}) {
			display: none;
		}
	`,
	desktop: css`
		display: none;

		@media screen and (min-width: ${getBreakpoint('lg')}) {
			display: block;
		}
	`,
};

export const AboutImage = styled.div`
	${({ imageType }) => imageTypeMap[imageType]}
`;

export const Circle = styled(Circ)`
	display: none;
	@media screen and (min-width: ${getBreakpoint('lg')}) {
    display: block;
    position: absolute;
    top: 50%;
		left: calc(var(--size) / 3 * 2 * -1);
    z-index: -1;
    transform: translateY(-50%);
	}
`;
