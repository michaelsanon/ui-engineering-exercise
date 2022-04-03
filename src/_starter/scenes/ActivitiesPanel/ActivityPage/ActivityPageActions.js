import React from "react";
import styled from 'styled-components';

import { ActivityPageActionsDropdowns } from './ActivityPageActionsDropdowns';
import { getColor } from "../../../theme/theme";

const ActivityPageActionsWrapper = styled.div`
  height: 32px;
  width: 100%;

  margin-top: 16px;
  padding-left: 21px;

  display: flex;
  flex-direction: row;
  align-items: space-between;
`;

export const ActivityPageActions = () => {
  return (
    <ActivityPageActionsWrapper>
      <ActivityPageActionsDropdowns />
    </ActivityPageActionsWrapper>
  )
};
