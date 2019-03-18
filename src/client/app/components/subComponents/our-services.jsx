import React from 'react';

export default function OurServices(props) {
  return (
    <div className="">Services

    <div className="card-deck my-4">
      <div className="card">
        <img className="card-img-top" src="public/assets/invisalign.jpg" alt="Card" />
        <div className="">
          <button className="btn btn-success bottom">Invisalign</button>
        </div>
      </div>

      <div className="card ">
        <img className="card-img-top" src="public/assets/veeners.jpg" alt="Card" />
        <div className="">
          <button className="btn btn-success bottom">Veeners</button>
        </div>
      </div>

      <div className="card ">
        <img className="card-img-top" src="public/assets/implants.jpg" alt="Card" />
        <div className="">
          <button className="btn btn-success bottom">Implants</button>
        </div>
      </div>

    </div>
    </div>
  );
}
