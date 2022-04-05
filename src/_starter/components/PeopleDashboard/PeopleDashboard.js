import React, { useState } from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { PeopleDashboardHeader } from "./PeopleDashboardHeader/PeopleDashboardHeader";
import { ActivityTab } from "./ActivityTab/ActivityTab";
import { TrackingTab } from "./TrackingTab/TrackingTab";
import { RemindersTab } from "./RemindersTab/RemindersTab";
import { getColor } from "../../theme/theme";

const PeopleDashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 225px;

  background-color: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
`;

const PanelPageWrapper = styled.div`
  display: flex;
`;

const PanelTab = ({ activeTab, personName, pastActivitiesUrl, upcomingActivitiesUrl }) => {
  switch (activeTab) {
    case 'Tracking':
      return <TrackingTab />
    case 'Reminders':
      return <RemindersTab />
    default:
      return <ActivityTab pastActivitiesUrl={pastActivitiesUrl} upcomingActivitiesUrl={upcomingActivitiesUrl} personName={personName} />
  }
}

export const PeopleDashboard = ({ personName, pastActivitiesUrl, upcomingActivitiesUrl }) => {
  const [activeTab, setactiveTab] = useState('Activity');
  return (
    <PeopleDashboardWrapper>
      <PeopleDashboardHeader activeTab={activeTab} setactiveTab={setactiveTab} />
      <PanelPageWrapper>
        <PanelTab
          activeTab={activeTab}
          personName={personName}
          pastActivitiesUrl={pastActivitiesUrl}
          upcomingActivitiesUrl={upcomingActivitiesUrl}
        />
      </PanelPageWrapper>
    </PeopleDashboardWrapper>
  )
};

PeopleDashboard.propTypes = {
  pastActivitiesUrl: PropTypes.string,
  upcomingActivitiesUrl: PropTypes.string,
  personName: PropTypes.string
};

PanelTab.propTypes = {
  pastActivitiesUrl: PropTypes.string,
  upcomingActivitiesUrl: PropTypes.string,
  activeTab: PropTypes.string,
  personName: PropTypes.string
}
