import React, { Fragment } from 'react';
import VisuallyHidden from '../visually-hidden';
import { Label, LabelText, ErrorMessage } from './form-field.styled';

const FormField = ({
	id,
	children,
	label,
	hideLabel,
	errorMessage,
	...restProps
}) => {
	const LabelTextWrapper = hideLabel ? VisuallyHidden : Fragment;
	return (
		<Label htmlFor={id} {...restProps}>
			<LabelTextWrapper>
				<LabelText>{label}</LabelText>
			</LabelTextWrapper>
			{children}
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</Label>
	);
};

export default FormField;
