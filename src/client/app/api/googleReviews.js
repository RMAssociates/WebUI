
class GooglePlacesAPI {
  static getPlaces() {
    return fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJmbJj79zM1IkRSEqKfdE_WsA&key=AIzaSyAuCDJMoWoR6DoVJBbu4BhCvkJWsvAmZ10')
      .then((response) => { console.log(response); return response; })
      .catch(error => error.json());
  }
}


export default GooglePlacesAPI;

