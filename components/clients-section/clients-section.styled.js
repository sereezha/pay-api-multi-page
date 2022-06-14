import styled from 'styled-components';
import Heading from '../heading';
import { getBreakpoint } from '../../helpers';

export const Section = styled.section`
	--vertical-padding: 80px;

	padding: var(--vertical-padding) 0;
	background-color: var(--color-mirage-blue);

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--vertical-padding: 88px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		--vertical-padding: 100px;
	}
`;

export const Inner = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
	gap: 56px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		gap: 64px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
	}
`;

export const Content = styled.div`
	order: 1;
  max-width: 460px;
  width: 100%;
  text-align: center;
	@media screen and (min-width: ${getBreakpoint('lg')}) {
		order: -1;
    text-align: left;
	}
`;

export const Title = styled(Heading)`
	margin-bottom: 16px;
	@media screen and (min-width: ${getBreakpoint('sm')}) {
		margin-bottom: 24px;
	}
`;

export const Text = styled.p`
	margin-bottom: 60px;
  color: var(--color-text-light-pale);
	@media screen and (min-width: ${getBreakpoint('sm')}) {
    margin-bottom: 32px;
  }
`;
