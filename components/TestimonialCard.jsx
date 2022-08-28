import React from 'react';

export const TestimonialCard = ({ data }) => {
	return (
		<article className="card-container">
			{data &&
				data.map((message) => {
					const { name, text } = message;
					return (
						<>
							<h3 className="quote-name">{name}</h3>
							<blockquote className="quote-text">{text}</blockquote>
						</>
					);
				})}
		</article>
	);
};
