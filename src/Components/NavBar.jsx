import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__navbar-list">
				<li className="navbar__list-item">
					<a className="navbar__link" href="#">
						/Home
					</a>
				</li>
				<li className="navbar__list-item">
					<a className="navbar__link" href="#">
						/About me
					</a>
				</li>
				<li className="navbar__list-item">
					<a className="navbar__link" href="#">
						/Projects
					</a>
				</li>
				<li className="navbar__list-item">
					<a className="navbar__link" href="#">
						/Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
