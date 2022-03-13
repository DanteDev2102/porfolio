import React from 'react';
import Typed from 'react-typed';
import cv from '../CV_José_Acosta.pdf';

const description = ['Web Developer', 'Game Developer', 'Pentester'];

const Home = () => {
	return (
		<section className="container">
			<p className="container-text">
				<span className="text title">
					My name is <br /> Jose Acosta
				</span>
				<br />
				<span className="text description">
					I'm{' '}
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
						href={cv}
						target="__blank"
						download="CV_José_Acosta"
					>
						Download my cv
					</a>
				</div>
			</p>
		</section>
	);
};

export default Home;
