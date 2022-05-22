import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

/**
 * ! Launches
 */

const Home = ({ setOffset, result }) => {
  return (
    <div className="container mt-4">
      <Pagination setOffset={setOffset} />
      <div className="row gap-3 justify-content-center">
        {result?.map((x) => {
          return <Cards key={x?.flight_number} {...x} />;
        })}
      </div>
    </div>
  );
};

export default Home;
