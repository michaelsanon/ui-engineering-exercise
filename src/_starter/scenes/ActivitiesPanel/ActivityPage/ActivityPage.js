import React from "react";
import styled from 'styled-components';

import { ActivityPageActions } from './ActivityPageActions/ActivityPageActions';

const ActivityPageWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ActivityPage = () => {
  return (
    <ActivityPageWrapper>
      <ActivityPageActions />
    </ActivityPageWrapper>
  )
};
