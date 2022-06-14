import styled from 'styled-components';
import Heading from '../../../heading';
import { getBreakpoint } from '../../../../helpers';

export const Wrapper = styled.div`
	display: grid;
	gap: 16px;
  text-align: center;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
    grid-template-columns: 225px 1fr;
		gap: 10px;
    text-align: left;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		gap: 30px;
	}
`;

export const Title = styled(Heading)``;

export const Description = styled.p``
