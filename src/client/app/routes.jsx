import React from 'react';
import { Route } from 'react-router-dom';

import { ServiceContainer } from './components/highOrderComponents/servicesContainer';
import { AboutUs } from './components/subComponents/about-us';
import { MeetOurDoctor } from './components/subComponents/meet-our-doctor';
import PhotoGallery from './components/subComponents/photo-gallery';
import { Accordion } from './components/subComponents/accordion';
import AddressPage from './components/address/addressPage';

const Routes = () => (
  <div className="row">
    <div className="col-md-9">
      <Route path="/services" component={ServiceContainer} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/meet-us" component={MeetOurDoctor} />
      <Route exact path="/gallery" component={PhotoGallery} />
      <Route exact path="/address" component={AddressPage} />
    </div>
    <div className="col-md-3">
      <Accordion />
    </div>
  </div>
);

export default Routes;
