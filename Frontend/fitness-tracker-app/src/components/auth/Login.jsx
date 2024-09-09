import React from 'react';
import LoginForm from './LoginComponent/LoginForm';
export default function Login() {
	return (
		<div className="login">
			<h1 className="login-title">
				Login Yourself before accessing our Features
			</h1>
			<LoginForm />
		</div>
	);
}
