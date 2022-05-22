import React from "react";
import RocketCard from "../components/RocketCard";

/**
 * ! Will carry Rocket informations
 */

const Rockets = ({ rocketResult }) => {
  console.log(rocketResult);
  return (
    <>
      <h1 className="text-center">Rockets Wiki</h1>
      <div className="container mt-5">
        <div className="row">
          {rocketResult?.map((x) => {
            return <RocketCard key={x?.id} {...x} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Rockets;
