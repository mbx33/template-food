import { useEffect } from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/hero.css';
import '../styles/navbar.css';
import '../styles/about.css';
import '../styles/testimonial.css';
import '../styles/featureMeals.css';

function MyApp({ Component, pageProps }) {
	// useEffect(() => {
	// 	import('bootstrap/dist/js/bootstrap');
	// }, []);

	return <Component {...pageProps} />;
}

export default MyApp;
