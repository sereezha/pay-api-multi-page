import Head from 'next/head';
import Layout from '../components/layout';
import PricingSection from '../components/pricing-section';

const PricingPage = () => {
	return (
		<Layout>
			<Head>
				<title>Pricing page</title>
			</Head>
			<PricingSection />
		</Layout>
	);
};

export default PricingPage;
