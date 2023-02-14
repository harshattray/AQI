/**
 *  useDropdown hook
 *  A custom hook to handle the dropdown state.
 * The hook returns the selected city, a function to update the selected city,
 * the dropdown state and a function to update the dropdown state.
 * The hook is used in the App component.
 * @file useDropdown.ts
 */

import { useState } from "react";

export const useDropdown = (): [string, (city: string) => void, boolean, (open: boolean) => void] => {
    const [selectedCity, setSelectedCity] = useState("All Cities");
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const handleSelectCity = (city: string) => {
      setSelectedCity(city);
      setDropdownOpen(false);
    };
  
    return [selectedCity, handleSelectCity, dropdownOpen, setDropdownOpen];
  };