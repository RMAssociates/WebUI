import React from 'react';
import { Route } from 'react-router-dom';

import { ServiceContainer } from './components/highOrderComponents/servicesContainer.jsx';

import { AboutUs } from './components/subComponents/about-us.jsx';
import { MeetOurDoctor } from './components/subComponents/meet-our-doctor.jsx';
import { PhotoGallery } from './components/subComponents/photo-gallery.jsx';

export const Routes = () => (
	<div>
		<Route path="/services" component={ServiceContainer} />

		<Route exact path="/about-us" component={AboutUs} />
		<Route path="/meet-us" component={MeetOurDoctor} />
		<Route exact path="/gallery" component={PhotoGallery} />


	</div>
);
