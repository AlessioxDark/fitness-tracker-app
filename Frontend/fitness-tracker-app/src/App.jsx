import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Homepage from './components/homepage';
import NavBar from './components/NavBar';
import Workouts from './components/Workouts';
function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar></NavBar>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/workouts" element={<Workouts />} />
					<Route exact path="/nutrition" element={''} />
					<Route exact path="/support" element={''} />
					<Route exact path="/register" element={<Register />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
