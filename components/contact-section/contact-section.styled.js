import styled from 'styled-components';
import { getBreakpoint } from '../../helpers';
import Heading from '../heading';
import Form from '../form';

export const Section = styled.section`
	--padding-bottom: var(--req-invite-section-padding);

	padding: var(--first-section-padding) 0 var(--padding-bottom);
`;

export const Title = styled(Heading)`
	--margin-bottom: 40px;
	--horizontal-margin: auto;

	margin: 0 var(--horizontal-margin) var(--margin-bottom);
	text-align: center;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--margin-bottom: 54px;

		max-width: 573px;
		width: 100%;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		--margin-bottom: 44px;
		--horizontal-margin: 0;

		max-width: 730px;
		text-align: left;
	}
`;

export const ContactForm = styled(Form)`
	@media screen and (min-width: ${getBreakpoint('sm')}) {
		max-width: 445px;
		width: 100%;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 80px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		gap: 64px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const Clients = styled.div`
	display: grid;
	justify-items: center;
	gap: 40px;
	max-width: 540px;
	width: 100%;
	flex-shrink: 0;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		justify-items: start;
	}
`;

export const ClientsTitle = styled(Heading)`
	max-width: 445px;
	width: 100%;
	text-align: center;
	@media screen and (min-width: ${getBreakpoint('lg')}) {
		text-align: left;
	}
`;
