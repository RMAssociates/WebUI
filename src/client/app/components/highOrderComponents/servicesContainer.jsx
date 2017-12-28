import React from 'react';
import {
	Route,
	Link
} from 'react-router-dom';

export const ServiceContainer = ({ match }) => (
	<div className="dropdown show">
		<a className="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
		</a>

		<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
			<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			<a className="dropdown-item" href="#">Another action</a>
			<a className="dropdown-item" href="#">Something else here</a>
		</div>
	</div>
	
);
