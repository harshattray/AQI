/**
 * @file ParameterGraphComponent.css.ts
 * Styled components for the ParameterGraphComponent.
 * The component is used in the App component.
 */

import styled from 'styled-components';

export const GraphContainer = styled.div`
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;
