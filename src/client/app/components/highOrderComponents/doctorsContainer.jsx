import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import drSohila from "../doctors/drSohila";
import drIrfan from "../doctors/drIrfan";

// eslint-disable-next-line
export default ({ match }) => {
  return (
    <div>
      <Helmet>
        <title>
          Meet our team @Leaside Village Dental East York , Laird drive
        </title>
        <meta
          name="description"
          content=" Dr Irfan Momin - completed his DDS from University of California San Francisco, school of dentistry in 2010 with an
          award for professional development. He has been practicing in the GTA.. | Dr. Methani has been treating patients for the last two decades both as a general dentist and a Prosthodontist
          providing treatment ranging from simple check ups to veneers to extensive full mouth rehabilitation"
        />
      </Helmet>
      <h1 className="my-3 display-4">Meet our team</h1>
      <Route path={`${match.url}/sohila`} component={drSohila} />
      <Route exact path={`${match.url}/irfan`} component={drIrfan} />

      {match.isExact && (
        <div>
          <div>
            <h2>Dr. Sohila Methani</h2>
            <img
              src="assets/sohila.png"
              className="rounded-circle float-left img-fluid img-h-200"
              alt="Dr. Irfan Momin"
            />
            <p>
              Dr. Methani has been treating patients for the last two decades
              both as a general dentist and a Prosthodontist providing treatment
              ranging from simple check ups to veneers to extensive full mouth
              rehabilitation and maxillofacial prosthodontics. Throughout her
              extensive experience, her aim has been to provide the most
              comfortable setting and the most gentle yet professional care
              possible, which led her to establishing Leaside Village Dental.
            </p>
            <NavLink
              className="btn btn-outline-success"
              to={`${match.url}/sohila`}
            >
              Read More
            </NavLink>
          </div>
          <div className="my-5">
            <h2>Dr. Irfan Momin</h2>
            <img
              src="assets/irfan-momin1.png"
              className="rounded-circle float-left img-fluid img-h-200"
              alt="Dr. Irfan Momin"
            />
            <p>
              Dr. Irfan Momin completed his DDS from University of California
              San Francisco, school of dentistry in 2010 with an award for
              professional development. He has been practicing in the GTA ever
              since. Prior to this, he had been practicing dentistry in India
              for almost a decade. Dr. Momin is passionate about dentistry and
              about providing the best possible care for his patients. When he
              is not working on his passion, he likes playing cricket, traveling
              and spending time with his family.
            </p>
            <NavLink
              className="btn btn-outline-success"
              to={`${match.url}/irfan`}
            >
              Read More
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
