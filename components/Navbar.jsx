import React from 'react';

const leftLinks = ['Home', 'About', 'Features'];
const rightLinks = ['Menu', 'Contact', 'Order'];

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="left-links">
				{leftLinks.map((link) => {
					return (
						<div key={link}>
							<a href="">{link}</a>
						</div>
					);
				})}
			</div>
			<div className="nav-logo">
				<h2>Logo</h2>
			</div>
			<div className="right-links">
				{rightLinks.map((link) => {
					return (
						<div key={link}>
							<a href="">{link}</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
