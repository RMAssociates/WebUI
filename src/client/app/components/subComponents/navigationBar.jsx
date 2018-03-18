import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


export default function NavigationBar(props) {
	return (

		<nav className="navbar navbar-expand-lg navbar-dark bg-success row">
			<div>
				<a className="navbar-brand" href="#">
					<img className="float-left img-fluid-header" src="public/assets/logo_white_b.jpg" alt="Home" />
					<button className="navbar-toggler float-right menu-header p-2" type="button" 
						data-toggle="collapse" data-target="#navbarTogglerList" 
						aria-controls="navbarTogglerList" aria-expanded="false" aria-label="Toggle navigation">
						<span className="text-white">Menu</span>
					</button>
				</a>
			</div>

			<div className="collapse navbar-collapse" id="navbarTogglerList">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
						<Link className="nav-link" to="/"
						>Home <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item dropdown">						
						<div className="">
							<a className="nav-link dropdown-toggle" href="#"
								id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Services
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<Link className="dropdown-item" to={'services/rendering'}>Cosmetic Dentistry</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dental Bridges</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dental Crowns</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dental Implants</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dentures</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dental Crowns</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dental Crowns</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dental Crowns</Link>
								<Link className="dropdown-item" to={'services/rendering'}>Dental Crowns</Link>
							</div>
						</div>							
					</li>
					<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">							
						<Link className="nav-link"
							to="/about-us"
						>About Us</Link>
					</li>
					<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
						<Link className="nav-link" to="/gallery">Gallery</Link>
					</li>
					<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
						<Link className="nav-link" to="/meet-us">Meet Us</Link>						
					</li>
					<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
						<Link className="nav-link" to="/promotions">Promotions</Link>						
					</li>
					<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
						<Link className="nav-link" to="/contact">Contact</Link>						
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