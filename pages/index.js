import Head from 'next/head';

import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import About from '../views/About';
import Hero from '../views/Hero';
import FeatureMeals from '../components/FeatureMeals';

export default function Home() {
	return (
		<>
			<Head>
				<title>Food Template</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<div>
				<Hero />
				<Navbar />
				<About />
				<Testimonials />
				<FeatureMeals />
			</div>
		</>
	);
}
