import Image from 'next/image';
import Container from '../container';
import { Stats, Points, Point } from './components';
import { Section, Title, AboutImageWrapper, AboutImage, Circle } from './index.styled';

const About = () => {
	return (
		<Section>
			<Container isSmall>
				<Title>
					We empower innovators by delivering access to the financial system
				</Title>
				<Points>
					<Point
						title="Our Vision"
						description="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
					/>
					<Point
						title="Our Business"
						description="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
					/>
				</Points>
			</Container>
			<AboutImageWrapper>
        <Circle />
				<AboutImage imageType="mobile">
					<Image
						src="/assets/about/mobile/image-team-members.jpg"
						width={375}
						height={300}
						alt="Our team meeting"
						layout="responsive"
					/>
				</AboutImage>
				<AboutImage imageType="tablet">
					<Image
						src="/assets/about/tablet/image-team-members.jpg"
						width={769}
						height={267}
						alt="Our team meeting"
						layout="responsive"
					/>
				</AboutImage>
				<AboutImage imageType="desktop">
					<Image
						src="/assets/about/desktop/image-team-members.jpg"
						width={1440}
						height={500}
						alt="Our team meeting"
						layout="responsive"
					/>
				</AboutImage>
			</AboutImageWrapper>
			<Container>
				<Stats />
			</Container>
			<Container isSmall>
				<Points>
					<Point
						title="The Culture"
						description="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
					/>
					<Point
						title="The People"
						description="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
					/>
				</Points>
			</Container>
		</Section>
	);
};

export default About;
