import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Homepage from './components/homepage';
import NavBar from './components/NavBar';
function App() {
	return (
		<div>
			<NavBar></NavBar>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
