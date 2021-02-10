import React from 'react';
// eslint-disable-next-line
export const BusinessHours = () =>{
  const day = new Date().getDay();
  return (
    <div className="card h-100">
      <div className="card-header bg-card-head text-white text-center lead">
           Business Hours
      </div>
      
      <div className="p-1">
        <ul className="list-unstyled m-3 lh-175">
          <li>Monday <span className="pull-right text-danger">Closed</span></li>
          <li className={day === 2 ? 'date-today' : null}>Tuesday <span className="pull-right font-weight-bold">10:00 AM - 07:00 PM</span></li>
          <li className={day === 3 ? 'date-today' : null}>Wednesday <span className="pull-right font-weight-bold">10:00 AM - 07:00 PM</span></li>
          <li className={day === 4 ? 'date-today' : null}>Thursday <span className="pull-right font-weight-bold">10:00 AM - 07:00 PM</span></li>
          <li className={day === 5 ? 'date-today' : null}>Friday <span className="pull-right font-weight-bold">11:00 AM - 05:00 PM</span></li>
          <li className={day === 6 ? 'date-today' : null}>Saturday <span className="pull-right font-weight-bold">09:00 AM - 06:00 PM</span></li>
          <li>Sunday <span className="pull-right text-danger">Closed</span></li>
        </ul>
      </div>
    </div>
  );
};
