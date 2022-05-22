import React from "react";
import { Link } from "react-router-dom";

const RocketCard = ({ rocket_name, description, flickr_images, id }) => {
  return (
    <Link to={`/rockets/${id}`} className="card col-lg-3 col-md-6 col-12 ">
      <style jsx="true">{`
        a {
          text-decoration: none !important;
          color: black;
        }
      `}</style>
      <img src={flickr_images} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{rocket_name}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-dark">
          Learn More
        </a>
      </div>
    </Link>
  );
};

export default RocketCard;
