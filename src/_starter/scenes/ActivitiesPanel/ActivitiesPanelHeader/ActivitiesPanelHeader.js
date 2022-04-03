import React from "react";
import styled from 'styled-components';

import { ActivitiesPanelHeaderTabs } from "./ActivitiesPanelHeaderTabs";
import { getColor } from "../../../theme/theme";

const ActivitiesPanelHeaderWrapper = styled.div`
  height: 48px;
  width: 100%;
  border-bottom: 1px solid ${getColor('greyLightest')};
`;

export const ActivitiesPanelHeader = () => {
  return (
    <ActivitiesPanelHeaderWrapper>
      <ActivitiesPanelHeaderTabs />
    </ActivitiesPanelHeaderWrapper>
  )
};
