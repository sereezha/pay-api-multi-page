import styled from 'styled-components';
import Heading from '../heading';
import { getBreakpoint } from '../../helpers';

export const Section = styled.section`
	--padding-bottom: var(--req-invite-section-padding);

	padding: var(--first-section-padding) 0 var(--padding-bottom);
`;

export const Title = styled(Heading)`
	margin-bottom: 48px;
	text-align: center;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		text-align: left;
	}
`;
