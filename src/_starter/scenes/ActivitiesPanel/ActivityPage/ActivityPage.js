import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActivityPageActions } from './ActivityPageActions/ActivityPageActions';
import { ActivityPageActivities } from "./ActivityPageActivities/ActivityPageActivities";

import tempdata from './ActivityPageActivities/tempdata.json';

const ActivityPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

export const ActivityPage = ({ personName, activitiesUrls }) => {
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);

  // This is where I need to get past and upcoming activities
  // This is where I will handle filtering the activities
  // Pass filtered activities into ActivityPageActivities
  // Filter work will be, filter and pass filtered array into ActivityPageActivities

  useEffect(() => {
    setPastActivities(tempdata.data);
    // fetch(activitiesUrls[0])
    //   .then(res => res.json())
    //   .then(result => setPastActivities(result.data))

    // fetch(activitiesUrls[1])
    //   .then(res => res.json())
    //   .then(result => setUpcomingActivities(result.data))
  }, []);

  return (
    <ActivityPageWrapper>
      <ActivityPageActions />
      <ActivityPageActivities activitiesType="upcoming" activities={upcomingActivities} personName={personName} />
      <ActivityPageActivities activitiesType="past" activities={pastActivities} personName={personName} />
    </ActivityPageWrapper>
  )
};

ActivityPage.propTypes = {
  activitiesUrls: PropTypes.array,
  personName: PropTypes.string
};
