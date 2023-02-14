import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavbarComponent from "./NavbarComponent";

test("renders brand name", () => {
  render(<NavbarComponent cities={[]} selectedCity="" setSelectedCity={() => {}} />);
  const brandElement = screen.getByText("Air Quality Monitoring");
  expect(brandElement).toBeInTheDocument();
});

test("displays selected city", () => {
  render(<NavbarComponent cities={["Berlin", "Hamburg", "Munich"]} selectedCity="Berlin" setSelectedCity={() => {}} />);
  const selectedCityElement = screen.getByText("Berlin");
  expect(selectedCityElement).toBeInTheDocument();
});

test("opens dropdown when clicked", () => {
  const setSelectedCity = jest.fn();
  render(<NavbarComponent cities={["Berlin", "Hamburg", "Munich"]} selectedCity="Berlin" setSelectedCity={setSelectedCity} />);
  const dropdownElement = screen.getByRole("button");
  fireEvent.click(dropdownElement);
  const dropdownListElement = screen.getByRole("list");
  expect(dropdownListElement).toBeInTheDocument();
});

test("calls setSelectedCity when a city is selected", () => {
  const setSelectedCity = jest.fn();
  render(<NavbarComponent cities={["Berlin", "Hamburg", "Munich"]} selectedCity="Berlin" setSelectedCity={setSelectedCity} />);
  const cityOptionElement = screen.getByText("Hamburg");
  fireEvent.click(cityOptionElement);
  expect(setSelectedCity).toHaveBeenCalledWith("Hamburg");
});
