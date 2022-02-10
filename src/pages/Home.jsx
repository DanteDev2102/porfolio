import React from 'react';
import Typed from 'react-typed';

const description = [
	'Web Developer',
	'Game Developer',
	'Security Analist'
];

const Home = () => {
	return (
		<section className="container">
			<p className="container-text">
				<span className="text title">
					My name is <br /> Jose Acosta
				</span>
				<br />
				<span className="text description">
					I´m{' '}
					<Typed
						className="text typed"
						strings={description}
						typeSpeed={70}
						backSpeed={50}
						loop
					/>
				</span>
				<br />
				<div className="link contain">
					<a
						className="link"
						href="https://google.com"
						target="__blank"
					>
						Download my cv
					</a>
				</div>
			</p>
		</section>
	);
};

export default Home;
