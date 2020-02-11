import React from 'react';

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <p className="text-muted text-center">Leaside Village Dental</p><hr />
          <a
            className="text-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/aFuRBMWRJzQ2"
          ># 203 ,  85 Laird Dr, East York, ON M4G 3T8
          </a>
          <div className="d-inline">
            <i className="fab fa-twitter" />
          </div>
        </div>
        <div>
          <p className="text-muted">© 2020 Leaside Village Dental. All rights reserved. </p>
        </div>

      </div>
    </footer>
  );
}
