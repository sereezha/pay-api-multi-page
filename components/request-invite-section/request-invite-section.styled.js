import styled from 'styled-components';
import { getBreakpoint } from '../../helpers';

export const Section = styled.section`
	--padding-top: var(--req-invite-section-padding);
	--padding-bottom: calc(var(--padding-top) * 2);

	padding: var(--padding-top) 0 var(--padding-bottom);
	text-align: center;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		text-align: left;
	}
`;

export const Inner = styled.div`
	display: grid;
	gap: 32px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		gap: 40px;
		max-width: 445px;
		width: 100%;
		margin: 0 auto;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		grid-template-columns: repeat(2, 1fr);
		max-width: 100%;
	}
`;

export const FormWrapper = styled.div`
	@media screen and (min-width: ${getBreakpoint('lg')}) {
		display: flex;
		justify-content: flex-end;
	}
`;
