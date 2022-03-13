/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__navbar-list">
				<li className="navbar__list-item">
					<Link className="navbar__link" to="/">
						/Home
					</Link>
				</li>
				<li className="navbar__list-item">
					<Link className="navbar__link" to="/about">
						/About me
					</Link>
				</li>
				<li className="navbar__list-item">
					<Link className="navbar__link" to="/projects">
						/Projects
					</Link>
				</li>
				<li className="navbar__list-item">
					<Link className="navbar__link" to="/contact">
						/Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
