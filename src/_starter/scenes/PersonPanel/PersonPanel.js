import React from "react";
import styled from 'styled-components';

import { PersonPanelHeader } from "./PersonPanelHeader";
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

const PersonName = styled.span`
  font-weight: 300;
  color: ${getColor('greyDark')};
  font-size: 24px;
  line-height: 24px;
  margin-top: 20px;
`;

const PersonTitle = styled.span`
  font-weight: 400;
  color: ${getColor('greyDark')};
  font-size: 14px;
  line-height: 17px;
  margin-top: 6px;
`;

const FacebookLink = styled.a`
  font-weight: 600;
  color: #337AB7;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  text-decoration: none;
`;

export const PersonPanel = () => {
  return (
    <PersonPanelContainer>
      <PersonPanelHeader />
      <PersonName>Gary Gilmore</PersonName>
      <PersonTitle>Marketing Manager</PersonTitle>
      <FacebookLink href="#">Facebook</FacebookLink>
    </PersonPanelContainer>
  )
};
