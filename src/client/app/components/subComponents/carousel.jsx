import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      {/* <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol> */}

      <div className="carousel-inner">
        <div className="carousel-item active ">
          <img className="d-block" src="public/assets/carousel2.jpg" alt="First slide" />
          <div className="">
            <p className="text-center py-3">Changing lives for the better, One smile at a time.</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img className="d-block" src="public/assets/carousel3.jpg" alt="Second slide" />
          <div className="">
            <p className="text-center py-3">Changing lives for the better, One smile at a time.</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img className="d-block" src="public/assets/carousel4.jpg" alt="Third slide" />
          <div className="">
            <p className="text-center py-3">Changing lives for the better, One smile at a time.</p>
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
