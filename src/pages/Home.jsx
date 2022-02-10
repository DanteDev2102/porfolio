import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const description = ['Web Developer', 'Game Developer'];

const Home = () => {
	return (
		<section className="container">
			<p className="container-text">
				<span className="title">My name is Jose Acosta</span>
				<br />
				<span className="description">
					I´m{' '}
					<Typed
						strings={description}
						typeSpeed={70}
						backSpeed={50}
						loop
					/>
				</span>
				<br />
				<Link className="link" to="/contact">
					Download my cv
				</Link>
			</p>
		</section>
	);
};

export default Home;
