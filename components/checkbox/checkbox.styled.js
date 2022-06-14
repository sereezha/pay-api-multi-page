import styled from 'styled-components';
import Icon from '../icon';

export const Wrapper = styled.label`
	--checkbox-size: 1.6em;

	display: inline-grid;
	grid-template-columns: var(--checkbox-size) auto;
	align-items: center;
	gap: ${({ isLabelVisible }) => (isLabelVisible ? '1.73em' : '0')};
	font-size: 15px;
`;

export const InputWrapper = styled.span`
	position: relative;
	display: flex;
`;

export const CheckIcon = styled(Icon)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 0.93em;
	height: 0.7em;
	stroke: var(--color-white);
	opacity: 0;
	pointer-events: none;
	transition: opacity var(--transition-duration);
`;

export const Input = styled.input`
	appearance: none;
	width: var(--checkbox-size);
	height: var(--checkbox-size);
	margin: 0;
	background-color: hsla(207, 21%, 79%);
	cursor: pointer;
	transition: background-color var(--transition-duration);

	&:focus-visible {
		outline: 1px solid var(--color-primary);
		outline-offset: 2px;
	}

	&:checked {
		background-color: var(--color-primary);
		+ ${CheckIcon} {
			opacity: 1;
		}
	}
`;

export const Text = styled.span`
	display: inline-block;
	letter-spacing: -0.12px;
`;
