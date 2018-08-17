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
import orthodontics from '../services/orthodontics';
import oralSurgery from '../services/oral-surgery';
import pediatricDentistry from '../services/pediatric';
import periodontics from '../services/periodontics';
import sedationDentistry from '../services/sedation-dentistry';
import teethWhitening from '../services/teeth-whitening';
import invisalignBraces from '../services/invisalign-braces';

export const ServiceContainer = ({ match }) => (
  <div className="m-4">
    <Route exact path={`${match.url}/cosmetic`} component={cosmetic} />
    <Route exact path={`${match.url}/bridges`} component={bridges} />
    <Route exact path={`${match.url}/crowns`} component={crowns} />
    <Route exact path={`${match.url}/implants`} component={implants} />
    <Route exact path={`${match.url}/dentures`} component={dentures} />
    <Route exact path={`${match.url}/root-canal`} component={rootCanal} />
    <Route exact path={`${match.url}/family-dentistry`} component={familyDentistry} />
    <Route exact path={`${match.url}/general-dentistry`} component={generalDentistry} />
    <Route exact path={`${match.url}/orthodontics`} component={orthodontics} />
    <Route exact path={`${match.url}/oral-surgery`} component={oralSurgery} />
    <Route exact path={`${match.url}/pediatric`} component={pediatricDentistry} />
    <Route exact path={`${match.url}/periodontics`} component={periodontics} />
    <Route exact path={`${match.url}/sedation-dentistry`} component={sedationDentistry} />
    <Route exact path={`${match.url}/teeth-whitening`} component={teethWhitening} />
    <Route exact path={`${match.url}/invisalign-braces`} component={invisalignBraces} />
    {/*
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div> */}
  </div>

);

export default ServiceContainer;
