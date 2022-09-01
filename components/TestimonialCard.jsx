import React from 'react';
import { motion } from 'framer-motion';
import { BsChatLeftQuote } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

export const TestimonialCard = ({ data }) => {
	return (
		<article className="card-container">
			{data &&
				data.map((message) => {
					const { name, text } = message;
					return (
						<motion.div key={text} className="testimonial">
							<h3 className="quote-name">{name}</h3>
							<blockquote className="quote-text">
								<FaQuoteLeft style={{ marginRight: '1rem' }} />
								<span>{text} &quot;</span>
							</blockquote>
						</motion.div>
					);
				})}
		</article>
	);
};
