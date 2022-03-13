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
			<Swiper {...swiper} lazy="true">
				{proyectos.map(({ img, key, code, demo }) => (
					<SwiperSlide
						key={key}
						className="container-swiper-img"
					>
						<img
							className="swiper-img"
							src={img}
							alt={key}
						/>
						<div className="view-links">
							<a
								href={code}
								target="__blank"
								className="link"
							>
								code
							</a>
							<a
								href={demo}
								target="__blank"
								className="link"
							>
								demo
							</a>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Projects;
