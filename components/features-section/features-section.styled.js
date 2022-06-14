import styled from 'styled-components';
import { getBreakpoint } from '../../helpers';
import Heading from '../heading';

export const Section = styled.section`
	--padding-top: 40px;
	--padding-bottom: var(--padding-top);

	padding: var(--padding-top) 0 var(--padding-bottom);

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--padding-top: 50px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		--padding-top: 73px;
		--padding-bottom: 50px;
	}
`;

export const Feature = styled.ul`
	display: grid;
	gap: 48px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		gap: 30px;
	}
`;

export const FeatureItem = styled.li`
	display: flex;
	flex-direction: column;
	text-align: center;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		flex-basis: 100%;
	}
`;

export const FeatureImage = styled.div`
	margin-bottom: 32px;
`;

export const FeatureHeading = styled(Heading)`
	margin-bottom: 16px;
`;

export const FeatureText = styled.p`
	letter-spacing: -0.12px;
`;
