import React from "react";
import styled from 'styled-components';

import { ActivityPageActions } from './ActivityPageActions';
import { getColor } from "../../../theme/theme";

const ActivityPageWrapper = styled.div`
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
