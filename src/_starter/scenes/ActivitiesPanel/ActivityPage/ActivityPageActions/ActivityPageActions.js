import React from "react";
import styled from 'styled-components';

import { ActivityPageActionsDropdowns } from './ActivityPageActionsDropdowns';
import { ActivityPageActionsButtons } from './ActivityPageActionsButtons';

const ActivityPageActionsWrapper = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActivityPageActions = () => {
  return (
    <ActivityPageActionsWrapper>
      <ActivityPageActionsDropdowns />
      <ActivityPageActionsButtons />
    </ActivityPageActionsWrapper>
  )
};
