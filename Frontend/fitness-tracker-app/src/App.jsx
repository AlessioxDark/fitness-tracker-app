import { useEffect, useState } from 'react';
import Homepage from './components/homepage';
import NavBar from './components/NavBar';
function App() {
	return (
		<div>
			<NavBar></NavBar>
			<Homepage></Homepage>
		</div>
	);
}

export default App;
