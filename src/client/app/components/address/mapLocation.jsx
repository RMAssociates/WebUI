import React from 'react';
import { BusinessHours } from '../subComponents/business-hours';

export default () => (
  <div className="mt-3">

    <h5 className="text-center"> Conveniently located in the Longos plaza on Laird Drive, South of Eglinton with ample
     parking.
    </h5>
    <div className="text-center">85 Laird Dr Suite 203, East York, ON M4G 3T7, Canada</div>
    <div className="text-center">
      <button
        className="btn btn-outline btn-success m-3"
        onClick={() => window.open('https://www.google.com/search?q=leaside+village+dental&oq=leaside+village+dental&aqs=chrome..69i57j69i61j69i60j0j69i59.10698j1j7&sourceid=chrome&ie=UTF-8#lrd=0x89d4ccdcef63b299:0xc05a3fd17d8a4a48,3,,,')}
      >Write Review
      </button>
    </div>
    <div className="row">
      <div className="col-md-7">
        <div className="map-responsive mt-3">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=85%20Laird%20Dr%20Suite%20203%2C%20East%20York%2C%20ON%20M4G%203T7%2C%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Leaside Village Dental"
          />
        </div>
      </div>
      <div className="col-md-5">
        <BusinessHours />
      </div>
    </div>
  </div>
);

