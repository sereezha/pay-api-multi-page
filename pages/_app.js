import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import theme from '../theme/theme';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<ToastContainer autoClose={1000} hideProgressBar={true} />
		</ThemeProvider>
	);
}

export default MyApp;
