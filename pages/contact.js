import Head from 'next/head';
import Layout from '../components/layout';
import ContactSection from '../components/contact-section';

const ContactPage = () => {
	return (
		<Layout>
			<Head>
				<title>Contact page</title>
			</Head>
			<ContactSection />
		</Layout>
	);
};

export default ContactPage;
