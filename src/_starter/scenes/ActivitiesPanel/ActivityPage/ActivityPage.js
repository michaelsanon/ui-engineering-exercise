import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
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

export const ActivityPage = ({ activitiesUrls }) => {
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);
  
  // This is where I need to get past and upcoming activities
  // This is where I will handle filtering the activities
  // Pass filtered activities into ActivityPageActivities

  useEffect(() => {
    fetch(activitiesUrls[0])
      .then(res => res.json())
      .then(result => setPastActivities(result))

    fetch(activitiesUrls[1])
      .then(res => res.json())
      .then(result => setUpcomingActivities(result))
  }, []);

  return (
    <ActivityPageWrapper>
      <ActivityPageActions />
      <ActivityPageActivities activitiesType="upcoming"/>
      <ActivityPageActivities activitiesType="past"/>
    </ActivityPageWrapper>
  )
};

ActivityPage.propTypes = {
  activitiesUrls: PropTypes.array
};
