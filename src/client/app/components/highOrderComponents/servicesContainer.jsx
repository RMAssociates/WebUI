import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import cosmetic from '../services/cosmetic';
import bridges from '../services/bridges';
import crowns from '../services/crowns';
import implants from '../services/implants';
import dentures from '../services/dentures';
import rootCanal from '../services/root-canal';
import familyDentistry from '../services/family-dentistry';
import generalDentistry from '../services/general-dentistry';

export const ServiceContainer = ({ match }) => (
  <div>
    <Route exact path={`${match.url}/cosmetic`} component={cosmetic} />
    <Route exact path={`${match.url}/bridges`} component={bridges} />
    <Route exact path={`${match.url}/crowns`} component={crowns} />
    <Route exact path={`${match.url}/implants`} component={implants} />
    <Route exact path={`${match.url}/dentures`} component={dentures} />
    <Route exact path={`${match.url}/root-canal`} component={rootCanal} />
    <Route exact path={`${match.url}/family-dentistry`} component={familyDentistry} />
    <Route exact path={`${match.url}/general-dentistry`} component={generalDentistry} />
    {/*
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div> */}
  </div>

);

export default ServiceContainer;
