import React from 'react';
import Carousel from '../subComponents/carousel.jsx';
import HomeServices from '../home/homeServices.jsx';
import Introduction from '../home/introduction.jsx';

export const HomeContainer = () => (
	<div className="row">
		<Carousel />
		<HomeServices />
		<Introduction />
	</div>
);
