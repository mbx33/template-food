import React from 'react';

const FeaturedItems = ({ items }) => {
	return (
		<>
			{items.map((item) => {
				return (
					<div key={item.id}>
						<h3>{item.title}</h3>
						<p>{item.subtitle}</p>
					</div>
				);
			})}
		</>
	);
};

export default FeaturedItems;
