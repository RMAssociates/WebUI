import React from 'react';
import { WorkHours } from './work-hours';
import SimpleMap from './simple-map';
// eslint-disable-next-line
export const Accordion = () => (


  <div id="accordion">
    <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
                Request an Appointment
          </button>
        </h5>
      </div>

      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
              Foem App
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Operational Hours
          </button>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <WorkHours />
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
                Our location
          </button>
        </h5>
      </div>
      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2371886373753!2d-79.36337778430813!3d43.70561965705706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ccdcef63b299%3A0xc05a3fd17d8a4a48!2sLeaside+Village+Dental!5e0!3m2!1sen!2sca!4v1522029176739"
            width="600"
            height="450"
            frameBorder="0"
            style="border:0"
            allowFullScreen
            title="my-location"
          /> */}
          <SimpleMap />
        </div>
      </div>
    </div>
  </div>
);
