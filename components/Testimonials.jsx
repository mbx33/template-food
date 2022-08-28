// styles
import { BsChatLeftQuote } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

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
	return (
		<section className="testimonial-section">
			<TestimonialCard data={testimonials} />
		</section>
	);
}

export default Testimonials;
