import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import Header from './Components/Header';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
