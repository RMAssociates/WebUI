import React from 'react';

export const WorkHours = () => (
	<div className="card">
		<div className="card-header">
           Working Hours
		</div>
		<div className="card-body">
			<h5 className="card-title">Our work timings</h5>

			<dl className="row">
				<dt className="col-sm-3">Monday</dt>
				<dd className="col-sm-9">Closed</dd>

				<dt className="col-sm-3">Tuesday</dt>
				<dd className="col-sm-9">11:00 AM - 7:00 PM</dd>

				<dt className="col-sm-3">Wednesday</dt>
				<dd className="col-sm-9">11:00 AM - 7:00 PM</dd>

				<dt className="col-sm-3">Thursday</dt>
				<dd className="col-sm-9">11:00 AM - 7:00 PM</dd>

                
				<dt className="col-sm-3">Friday</dt>
				<dd className="col-sm-9">11:00 AM - 7:00 PM</dd>

                
				<dt className="col-sm-3">Saturday</dt>
				<dd className="col-sm-9">9:00 AM - 6:00 PM</dd>

				<dt className="col-sm-3">Sunday</dt>
				<dd className="col-sm-9">Closed</dd>

			</dl>
		</div>
	</div>
);
