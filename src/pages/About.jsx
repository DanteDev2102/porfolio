import React from 'react';

const About = () => {
	return (
		<section className="about animate__animated animate__fadeInLeft">
			<div className="img-container">
				<img
					className="profile"
					src="/assets/mypicture.jpg"
					alt="Jose-Acosta"
					loading="lazy"
				/>
			</div>
			<p className="info">
				Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Incidunt illo velit expedita accusantium
				eligendi doloribus omnis! Itaque aliquid accusantium,
				fugit eos repudiandae beatae, debitis eaque et iste,
				excepturi necessitatibus officiis. Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Repudiandae a
				sint nostrum possimus dolor, cupiditate quas excepturi
				corporis odio deserunt et similique quo non sit.
				Obcaecati aspernatur amet laudantium accusantium.
			</p>
		</section>
	);
};

export default About;
