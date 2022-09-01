import React from 'react';
import Image from 'next/image';

const FeaturedItems = ({ items }) => {
	return (
		<>
			{items.map((item) => {
				return (
					<div className="card" key={item.id}>
						<h3>{item.title}</h3>
						<p>{item.subtitle}</p>
						<div className="image-container">
							<Image
								src={item.src}
								alt="picture of food"
								height={250}
								width={300}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default FeaturedItems;
