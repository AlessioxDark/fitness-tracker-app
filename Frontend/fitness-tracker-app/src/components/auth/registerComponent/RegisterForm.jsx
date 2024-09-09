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

	function submitData() {
		fetch('https://localhost:5000/api/auth/register', { method: 'POST' });
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
					/>
				</div>
				<div className="register-form-field-checkbox">
					<input
						type="checkbox"
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
