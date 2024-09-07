import React from 'react';
import hero from '../assets/Hero5.png';
import Features from './Features';
import Reviews from './Reviews';
export default function Homepage() {
	return (
		<div className="homepage">
			<div className="hero-section">
				<div className="hero-text">
					<h1 className="hero-title">Sblocca il Tuo Potenziale</h1>
					<p className="hero-desc">
						Utilizza la nostra app per raggiungere il fisico che hai sempre
						sognato
					</p>
					<button className="hero-btn">Sbloccalo ora</button>
				</div>
				<img src={hero} alt="" className="hero-img" />
			</div>
			<Features />
			<Reviews />
		</div>
	);
}
