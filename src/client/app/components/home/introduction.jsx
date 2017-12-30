import React from 'react';
import { RequestAppointment } from '../subComponents/request-appointment.jsx';

export default function Introduction() {
	return (
		<div className="col-sm-12 pt-1">
			<h1 className="col-sm-12 text-success mb-1 d-none d-md-block">Welcome to Leaside Village Dental</h1>	
			<h3 className="col-sm-12 text-muted mb-2 d-none d-md-flex">Offering professional oral care solutions.
			Changing lives for the better, One smile at a time</h3>
			<p className="col-sm-12 bg-highlighter-green text-light py-1 lead">
					Our patients love us , Read what our patients have to say About us or come in and find out why
			</p>
			<p className="col-sm-12 pt-2">
				For the past several years we have provided dental services to your neighbours in Leaside and the surrounding areas.
				Led by Dr. Sohila Methani, who features close to 20 years of dental experience, our practice creates an
				environment of care and trust. Our wide range of services conveniently address your oral care needs.
			</p>
			<RequestAppointment />
			<ul>
			Why choose us?
				<li>Accepting new patients </li>
				<li>Comfortable, relaxing environment </li>
				<li>Ultimate treatment experience (heat and massage chair, TV, music, kids play area)</li>
				<li>Laughing gas (nitrous oxide sedation)</li>
				<li>Fully digital, environmentally friendly Office</li>
				<li>Same day emergency appointments</li>
				<li>Weekend and evening appointments</li>
				<li>Free parking</li>
			</ul>
			<p className="col-sm-12 pt-3">
				<strong>If you have any questions and concerns, reach out to our practice by calling <span className="text-primary"> 647-346-3368 </span> at your 
					earliest convenience.</strong></p>
		</div>
	);
}