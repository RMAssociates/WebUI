import React from 'react';
import { NavLink } from 'react-router-dom';

export default function OurServices(props) {
  return (
    <div className="">Services
      <div className="card-deck my-4">
        <div className="card">
          <img className="card-img-top" src="assets/invisalign.jpg" alt="Card" />
          <div className="">
            <NavLink className="btn btn-success bottom" to="/services/invisalign-braces">Invisalign</NavLink>
          </div>
        </div>

        <div className="card ">
          <img className="card-img-top" src="assets/veeners.jpg" alt="Card" />
          <div className="">
            <NavLink className="btn btn-success bottom" to="/services/veeners">Veeners</NavLink>
          </div>
        </div>

        <div className="card ">
          <img className="card-img-top" src="assets/implants.jpg" alt="Card" />
          <div className="">
            <NavLink className="btn btn-success bottom" to="/services/implants">Implants</NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}
