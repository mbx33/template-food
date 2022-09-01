import { IoRestaurantOutline } from 'react-icons/io5';
import FeaturedItems from './FeaturedItems';

// Menu items

const items = [
	{
		id: 1,
		title: 'Item 1',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius quasi earum magni minima? Optio, id? Culpa, doloremque quae, neque magni eaque maiores laudantium officiis quia ducimus possimus ullam facilis!',
	},
	{
		id: 2,
		title: 'Item 2',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius quasi earum magni minima? Optio, id? Culpa, doloremque quae, neque magni eaque maiores laudantium officiis quia ducimus possimus ullam facilis!',
	},
	{
		id: 3,
		title: 'Item 3',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius quasi earum magni minima? Optio, id? Culpa, doloremque quae, neque magni eaque maiores laudantium officiis quia ducimus possimus ullam facilis!',
	},
	{
		id: 4,
		title: 'Item 4',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius quasi earum magni minima? Optio, id? Culpa, doloremque quae, neque magni eaque maiores laudantium officiis quia ducimus possimus ullam facilis!',
	},
];

function FeatureMeals() {
	return (
		<section className="features-section">
			<div className="top-section">
				<IoRestaurantOutline style={{ fontSize: '4.5rem' }} />
				<h3 className="title">Popular Dishes</h3>
				<p className="sub-title">
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts.
				</p>
			</div>
			<div className="featured-items">
				<FeaturedItems items={items} />
			</div>
		</section>
	);
}

export default FeatureMeals;
