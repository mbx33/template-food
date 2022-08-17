import Head from 'next/head';

import Navbar from '../components/Navbar';
import About from '../views/About';
import Hero from '../views/Hero';

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
			</div>
		</>
	);
}
