import React from "react";
import { Link } from "react-router-dom";

const Cards = ({
  links,
  mission_name,
  rocket,
  launch_success,
  flight_number,
}) => {
  return (
    <Link
      to={`/launches/${flight_number}`}
      data-testid="launch-cards"
      className="card col-lg-2 col-md-3 col-11"
    >
      <style jsx="true">
        {`
          .card {
            padding: 0;
            position: relative;
          }
          a {
            text-decoration: none !important;
            color: #212529 !important;
          }
          .badge {
            position: absolute;
            top: 10px;
            right: 10px;
          }
        `}
      </style>
      <img
        src={links?.mission_patch_small}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">{mission_name}</h5>
        <p className="card-text">Rocket : {rocket?.rocket_name}</p>
        <button className="btn btn-dark">Learn More</button>
      </div>
      {launch_success ? (
        <div className="badge fs-6 bg-success">Success</div>
      ) : (
        <div className="badge fs-6 bg-danger">Failure</div>
      )}
    </Link>
  );
};

export default Cards;
