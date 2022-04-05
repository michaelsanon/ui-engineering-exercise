import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActionBar } from './ActionBar/ActionBar';
import { ActivitiesSection } from "./ActivitiesSection/ActivitiesSection";
import { getBreakpoint } from "../../../theme/theme";

const ActivityTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 20px;
  width: 100%;

  @media (min-width: ${getBreakpoint('md')}) {
    align-items: center;
  }
`;

export const ActivityTab = ({ personName, pastActivitiesUrl, upcomingActivitiesUrl }) => {
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);

  // This is where I would handle filtering the activities from the person/activity filters
  // Create filtered activities state for past and upcoming
  // Pass filtered activities into ActivitiesSection component

  useEffect(() => {
    // TODO: Add error handling in case the fetch request fails so we can inform the user
    fetch(pastActivitiesUrl)
      .then(res => res.json())
      .then(result => setPastActivities(result.data))

    fetch(upcomingActivitiesUrl)
      .then(res => res.json())
      .then(result => setUpcomingActivities(result.data))
  }, [upcomingActivitiesUrl, pastActivitiesUrl]);

  return (
    <ActivityTabWrapper>
      <ActionBar />
      <ActivitiesSection title="Upcoming Activities" activities={upcomingActivities} personName={personName} />
      <ActivitiesSection title="Past Activities" activities={pastActivities} personName={personName} />
    </ActivityTabWrapper>
  )
};

ActivityTab.propTypes = {
  pastActivitiesUrl: PropTypes.string,
  upcomingActivitiesUrl: PropTypes.string,
  personName: PropTypes.string
};
