import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Cards from "./components/Cards";
import Dummy from "./components/Dummy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});

test("Just a sample on how to test react componnets using snapshot testing", () => {
  const component = renderer.create(<Dummy></Dummy>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Cards
        links=""
        mission_name=""
        rocket=""
        launch_success=""
        flight_number=""
      />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
