import React from 'react';

import Features from './homeComponents/Features';
import Hero from './homeComponents/Hero';
import Reviews from './homeComponents/Reviews';
export default function Homepage() {
	return (
		<div className="homepage">
			<Hero />
			<Features />
			<Reviews />
		</div>
	);
}
