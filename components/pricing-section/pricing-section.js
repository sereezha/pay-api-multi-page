import React from 'react';
import Container from '../container';
import { Section, Title } from './pricing-section.styled.js';
import { PRICING_PLANS } from './constants';
import PricingPlans from './components/pricing-plans';

const PricingSection = () => (
	<Section>
		<Container>
			<Title forwardedAs="h1" type="heading-1">
				Pricing
			</Title>
			<PricingPlans plans={PRICING_PLANS} />
		</Container>
	</Section>
);

export default PricingSection;
