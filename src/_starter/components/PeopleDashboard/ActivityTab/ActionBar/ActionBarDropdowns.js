import React from "react";
import styled from 'styled-components';

import { ActionBarDropdown } from './ActionBarDropdown';
import { getColor } from "../../../../theme/theme";

const ActionBarDropdownsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const DropdownSeparator = styled.div`
  background-color: ${getColor('greyLightest')};
  height: 28px;
  width: 1px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ActionBarDropdowns = () => (
  <ActionBarDropdownsWrapper>
    <ActionBarDropdown type="Person" />
    <DropdownSeparator />
    <ActionBarDropdown type="Activity" />
  </ActionBarDropdownsWrapper>
);
