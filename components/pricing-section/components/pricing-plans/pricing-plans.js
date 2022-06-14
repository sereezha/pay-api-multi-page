import React from 'react';
import {
	List,
	ListItem,
	Title,
	Description,
	Cost,
	FeaturesListWrap,
	FeaturesList,
	FeaturesItem,
  FeatureAvailableIcon,
	RequestInvite,
} from './pricing-plans.styled';

const PricingPlans = ({ plans }) => {
	return (
		<List>
			{plans.map(({ type, title, description, price, features }) => (
				<ListItem key={type}>
					<Title appearance="primary" forwardedAs="h2" type="heading-4">
						{title}
					</Title>
					<Description>{description}</Description>
					<Cost>{price}</Cost>
					<FeaturesListWrap>
						<FeaturesList>
							{features.map(({ id, label, available }) => (
								<FeaturesItem key={id} available={available}>
									{available && <FeatureAvailableIcon glyph="check" />}
									{label}
								</FeaturesItem>
							))}
						</FeaturesList>
					</FeaturesListWrap>
					<RequestInvite href="/contact">Request Access</RequestInvite>
				</ListItem>
			))}
		</List>
	);
};

export default PricingPlans;
