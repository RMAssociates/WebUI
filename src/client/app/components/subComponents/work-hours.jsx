import React from 'react';

export const WorkHours = () => (
	<div className="card">
		<div className="card-header">
           Working Hours
		</div>
		<div className="card-body">
			<h5 className="card-title">Our work timings</h5>

			<dl className="row">
				<dt className="col-4">Monday</dt>
				<dd className="col-8">Closed</dd>

				<dt className="col-4">Tuesday</dt>
				<dd className="col-8">11:00 AM - 7:00 PM</dd>

				<dt className="col-4">Wednesday</dt>
				<dd className="col-8">11:00 AM - 7:00 PM</dd>

				<dt className="col-4">Thursday</dt>
				<dd className="col-8">11:00 AM - 7:00 PM</dd>

                
				<dt className="col-4">Friday</dt>
				<dd className="col-8">11:00 AM - 7:00 PM</dd>

                
				<dt className="col-4">Saturday</dt>
				<dd className="col-8">8:00 AM - 6:00 PM</dd>

				<dt className="col-4">Sunday</dt>
				<dd className="col-8">Closed</dd>

			</dl>
		</div>
	</div>
);
