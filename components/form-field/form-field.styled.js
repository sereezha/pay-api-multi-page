import styled from 'styled-components';
import FieldError from '../field-error';

export const Label = styled.label``;
export const LabelText = styled.span`
	display: inline-block;
`;

export const ErrorMessage = styled(FieldError)`
	padding: 0 20px;
`;
