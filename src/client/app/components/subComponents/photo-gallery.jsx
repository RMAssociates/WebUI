import React from 'react';

const PhotoGallery = () => (
  <div>
    <h1 className="my-3 display-4">Gallery </h1>
    <div className="row">
      <div className="card col-md-6">
        <img
          className="img-fluid"
          data-src="holder.js/100px280/thumb"
          alt="100%x280"
          src="public/assets/reception.jpg"
          data-holder-rendered="true"
        />
        <p className="card-text lead my-2">Reception Area
        </p>
      </div>
      <div className="card  col-md-6">
        <img
          className="img-fluid"
          data-src="holder.js/100px280/thumb"
          alt="100%x280"
          src="public/assets/chair1.jpg"
          data-holder-rendered="true"
        />
        <p className="card-text  lead my-2">Our comfortable treatment room with heat and massage chair and tv for your entertainment.
        </p>
      </div>
      <div className="card  col-md-6">
        <img
          className="img-fluid"
          data-src="holder.js/100px280/thumb"
          alt="100%x280"
          src="public/assets/chair2.jpg"
          data-holder-rendered="true"
        />
        <p className="card-text  lead my-2">Comfortable treatment areas.
        </p>
      </div>

      <div className="card  col-md-6">
        <img
          className="img-fluid"
          data-src="holder.js/100px280/thumb"
          alt="100%x280"
          src="public/assets/sterilize.jpg"
          data-holder-rendered="true"
        />
        <p className="card-text  lead my-2">Sterilization Center.
        </p>
      </div>
    </div>
  </div>
);

export default PhotoGallery;
