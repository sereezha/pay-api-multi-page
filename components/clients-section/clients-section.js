import React from 'react';
import Container from '../container';
import ClientsList from '../clients-list';
import Button from '../button';
import { Section, Inner, Content, Title, Text } from './clients-section.styled';

const ClientsSection = () => (
	<Section>
		<Container>
			<Inner>
				<ClientsList appearance='light' />
				<Content>
					<Title appearance="light" forwardedAs="h2" type="heading-2">
						Who we work with
					</Title>
					<Text>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </Text>
					<Button appearance="secondary-light" href="/about">
						About Us
					</Button>
				</Content>
			</Inner>
		</Container>
	</Section>
);

export default ClientsSection;
