import React from 'react';
import NavigationBar from './subComponents/navigationBar.jsx';

export default function Header(props) {
	return (
		<div className="">
			<div className="row">
				<div className="col-sm-3">
					{/* <img className="img-fluid" src="public/assets/logo_white_b.jpg" alt="First slide" /> */}
				</div>
				<div className="col-sm-6"><p></p></div>
				<div className="col-sm-3">
					<p className="text-primary float-right font-weight-bold align-bottom">647-560-2430 </p>
					<button className="btn btn-success float-right mb-0">Emergency Appointment</button>
				</div>
			</div>
			<NavigationBar />
		</div>
	);
}