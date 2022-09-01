import { useEffect } from 'react';

import '../styles/globals.css';
import '../styles/hero.css';
import '../styles/navbar.css';
import '../styles/about.css';
import '../styles/testimonial.css';
import '../styles/featureMeals.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
