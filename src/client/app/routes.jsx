import React from 'react';
import { Route } from 'react-router-dom';

import { ServiceContainer } from './components/highOrderComponents/servicesContainer';
import { AboutUs } from './components/subComponents/about-us';
import DoctorsContainer from './components/highOrderComponents/doctorsContainer';
import PhotoGallery from './components/subComponents/photo-gallery';
import { Accordion } from './components/subComponents/accordion';
import AddressPage from './components/address/addressPage';
import SideContainer from './components/highOrderComponents/sideContainer';

const Routes = () => (
  <div className="row mt-1">
    <div className="col-md-8">
      <Route path="/services" component={ServiceContainer} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/meet-us" component={DoctorsContainer} />
      <Route exact path="/gallery" component={PhotoGallery} />
      <Route exact path="/address" component={AddressPage} />
      <Route exact path="/appointment" component={AddressPage} />
    </div>
    <div className="col-md-4 mt-md-5">
      {/* <Accordion /> */}
      <SideContainer />
    </div>
  </div>
);

export default Routes;
