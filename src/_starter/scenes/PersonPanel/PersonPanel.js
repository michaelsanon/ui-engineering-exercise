import React from "react";
import styled from 'styled-components';

import { getColor } from "../../theme/theme";

const PersonPanelContainer = styled.div`
  height: 166px;
  width: 300px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: ${getColor('white')};
  
  border: 1px solid ${getColor('greyLightest')};

  display: flex;
  flex-direction: column;
  Justify-content: flex-start;
  align-items: center;
`;

export const PersonPanel = () => {
  return (
    <PersonPanelContainer>
      Hello, I am the personPanelContainer
    </PersonPanelContainer>
  )
};
