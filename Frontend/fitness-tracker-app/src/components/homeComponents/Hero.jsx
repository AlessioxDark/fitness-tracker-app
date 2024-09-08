import React from 'react';
import hero from '../assets/Hero5.png';
export default function Hero() {
	return (
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
	);
}
