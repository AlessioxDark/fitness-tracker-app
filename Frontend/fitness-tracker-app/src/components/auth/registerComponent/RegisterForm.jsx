import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function RegisterForm() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	function updateFormData(e) {
		setFormData((prevData) => {
			return {
				...prevData,
				[e.target.name]:
					e.target.type === 'checkbox' ? e.target.checked : e.target.value,
			};
		});
	}

	async function submitData(e) {
		e.preventDefault(); // Prevent form submission
		try {
			// Esegui la richiesta POST al backend per la registrazione dell'utente
			const response = await fetch('http://localhost:5000/api/auth/register', {
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
			localStorage.setItem('token', JSON.stringify(data.token));
			console.log('Registrazione completata con successo:', data);
		} catch (error) {
			console.error('Errore durante la registrazione:', error);
		}
	}
	return (
		<div className="register-form-container">
			<form onSubmit={submitData} className="register-form">
				<div className="register-form-field">
					<label htmlFor="username" className="register-label">
						Username
					</label>
					<input
						type="text"
						placeholder="Enter a username"
						className="register-input"
						name="username"
						id="username"
						value={formData.username}
						onChange={updateFormData}
					/>
				</div>
				<div className="register-form-field">
					<label htmlFor="email" className="register-label">
						Email
					</label>
					<input
						type="email"
						placeholder="Enter your email"
						className="register-input"
						name="email"
						id="email"
						value={formData.email}
						onChange={updateFormData}
						required
					/>
				</div>
				<div className="register-form-field">
					<label htmlFor="password" className="register-label">
						Password
					</label>
					<input
						type="password"
						placeholder="Enter a password"
						className="register-input"
						name="password"
						id="password"
						value={formData.password}
						onChange={updateFormData}
						required
					/>
				</div>
				<div className="register-form-field-checkbox">
					<input
						type="checkbox"
						required
						className="register-input-checkbox"
						name="terms"
						id="terms"
						checked={formData.terms}
						onChange={updateFormData}
					/>
					<label htmlFor="terms" className="register-checkbox-text">
						I agree to terms of service
					</label>
				</div>

				<p>
					Already have an account? <Link to={'/login'}>Sign in</Link>
				</p>

				<div className="register-btn-container">
					<button type="submit" className="register-btn">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
