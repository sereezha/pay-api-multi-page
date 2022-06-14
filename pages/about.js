import Head from 'next/head';
import Layout from '../components/layout';
import AboutSection from '../components/about-section';

const AboutPage = () => {
	return (
		<Layout>
			<Head>
				<title>About page</title>
			</Head>
			<AboutSection />
		</Layout>
	);
};

export default AboutPage;
