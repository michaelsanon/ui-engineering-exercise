import React from "react";
import styled from "styled-components";

import { getColor } from "./_starter/theme/theme";
import { PersonPanel } from "./_starter/scenes/PersonPanel/PersonPanel";

const AppWrapper = styled.div`
  height: 100%;
  background-color: ${getColor('blueGreyLightest')};
`;

export const App = () => {
  return (
    <AppWrapper>
      <PersonPanel />
    </AppWrapper>
  )
};
