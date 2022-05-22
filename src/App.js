import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LaunchDetails from "./pages/LaunchDetails";
import RocketDetails from "./pages/RocketDetails";
import Rockets from "./pages/Rockets";
import axios from "axios";

function App() {
  let base = "https://api.spacexdata.com/v3/";
  let [result, setResult] = useState([]);
  let [limit, setLimit] = useState(10);
  let [offset, setOffset] = useState(0);
  // console.log(result);
  let [search, setSearch] = useState("");
  let api = `${base}launches?limit=${limit}&offset=${offset}`;

  let [rocketResult, setRocketResult] = useState([]);
  let rocketAPI = `${base}rockets?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    let fetchData = axios
      .get(api)
      .then((res) => setResult(res?.data))
      .catch((err) => console.log(err));

    let fetchRocketData = axios
      .get(rocketAPI)
      .then((res) => setRocketResult(res?.data))
      .catch((err) => console.log(err));
  }, [api, rocketAPI]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home setOffset={setOffset} result={result} />}
        />
        <Route
          path="/launches/:id"
          element={<LaunchDetails result={result} />}
        />
        <Route
          path="/rockets"
          element={<Rockets rocketResult={rocketResult} />}
        />
        <Route
          path="/rockets/:id"
          element={<RocketDetails rocketResult={rocketResult} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
