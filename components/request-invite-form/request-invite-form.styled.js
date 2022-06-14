import styled from 'styled-components';
import BaseInput from '../base-input';
import Btn from '../button';
import InpField from '../form-field';
import FieldError from '../field-error';
import getBreakpoint from '../../helpers/get-breakpoint';

export const Wrapper = styled.div`
	max-width: 445px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin: 0;
	}
`;

export const HelpText = styled.p`
	margin-top: 16px;
	color: var(--color-secondary-light);
`;

export const Form = styled.form`
	--field-offset: -40px;
	--spacer: 10px;

	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		flex-direction: row;
		align-items: center;
	}
`;

export const FormField = styled.div`
	flex-grow: 1;
	@media screen and (min-width: ${getBreakpoint('sm')}) {
		margin-right: var(--field-offset);
	}
`;

export const ErrorMessage = styled(FieldError)`
	margin-top: 15px;
  padding: 0 28px;
`;

export const Input = styled(BaseInput)`
	--horizontal-padding: 28px;
	--right-padding: var(--horizontal-padding);
	--vertical-padding: 15px;
	--padding: var(--vertical-padding) var(--right-padding)
		var(--vertical-padding) var(--horizontal-padding);

	padding: var(--padding);
	font-weight: 700;
	line-height: 1.2;
	border-radius: 24px;
	background-color: var(--color-white);
	box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
	width: 100%;
	margin-bottom: 16px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--right-padding: calc(var(--field-offset) * -1 + var(--horizontal-padding));

		margin-bottom: 0;
	}
`;

export const Button = styled(Btn)`
	@media screen and (min-width: ${getBreakpoint('sm')}) {
		flex-shrink: 0;
	}
`;
