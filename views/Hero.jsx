import React from 'react';
import Image from 'next/image';
import logo from '../public/images/logo-nobg.png';

function Hero() {
	return (
		<div className="container">
			<div className="logo">
				<Image src={logo} alt="company logo" />
			</div>
			<h1 className="headline">This is the headline title for the site</h1>
			<button className="hero-btn btn">Order Food</button>
		</div>
	);
}

export default Hero;
