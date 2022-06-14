import styled from 'styled-components';
import { getBreakpoint } from '../../../../helpers';

export const Wrapper = styled.div`
	display: grid;
	gap: 48px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		gap: 64px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		gap: 56px;
	}
`;
