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

  width: 667px;
  margin-top: 20px;
  margin-left: 20px;

  background-color: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
`;

const PanelPageWrapper = styled.div`
  display: flex;
  min-height: 800px;
`;

const PanelTab = ({ activeTab, personName, activitiesUrls }) => {
  switch (activeTab) {
    case 'Tracking':
      return <TrackingTab />
    case 'Reminders':
      return <RemindersTab />
    default:
      return <ActivityTab activitiesUrls={activitiesUrls} personName={personName} />
  }
}

export const PeopleDashboard = ({ personName, activitiesUrls }) => {
  const [activeTab, setactiveTab] = useState('Activity');
  return (
    <PeopleDashboardWrapper>
      <PeopleDashboardHeader activeTab={activeTab} setactiveTab={setactiveTab} />
      <PanelPageWrapper>
        <PanelTab activeTab={activeTab} personName={personName} activitiesUrls={activitiesUrls} />
      </PanelPageWrapper>
    </PeopleDashboardWrapper>
  )
};

PeopleDashboard.propTypes = {
  activitiesUrl: PropTypes.array,
  personName: PropTypes.string
};

PanelTab.propTypes = {
  activitiesUrls: PropTypes.array,
  activeTab: PropTypes.string,
  personName: PropTypes.string
}
