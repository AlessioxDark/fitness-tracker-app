import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
	const [selected, setSelected] = useState('');
	return (
		<div className="navbar">
			<h1 className="navbar-title">Fitness Tracker</h1>
			<ul className="navbar-links">
				<li className="navbar-link">
					<Link to={'/'} onClick={() => setSelected('Home')}>
						Home
					</Link>
				</li>
				<li className="navbar-link">
					<Link to={'/workouts'} onClick={() => setSelected('Workouts')}>
						Workouts
					</Link>
				</li>
				<li className="navbar-link">
					<Link
						to={'/nutrition'}
						onClick={() => {
							setSelected('Nutrition');
						}}
					>
						Nutrition
					</Link>
				</li>
				<li className="navbar-link">
					<Link
						to={'/goals'}
						onClick={() => {
							setSelected('Goals');
						}}
					>
						Goals
					</Link>
				</li>
				<li className="navbar-link">
					<Link
						to={'/support'}
						onClick={() => {
							setSelected('Support');
						}}
					>
						Support
					</Link>
				</li>
				<li className="navbar-link">
					<Link
						to={'/register'}
						onClick={() => {
							setSelected('Profile');
						}}
					>
						Profile
					</Link>
				</li>
			</ul>
		</div>
	);
}
