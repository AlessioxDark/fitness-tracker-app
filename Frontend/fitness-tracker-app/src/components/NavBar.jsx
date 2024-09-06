import React from 'react';

export default function NavBar() {
	return (
		<div className="navbar">
			<h1 className="navbar-title">Fitness Tracker</h1>
			<ul className="navbar-links">
				<li className="navbar-link">Home</li>
				<li className="navbar-link">Workouts</li>
				<li className="navbar-link">Nutrition</li>
				<li className="navbar-link">Goals</li>
				<li className="navbar-link">Support</li>
				<li className="navbar-link">Profile</li>
			</ul>
		</div>
	);
}
