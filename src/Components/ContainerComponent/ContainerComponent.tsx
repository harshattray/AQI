import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1em;
  @media (max-width: 480px) {
    padding: 1em 0.5em;
  }
`;

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
