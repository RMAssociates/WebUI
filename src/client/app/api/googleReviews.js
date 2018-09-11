import mockPlaces from '../../../server/API.Cloud/places.json';

class GooglePlacesAPI {
  static getPlaces() {
    return Promise.resolve(mockPlaces);
    // return fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJmbJj79zM1IkRSEqKfdE_WsA&key=')
    //   .then((response) => { console.log(response); return response; })
    //   .catch(error => error.json());
  }
}
//7UGtCvOF5mkmbUaegjwDEA
// xzn9Em5M-FvVts7FA26gCqqHhIJ6D21_sXOxdQVRFSjUaRDPnbTLai907NtNf6wgVkHuJo93AeaCQ3qSf49VZ7iHMlb1m_5oq0P7A_2PaffPIht1qdnRAidIeEqXW3Yx
export default GooglePlacesAPI;

