import React from 'react';
import { WorkHours } from './work-hours';
// eslint-disable-next-line
export const Accordion = () => (


  <div id="accordion" role="tablist" aria-multiselectable="true">
    <div className="card">
      <div className="card-header" role="tab" id="headingOne">
        <h5 className="mb-0">
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
          Request an Appointment
          </a>
        </h5>
      </div>

      <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
        <div className="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
         3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
          laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
           coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
             occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
              heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" role="tab" id="headingTwo">
        <h5 className="mb-0">
          <a
            className="collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
         Working Hours
          </a>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
        <div className="card-block">
          <WorkHours />
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" role="tab" id="headingThree">
        <h5 className="mb-0">
          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Our location
          </a>
        </h5>
      </div>
      <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
        <div className="card-block">
        google maps
        </div>
      </div>
    </div>
  </div>
);
