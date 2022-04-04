import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActionBar } from './ActionBar/ActionBar';
import { ActivitiesSection } from "./ActivitiesSection/ActivitiesSection";

import tempdata from './ActivitiesSection/tempdata.json';

const ActivityTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 20px;
  width: 100%;
`;

export const ActivityTab = ({ personName, activitiesUrls }) => {
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);

  // This is where I would handle filtering the activities from the person/activity filters
  // Create filtered activities state for past and upcoming
  // Pass filtered activities into ActivitiesSection component

  useEffect(() => {
    // TODO: Error handling for both requests
    
    setPastActivities(tempdata.data);
    fetch(activitiesUrls[0])
      .then(res => res.json())
      .then(result => setPastActivities(result.data))

    fetch(activitiesUrls[1])
      .then(res => res.json())
      .then(result => setUpcomingActivities(result.data))
  }, [activitiesUrls]);

  return (
    <ActivityTabWrapper>
      <ActionBar />
      <ActivitiesSection title="Upcoming Activities" activities={upcomingActivities} personName={personName} />
      <ActivitiesSection title="Past Activities" activities={pastActivities} personName={personName} />
    </ActivityTabWrapper>
  )
};

ActivityTab.propTypes = {
  activitiesUrls: PropTypes.array,
  personName: PropTypes.string
};
