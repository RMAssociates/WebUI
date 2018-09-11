import mockPlaces from '../../../server/API.Cloud/yelp.json';

class YelpAPI {
  static getReviews() {
    return Promise.resolve(mockPlaces);
    // return fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJmbJj79zM1IkRSEqKfdE_WsA&key=')
    //   .then((response) => { console.log(response); return response; })
    //   .catch(error => error.json());
  }
}