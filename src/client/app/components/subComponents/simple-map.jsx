import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// eslint-disable-next-line
class SimpleMap extends Component {


  render() {
    return (
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
    // Important! Always set the container height explicitly
    // <div style={{ height: '100vh', width: '100%' }}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: 'AIzaSyAuCDJMoWoR6DoVJBbu4BhCvkJWsvAmZ10' }}
    //     defaultCenter={{
    //       lat: 43.7056197, lng: -79.3633778,
    //     }}
    //     defaultZoom={11}
    //   />
    // </div>
    );
  }
}

SimpleMap.defaultProps = {
  center: {
    lat: 43.7056197, lng: -79.3633778,
  },
  zoom: 4,
};
export default SimpleMap;
