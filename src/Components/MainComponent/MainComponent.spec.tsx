import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDataFetching } from "../../hooks/useDataFetching/useDataFetching";
import { useDropdown } from "../../hooks/useDropdown/useDropdown";
import MainComponent from "./MainComponent";

jest.mock("../hooks/useDataFetching/useDataFetching");
jest.mock("../hooks/useDropdown/useDropdown");

describe("MainComponent", () => {
  beforeEach(() => {
    // Mock the values returned by the hooks
    (useDataFetching as jest.Mock).mockReturnValue([
      [
        {
          city: "Berlin",
          value: 1.5,
          unit: "µg/m³",
          date: { local: "2022-02-22T08:00:00.000Z" },
          parameter: "pm25",
          location: "Station A",
        },
        {
          city: "Berlin",
          value: 2.5,
          unit: "µg/m³",
          date: { local: "2022-02-22T09:00:00.000Z" },
          parameter: "pm25",
          location: "Station A",
        },
        {
          city: "Berlin",
          value: 3.5,
          unit: "µg/m³",
          date: { local: "2022-02-22T10:00:00.000Z" },
          parameter: "pm25",
          location: "Station A",
        },
      ],
      ["Berlin"],
      ["pm25"],
    ]);

    (useDropdown as jest.Mock).mockReturnValue([
      "Berlin",
      jest.fn(),
      false,
      jest.fn(),
    ]);
  });

  test("renders the navbar component", () => {
    render(<MainComponent />);
    expect(screen.getByText(/Air Quality Monitoring/)).toBeInTheDocument();
  });

  test("renders a message to select a city", () => {
    (useDropdown as jest.Mock).mockReturnValue([
      "All Cities",
      jest.fn(),
      false,
      jest.fn(),
    ]);

    render(<MainComponent />);
    expect(
      screen.getByText(/Please Select a City from the Dropdown/)
    ).toBeInTheDocument();
  });

  test("renders a message when no data is available", () => {
    (useDataFetching as jest.Mock).mockReturnValue([[], [], []]);

    render(<MainComponent />);
    expect(
      screen.getByText(/Please Select a City from the Dropdown/)
    ).toBeInTheDocument();
  });

  test("renders a dropdown with cities", () => {
    render(<MainComponent />);
    const dropdownButton = screen.getByRole("button");
    userEvent.click(dropdownButton);
    const cityOptions = screen.getAllByRole("option");
    expect(cityOptions.length).toBe(2);
    expect(cityOptions[0]).toHaveTextContent("All Cities");
    expect(cityOptions[1]).toHaveTextContent("Berlin");
  });

  test("renders a graph when a city is selected", () => {
    render(<MainComponent />);
    const dropdownButton = screen.getByRole("button");
    userEvent.click(dropdownButton);
    const cityOption = screen.getByText("Berlin");
    userEvent.click(cityOption);
    expect(screen.getByText(/pm25/)).toBeInTheDocument();
  });
});
