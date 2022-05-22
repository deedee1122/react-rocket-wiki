import React from "react";
import { useParams } from "react-router-dom";

const RocketDetails = ({ rocketResult }) => {
  let params = useParams();
  let searchData = rocketResult?.find((x) => x?.id === +params.id);
  let {
    flickr_images,
    rocket_name,
    success_rate_pct,
    cost_per_launch,
    height,
    mass,
    engines,
  } = searchData || [];
  console.log(searchData);
  return (
    <div className="container">
      <div className="row">
        <img src={flickr_images} alt="" className="col-lg-4 col-12" />
        <div className="col-lg-8 col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Rocket :</th>
                <th scope="col">{rocket_name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Success %</th>
                <td>{success_rate_pct}</td>
              </tr>
              <tr>
                <th scope="row">Cost </th>
                <td>$ {cost_per_launch}</td>
              </tr>
              <tr>
                <th scope="row">Height</th>
                <td colSpan="2">{height?.meters} meters</td>
              </tr>
              <tr>
                <th scope="row">Mass</th>
                <td colSpan="2">{mass?.kg} kilograms</td>
              </tr>
              <tr>
                <th scope="row">Engine</th>
                <td colSpan="2">{engines?.type} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RocketDetails;
