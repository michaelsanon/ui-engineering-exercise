import React from "react";
import styled from 'styled-components';

import { getColor } from "../../theme/theme";

const ActivitiesPanelWrapper = styled.div`
  height: 700px;
  width: 667px;
  margin-top: 20px;
  margin-left: 20px;

  background-color: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};

`;

export const ActivitiesPanel = () => {
  return (
    <ActivitiesPanelWrapper>
      Hello, I am the Activities Panel
    </ActivitiesPanelWrapper>
  )
};
