import React from 'react';
import NavigationBar from './subComponents/navigationBar.jsx';

export default function Header(props) {
	return (
		<div className="">
			<div className="row d-none d-md-flex">
				{/* NOt Sure that we need this header */}
				<div className="col-sm-3">
					{/* <img className="img-fluid" src="public/assets/logo_white_b.jpg" alt="First slide" /> */}
				</div>
				<div className="col-sm-6"><p></p></div>
				<div className="col-sm-3">
					<p className="text-primary float-right font-weight-bold align-bottom">
						<i className="fa fa-phone-square" aria-hidden="true"></i>
					647-560-2430 </p>
					<button className="btn btn-success float-right mb-0">Emergency Appointment</button>
				</div>
			</div>
			
			<div className="row d-md-none bg-header justify-content-center align-items-center text-white ">				
				<a href="tel:647-560-2430" className="text-white">
					<i className="fa fa-inverse fa-phone-square fa-1_5x pl-4 my-2" aria-hidden="true"></i> 
					&nbsp;647-560-2430 </a>
				<a href="email:info@myleasidedentist.com" className="text-white">
					<i className="fa fa-inverse fa-envelope-square fa-1_5x pl-4 my-2" aria-hidden="true"></i> 
					&nbsp;info@myleasidedentist.com </a>
											 
			</div>
			<NavigationBar />
		</div>
	);
}