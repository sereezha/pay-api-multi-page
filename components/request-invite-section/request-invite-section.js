import React from 'react';
import Container from '../container';
import Heading from '../heading';
import RequestInviteForm from '../request-invite-form';
import { Section, Inner, FormWrapper } from './request-invite-section.styled';

const RequestInviteSection = () => {
	return (
		<Section>
			<Container>
				<Inner>
					<Heading as="h2" type="heading-2">
						Ready to start?
					</Heading>
					<FormWrapper>
						<RequestInviteForm />
					</FormWrapper>
				</Inner>
			</Container>
		</Section>
	);
};

export default RequestInviteSection;
