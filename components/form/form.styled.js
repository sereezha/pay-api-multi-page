import styled from 'styled-components';
import Button from '../button';

export const Wrapper = styled.form`
	display: grid;
	gap: 24px;
`;

export const SubmitButton = styled(Button)`
	justify-self: start;
`;
