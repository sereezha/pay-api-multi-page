import React from 'react';
import Image from 'next/image';
import Container from '../container';
import VisuallyHidden from '../visually-hidden';
import {
	Section,
	Row,
	Content,
	Title,
	Description,
	ImageWrapper,
	SimpleUiImages,
	ImageContainer,
	Circle,
} from './advantages-section.styled';

const AdvantagesSection = () => {
	return (
		<Section>
			<Circle />
			<Container>
				<VisuallyHidden as="h2">Advantages</VisuallyHidden>
				<Row>
					<ImageWrapper>
						<ImageContainer>
							<Image
								src="/assets/illustration-easy-to-implement.png"
								width={445}
								height={284}
								alt=""
								aria-hidden="true"
							/>
						</ImageContainer>
					</ImageWrapper>
					<Content>
						<Title forwardedAs="h2">Easy to implement</Title>
						<Description>
							Our API comes with just a few lines of code. You’ll be up and
							running in no time. We built our documentation page to integrate
							payments functionality with ease.
						</Description>
					</Content>
				</Row>
				<Row isReversed>
					<ImageWrapper>
						<SimpleUiImages>
							<ImageContainer>
								<Image
									src="/assets/illustration-simple-ui-1.png"
									width={263}
									height={500}
									alt=""
									aria-hidden="true"
								/>
							</ImageContainer>
							<ImageContainer>
								<Image
									src="/assets/illustration-simple-ui-2.png"
									width={263}
									height={500}
									alt=""
									aria-hidden="true"
								/>
							</ImageContainer>
						</SimpleUiImages>
					</ImageWrapper>
					<Content>
						<Title forwardedAs="h2">Simple UI & UX</Title>
						<Description>
							Our pre-built form is easy to integrate in your app or website’s
							checkout flow and designed to optimize conversion.
						</Description>
					</Content>
				</Row>
			</Container>
		</Section>
	);
};

export default AdvantagesSection;
