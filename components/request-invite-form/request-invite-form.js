import React, { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import NavLink from '../nav-link';
import {
	Form,
	Input,
	Button,
	Wrapper,
	HelpText,
	ErrorMessage,
	FormField,
} from './request-invite-form.styled';
import { formValidation } from '../../helpers';
import { db, constants as firebaseConstants } from '../../firebase';
import VisuallyHidden from '../visually-hidden';

const { validateEmail, ERROR_MESSAGES } = formValidation;

const { COLLECTIONS } = firebaseConstants;
const requestInviteFormRef = collection(db, COLLECTIONS.requestInviteForm);

const RequestInviteForm = ({ showHelpText }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
		reValidateMode: 'onSubmit',
	});

	const onSubmit = async (data) => {
		try {
			await addDoc(requestInviteFormRef, data);
			toast('Thanks for the request!');
		} catch (err) {
			toast('Something went wrong :(');
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit(onSubmit)} noValidate>
				<VisuallyHidden>
					<label htmlFor="request-invite-email">Request invite</label>
				</VisuallyHidden>
				<FormField>
					<Input
						id="request-invite-email"
						type="email"
						placeholder="Enter email address"
						{...register('request-invite-email', {
							required: ERROR_MESSAGES.required,
							validate: validateEmail,
						})}
					/>
				</FormField>
				<Button appearance="primary" type="submit">
					Schedule a Demo
				</Button>
			</Form>
			{errors['request-invite-email'] && (
				<ErrorMessage>This field is required</ErrorMessage>
			)}
			{showHelpText && (
				<HelpText>
					Have any questions? <NavLink href="/contact">Contact Us</NavLink>
				</HelpText>
			)}
		</Wrapper>
	);
};

export default RequestInviteForm;
