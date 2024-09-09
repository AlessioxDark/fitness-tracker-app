import React from 'react';
import RegisterForm from './registerComponent/RegisterForm';
export default function Register() {
	return (
		<div className="register">
			<h1 className="register-title">
				Register Yourself before accessing our Features
			</h1>
			<RegisterForm />
		</div>
	);
}
