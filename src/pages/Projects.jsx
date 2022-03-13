import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import proyectos from '../types/proyectos';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: true,
	modules: [Navigation],
	className: 'mySwiper'
};

const Projects = () => {
	return (
		<section className="swiper-container animate__animated animate__fadeInLeft">
			<h2 className="title">My Projects</h2>
			<Swiper {...swiper} lazy>
				{proyectos.map(({ img, key }) => (
					<SwiperSlide
						key={key}
						className="container-swiper-img"
						style={{ backgroundImage: `url(${img})` }}
					></SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Projects;
