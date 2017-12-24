import React from 'react';
import Carousel from '../subComponents/carousel.jsx';
import HomeServices from '../subComponents/homeServices.jsx';
import Introduction from './introduction.jsx';

export const HomeContainer = () => (
	<div>
		<Carousel />
		<HomeServices />
		<Introduction />
	</div>
);
