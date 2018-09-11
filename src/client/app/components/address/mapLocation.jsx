import React from 'react';

export default () => (
  <div className="mt-3">
    <h5 className="text-center"> Conveniently located in the Longos plaza on Laird Drive, South of Eglinton with ample parking.</h5>
    <div className="text-center"><a>85 Laird Dr Suite 203, East York, ON M4G 3T7, Canada</a></div>
    <div className="text-center"><button className="btn btn-outline btn-success m-3">Write Review</button></div>
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
);

