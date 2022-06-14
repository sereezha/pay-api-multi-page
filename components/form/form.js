import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import FormField from '../form-field';
import Input from '../input';
import Textarea from '../textarea';
import Checkbox from '../checkbox';
import { Wrapper, SubmitButton } from './form.styled';
import { formValidation } from '../../helpers';
import { db, constants as firebaseConstants } from '../../firebase';

const { validateEmail, ERROR_MESSAGES } = formValidation;

const { COLLECTIONS } = firebaseConstants;
const contactFormRef = collection(db, COLLECTIONS.contactForm);

const fields = {
	name: 'name',
	emailAddress: 'email-address',
	companyName: 'company-name',
	title: 'title',
	message: 'message',
	updateCheckbox: 'update-checkbox',
};

const Form = ({ className }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful, isSubmitting },
	} = useForm({
		reValidateMode: 'onSubmit',
	});

	const onSubmit = async (data) => {
		try {
			await addDoc(contactFormRef, data);
			toast('The form was submitted!');
		} catch (err) {
			toast('Something went wrong :(');
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	const emailAddressMessage = errors[fields.emailAddress]
		? errors[fields.emailAddress]?.type === 'required'
			? errors[fields.emailAddress].message
			: ERROR_MESSAGES.email
		: null;

	return (
		<Wrapper className={className} onSubmit={handleSubmit(onSubmit)} noValidate>
			<FormField
				label="Name"
				hideLabel
				errorMessage={errors[fields.name]?.message}
				id={fields.name}
			>
				<Input
					id={fields.name}
					fullWidth
					placeholder="Name"
					invalid={!!errors[fields.name]}
					{...register(fields.name, { required: ERROR_MESSAGES.required })}
				/>
			</FormField>
			<FormField
				label="Email Address"
				hideLabel
				errorMessage={emailAddressMessage}
				id={fields.emailAddress}
			>
				<Input
					id={fields.emailAddress}
					fullWidth
					placeholder="Email Address"
					invalid={!!errors[fields.emailAddress]}
					{...register(fields.emailAddress, {
						required: ERROR_MESSAGES.required,
						validate: validateEmail,
					})}
				/>
			</FormField>
			<FormField
				label="Company Name"
				hideLabel
				errorMessage={errors[fields.companyName]?.message}
				id={fields.companyName}
			>
				<Input
					id={fields.companyName}
					fullWidth
					placeholder="Company Name"
					invalid={!!errors[fields.companyName]}
					{...register(fields.companyName, {
						required: ERROR_MESSAGES.required,
					})}
				/>
			</FormField>
			<FormField
				label="Title"
				hideLabel
				errorMessage={errors[fields.title]?.message}
				id={fields.title}
			>
				<Input
					id={fields.title}
					fullWidth
					placeholder="Title"
					invalid={!!errors[fields.title]}
					{...register(fields.title, { required: ERROR_MESSAGES.required })}
				/>
			</FormField>
			<FormField
				label="Message"
				hideLabel
				errorMessage={errors[fields.message]?.message}
				id={fields.message}
			>
				<Textarea
					id={fields.message}
					fullWidth
					placeholder="Message"
					invalid={!!errors[fields.message]}
					{...register(fields.message, { required: ERROR_MESSAGES.required })}
				/>
			</FormField>
			<Checkbox
				{...register(fields.updateCheckbox)}
				label="Stay up-to-date with company announcements and updates to our API"
			/>
			<SubmitButton type="submit" disabled={isSubmitting}>
				Submit
			</SubmitButton>
		</Wrapper>
	);
};

export default Form;
