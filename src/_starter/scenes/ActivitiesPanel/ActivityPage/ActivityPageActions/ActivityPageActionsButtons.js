import React from "react";
import styled from 'styled-components';

import { ActivityPageActionsButton } from './ActivityPageActionsButton';

const ActivityPageActionsButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ActivityPageActionsButtons = () => {
  return (
    <ActivityPageActionsButtonsWrapper>
      <ActivityPageActionsButton text="Log a Call" icon="phone" />
      <ActivityPageActionsButton text="Add a Note" icon="plus"/>
    </ActivityPageActionsButtonsWrapper>
  )
};