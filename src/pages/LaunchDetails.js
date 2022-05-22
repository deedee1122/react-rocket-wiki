import React from "react";
import { useParams } from "react-router-dom";

const LaunchDetails = ({ result }) => {
  let params = useParams();
  let searchForMoreDetails = result.find(
    (x) => x?.flight_number === +params.id
  );
  console.log(searchForMoreDetails);
  let {
    links,
    details,
    flight_number,
    launch_date_local,
    launch_site,
    launch_success,
    launch_year,
    mission_name,
    rocket,
  } = searchForMoreDetails;
  return (
    <div className="container">
      <div className="row">
        <img
          src={`${links?.mission_patch_small}`}
          alt=""
          className="img-fluid col-lg-4 col-12"
        />
        <div className="col-lg-8 col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Mission </th>
                <th scope="col">{mission_name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Flight # </th>
                <th scope="col">{flight_number}</th>
              </tr>
              <tr>
                <th scope="row">Launch</th>
                <td>{launch_year}</td>
              </tr>
              <tr>
                <th scope="row">Outcome</th>
                <td>{launch_success ? "Success" : "failure"}</td>
              </tr>
              <tr>
                <th scope="row">Details </th>
                <td>{details}</td>
              </tr>
              <tr>
                <th scope="row">Rocket</th>
                <td>{rocket?.rocket_name}</td>
              </tr>
              <tr>
                <th scope="row">Launch Site</th>
                <td colSpan="2">{launch_site?.site_name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
