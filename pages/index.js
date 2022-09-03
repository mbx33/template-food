import Head from 'next/head';
import { API_URL } from '../config/index';

import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import About from '../views/About';
import Hero from '../views/Hero';
import FeatureMeals from '../components/FeatureMeals';

export default function Home({ data }) {
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
				<FeatureMeals data={data} />
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/api/menu`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}

// Get Static props fetches at build time, and only once on build.

// export async function getStaticProps() {
// 	const res = await fetch(`${API_URL}/api/menu`);
// 	const data = await res.json();

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }
