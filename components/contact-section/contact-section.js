import React from 'react';
import Container from '../container';
import ClientsList from '../clients-list';
import {
	Section,
	Title,
	Content,
	ContactForm,
	Clients,
  ClientsTitle
} from './contact-section.styled';

const ContactSection = () => {
	return (
		<Section>
			<Container>
				<Title forwardedAs="h1" type="heading-1">
					Submit a help request and we’ll get in touch shortly.
				</Title>
				<Content>
					<ContactForm />
					<Clients>
						<ClientsTitle type="heading-4">
							Join thousands of innovators already building with us
						</ClientsTitle>
						<ClientsList />
					</Clients>
				</Content>
			</Container>
		</Section>
	);
};

export default ContactSection;
