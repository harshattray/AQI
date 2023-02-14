/**
 * @file MainComponent.tsx 
 * Main component for the app.
 * Renders the navbar and container components.
 * Renders the parameter graph component for each parameter.
 * Uses the useDataFetching hook to fetch the data.
 * Uses the useDropdown hook to handle the dropdown.
 *  
 * The data is passed in as a prop and is filtered by city and parameter.
 * The city and parameter are passed in as props to the parameter graph component.  
 */

import React from "react";
import Navbar from "../NavbarComponent/NavbarComponent";
import Container from "../ContainerComponent/ContainerComponent";
import ParameterGraph from "../ParameterGraphComponent/ParameterGraphComponent";
import {useDataFetching} from '../../hooks/useDataFetching/useDataFetching';
import {useDropdown} from '../../hooks/useDropdown/useDropdown';


const MainComponent: React.FC = () => {
  const [data, cities, parameters] = useDataFetching();
  const [selectedCity, handleSelectCity] = useDropdown();

  return (
    <>
      <Navbar
        selectedCity={selectedCity}
        cities={cities}
        setSelectedCity={handleSelectCity}
      />
      <Container>
        {selectedCity === "All Cities" ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ fontSize: "20px" }}>
              Please Select a City from the Dropdown
            </p>
          </div>
        ) : (
          parameters.map((parameter) => (
            <ParameterGraph
              key={parameter}
              data={data
                .filter((d) => d.city === selectedCity)
                .filter((d) => d.parameter === parameter)}
              parameter={parameter}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default MainComponent;
