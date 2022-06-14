import Head from 'next/head';
import FeaturesSection from '../components/features-section';
import ClientsSection from '../components/clients-section';
import AdvantagesSection from '../components/advantages-section';
import Layout from '../components/layout';

const HomePage = () => {
	return (
		<Layout isHomePage>
			<Head>
				<title>Home page</title>
			</Head>
			<ClientsSection />
			<AdvantagesSection />
			<FeaturesSection />
		</Layout>
	);
};

export default HomePage;
