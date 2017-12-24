import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


export default function NavigationBar(props) {
	return (

		<nav className="navbar navbar-expand-lg navbar-dark bg-success">
			<a className="navbar-brand" href="#"><img className="img-fluid" src="public/assets/logo_white_b.jpg" alt="First slide" /></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/services">Services</Link>							
					</li>
					<li className="nav-item">							
						<Link className="nav-link" to="/">About</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Gallery</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Meet Us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Promotions</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Contact</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
				<hr/>

			</div>
			
		</nav>
	);
}