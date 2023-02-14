/**
 * @file NavbarComponent.tsx
 * Navbar component for the app.
 * Renders the navbar and dropdown components.
 * Uses the useDropdown hook to handle the dropdown.
 * Uses the useDataFetching hook to fetch the data.
 * The data is passed in as a prop and is filtered by city.
 * The city is passed in as a prop to the dropdown component.
 * The selected city is passed in as a prop to the dropdown component.
 */

import React, { useState } from "react";
import {
  NavbarContainer,
  Navbar,
  NavbarBrand,
  Dropdown,
  Select,
  DropdownList,
  DropdownListOption,
} from "./NavbarComponent.css";


interface Props {
  cities: string[];
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const NavbarComponent: React.FC<Props> = ({
  cities,
  selectedCity,
  setSelectedCity,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>Air Quality Monitoring</NavbarBrand>
        <Dropdown>
          <Select onClick={toggleDropdown}>
            {selectedCity}
          </Select>
          {isDropdownOpen && (
            <DropdownList>
              <DropdownListOption
                onClick={(e) => {
                  setSelectedCity("All Cities");
                  toggleDropdown();
                }}
              >
                All Cities
              </DropdownListOption>
              {cities.map((city) => (
                <DropdownListOption
                  key={city}
                  onClick={(e) => {
                    setSelectedCity(city);
                    toggleDropdown();
                  }}
                  className="city-name"
                >
                  {city}
                </DropdownListOption>
              ))}
            </DropdownList>
          )}
        </Dropdown>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
