import React from 'react';

const PhotoGallery = () => (
  <div>
    <h3>Gallery </h3>
    <div className="row">
      <div className="card col-md-6">
        <img
          className="img-fluid"
          data-src="holder.js/100px280/thumb"
          alt="100%x280"
          src="public/assets/reception.jpg"
          data-holder-rendered="true"
        />
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
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
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                 additional content. This content is a little bit longer.
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
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
               additional content.This content is a little bit longer.
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
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
               additional content.This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
);

export default PhotoGallery;
