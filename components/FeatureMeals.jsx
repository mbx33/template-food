import React from 'react';

import { IoRestaurantOutline } from 'react-icons/io5';

function FeatureMeals() {
	return (
		<section className="features-section">
			<div className="top-section">
				<IoRestaurantOutline style={{ fontSize: '4.5rem' }} />
				<h3 className="title">Featured Dishes</h3>
				<p className="sub-title">
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts.
				</p>
			</div>
		</section>
	);
}

export default FeatureMeals;
