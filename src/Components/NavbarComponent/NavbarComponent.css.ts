/**
 * @file NavbarComponent.css.ts
 * Styled components for the NavbarComponent.
 * The component is used in the App component.
 */

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const GraphContainer = styled.div`
  width: 30%;
  height: 400px;
  margin: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Navbar = styled.nav`
  background-color: #3f51b5;
  color: #fff;
  width: 100%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavbarBrand = styled.div`
  font-size: 1.5rem;
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const Select = styled.div`
  background-color: #fff;
  color: #3f51b5;
  padding: 1rem;
  border: 1px solid #3f51b5;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const DropdownOption = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  width: 100%;
  z-index: 2;
  border: 1px solid #3f51b5;
  border-radius: 5px;
`;

export const DropdownList = styled(DropdownOption)`
  display: block;
`;

export const DropdownListOption = styled.div`
  color: #3f51b5;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #3f51b5;
    color: #fff;
  }
`;
