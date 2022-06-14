import styled from 'styled-components';
import Nav from '../nav';
import Heading from '../heading';
import { getBreakpoint } from '../../helpers';

export const Header = styled.header`
	padding-top: var(--header-top-padding);
	padding-bottom: 80px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		padding-bottom: 100px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		padding-bottom: 75px;
	}
`;

export const HeaderNav = styled(Nav)``;

export const Hero = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	padding-top: 32px;
	text-align: center;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		gap: 48px;
		padding-top: 48px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		flex-direction: row;
    justify-content: space-between;
    max-width: 1015px;
    width: 100%;
		padding-top: 74px;
    text-align: left;
	}
`;

export const Content = styled.div`
	max-width: 573px;
	width: 100%;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		max-width: 546px;
	}
`;

export const Title = styled(Heading)`
	margin-bottom: 24px;
	@media screen and (min-width: ${getBreakpoint('lg')}) {
    margin-bottom: 48px;
  }
`;

export const ImageWrap = styled.div`
	order: -1;
	max-width: 128px;
	width: 100%;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		max-width: 160px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-shrink: 0;
		order: 1;
		max-width: 263px;
	}
`;
