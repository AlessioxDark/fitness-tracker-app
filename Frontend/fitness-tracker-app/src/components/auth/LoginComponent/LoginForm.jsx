import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function LoginForm() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	function updateFormData(e) {
		setFormData((prevData) => {
			return {
				...prevData,
				[e.target.name]: e.target.value,
			};
		});
	}

	async function submitData(e) {
		e.preventDefault(); // Prevent form submission
		try {
			// Esegui la richiesta POST al backend per la registrazione dell'utente
			const response = await fetch('http://localhost:5000/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Registrazione fallita: ' + response.statusText);
			}
			const data = await response.json();
			localStorage.setItem('token', data.token);
			console.log(data.token);
			console.log('Registrazione completata con successo:', data.token);
		} catch (error) {
			console.error('Errore durante la registrazione:', error);
		}
	}
	return (
		<div className="login-form-container">
			<form onSubmit={submitData} className="login-form">
				<div className="login-form-field">
					<label htmlFor="email" className="login-label">
						Email
					</label>
					<input
						type="email"
						placeholder="Enter your email"
						className="login-input"
						name="email"
						id="email"
						value={formData.email}
						onChange={updateFormData}
						required
					/>
				</div>
				<div className="login-form-field">
					<label htmlFor="password" className="login-label">
						Password
					</label>
					<input
						type="password"
						placeholder="Enter a password"
						className="login-input"
						name="password"
						id="password"
						value={formData.password}
						onChange={updateFormData}
						required
					/>
				</div>

				<p>
					Don't have an account? <Link to={'/register'}>Create one</Link>
				</p>

				<div className="login-btn-container">
					<button type="submit" className="login-btn">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
