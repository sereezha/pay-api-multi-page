import React from 'react';
import Image from 'next/image';
import Container from '../container';
import {
	Section,
	Feature,
	FeatureItem,
	FeatureHeading,
	FeatureText,
	FeatureImage,
} from './features-section.styled';
import VisuallyHidden from '../visually-hidden';

const items = [
	{
		id: '1',
		image: {
			src: 'icon-personal-finances',
		},
		title: 'Personal Finances',
		text: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
	},
	{
		id: '2',
		image: {
			src: 'icon-banking-and-coverage',
		},
		title: 'Banking & Coverage',
		text: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
	},
	{
		id: '3',
		image: {
			src: 'icon-consumer-payments',
		},
		title: 'Consumer Payments',
		text: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
	},
];

const FeaturesSection = () => {
	return (
		<Section>
			<Container>
				<VisuallyHidden as="h2">Features</VisuallyHidden>
				<Feature>
					{items.map(({ id, image, title, text }) => (
						<FeatureItem key={id}>
							<FeatureImage>
								<Image
									src={`/assets/${image.src}.svg`}
									width={88}
									height={88}
									alt=""
									aria-hidden="true"
								/>
							</FeatureImage>
							<FeatureHeading forwardedAs="h3" type="heading-5">
								{title}
							</FeatureHeading>
							<FeatureText>{text}</FeatureText>
						</FeatureItem>
					))}
				</Feature>
			</Container>
		</Section>
	);
};

export default FeaturesSection;
