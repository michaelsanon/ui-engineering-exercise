import React from "react";
import styled from 'styled-components';

import { ActivityPageActionsDropdown } from './ActivityPageActionsDropdown';
import { getColor } from "../../../theme/theme";

const ActivityPageActionsDropdownsWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
`;

const DropdownSeparator = styled.div`
  background-color: ${getColor('greyLightest')};
  height: 28px;
  width: 1px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ActivityPageActionsDropdowns = () => {
  return (
    <ActivityPageActionsDropdownsWrapper>
      <ActivityPageActionsDropdown type="Person" />
      <DropdownSeparator />
      <ActivityPageActionsDropdown type="Activity" />
    </ActivityPageActionsDropdownsWrapper>
  )
};