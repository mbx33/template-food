// styles

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// components
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
	{
		name: '— Nathan Myhrvold',
		text: 'Cooking is an art, but all art requires knowing something about the techniques and materials',
	},
	{
		name: '— Josh Billings',
		text: 'Never work before breakfast; if you have to work before breakfast, eat your breakfast first.',
	},
	{
		name: '— Julia Child',
		text: 'Find something you’re passionate about and keep tremendously interested in it.',
	},
	{
		name: '— Lev L. Spiro',
		text: 'Give a man food, and he can eat for a day. Give a man a job, and he can only eat for 30 minutes on break.',
	},
];

function Testimonials() {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	1771 / 1270;

	useEffect(() => {
		console.log(carousel.current.scrollWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<section className="testimonial-section">
			<motion.div
				ref={carousel}
				whileTap={{ cursor: 'grabbing' }}
				className="carousel"
			>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="inner-carousel"
				>
					<TestimonialCard data={testimonials} />
				</motion.div>
			</motion.div>
		</section>
	);
}

export default Testimonials;
