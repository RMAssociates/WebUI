import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mt-2 mt-md-4" data-ride="carousel">
      {/* <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol> */}

      <div className="carousel-inner">
        <div className="carousel-item active ">
          <div className="row">
            <div className="col-md-4">
              <p className="p-size4">Dental solutions for everyday life.</p>
            </div>
            <div className="col-md-8">
              <img className="d-block" src="assets/carousel2.jpg" alt="First slide" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="bg-header col-md-4 d-none d-md-block">
              <p className="display-5 px-3">Family dental care provider in east york.</p>
              <div className="btn btn-block btn-dark mx-3">Book Appointment</div>
            </div>
            <div className="col-md-8 bg-header">
              <img className="d-block float-right" src="assets/carousel3.jpg" alt="Reception" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="bg-header col-md-4 d-none d-md-block">
              <p className="display-5 px-3">Come and visit us and we can discuss your dental health.</p>
              <div className="btn btn-block btn-dark mx-3">Book Appointment</div>
            </div>
            <div className="col-md-8 bg-header">
              <img className="d-block float-right" src="assets/reception.jpg" alt="Reception" />
            </div>
          </div>
        </div>

      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>

  );
}
