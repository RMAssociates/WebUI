import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import cosmetic from '../services/cosmetic';
import bridges from '../services/bridges';
import crowns from '../services/crowns';

export const ServiceContainer = ({ match }) => (
  <div>
    <Route exact path={`${match.url}/cosmetic`} component={cosmetic} />
    <Route exact path={`${match.url}/bridges`} component={bridges} />
    <Route exact path={`${match.url}/crowns`} component={crowns} />
    {/*
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div> */}
  </div>

);

export default ServiceContainer;
