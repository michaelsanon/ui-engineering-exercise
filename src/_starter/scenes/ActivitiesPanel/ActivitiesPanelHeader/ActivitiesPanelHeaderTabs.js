import React from "react";
import styled from 'styled-components';

import { ActivitiesPanelHeaderTab } from './ActivitiesPanelHeaderTab';

const ActivitiesPanelHeaderTabsWrapper = styled.div`
  height: 48px;
  margin-left: 17px;
  display: flex;
`;

export const ActivitiesPanelHeaderTabs = () => {
  return (
    <ActivitiesPanelHeaderTabsWrapper>
      <ActivitiesPanelHeaderTab tabTitle="Activity" />
      <ActivitiesPanelHeaderTab tabTitle="Tracking" />
      <ActivitiesPanelHeaderTab tabTitle="Reminders" />
    </ActivitiesPanelHeaderTabsWrapper>
  )
};
