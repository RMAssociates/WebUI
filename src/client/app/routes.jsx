import React from 'react';
import { Route } from 'react-router-dom';

import { ServiceContainer } from './components/highOrderComponents/servicesContainer';
import { AboutUs } from './components/subComponents/about-us';
import { MeetOurDoctor } from './components/subComponents/meet-our-doctor';
import { PhotoGallery } from './components/subComponents/photo-gallery';
import { Accordion } from './components/subComponents/accordion';

const Routes = () => (
  <div className="row">
    <div className="col-md-9">
      <Route path="/services" component={ServiceContainer} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route path="/meet-us" component={MeetOurDoctor} />
      <Route exact path="/gallery" component={PhotoGallery} />
    </div>
    <div className="col-md-3">
      <Accordion />
    </div>
  </div>
);

export default Routes;
