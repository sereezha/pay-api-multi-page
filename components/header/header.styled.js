import styled from 'styled-components';
import { getBreakpoint } from '../../helpers';

export const Wrapper = styled.header`
	--first-section-padding: 24px;

	padding: var(--header-top-padding) 0 var(--first-section-padding);

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--first-section-padding: 40px;
	}
`;
