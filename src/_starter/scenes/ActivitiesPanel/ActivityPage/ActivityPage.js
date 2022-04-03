import React from "react";
import styled from 'styled-components';

import { ActivityPageActions } from './ActivityPageActions/ActivityPageActions';
import { ActivityPageActivities } from "./ActivityPageActivities/ActivitiesPageActivities";

const ActivityPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100%;
`;

export const ActivityPage = () => {
  return (
    <ActivityPageWrapper>
      <ActivityPageActions />
      <ActivityPageActivities activitiesType="upcoming"/>
      <ActivityPageActivities activitiesType="past"/>
    </ActivityPageWrapper>
  )
};
