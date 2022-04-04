import React, { useState } from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActivitiesPanelHeader } from "./ActivitiesPanelHeader/ActivitiesPanelHeader";
import { ActivityPage } from "./ActivityPage/ActivityPage";
import { TrackingPage } from "./TrackingPage/TrackingPage";
import { RemindersPage } from "./RemindersPage/RemindersPage";
import { getColor } from "../../theme/theme";

const ActivitiesPanelWrapper = styled.div`
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
`;

const PanelPage = ({ pageShown, personName, activitiesUrls }) => {
  switch (pageShown) {
    case 'Tracking':
      return <TrackingPage />
    case 'Reminders':
      return <RemindersPage />
    default:
      return <ActivityPage activitiesUrls={activitiesUrls} personName={personName} />
  }
}

export const ActivitiesPanel = ({ personName, activitiesUrls }) => {
  const [pageShown, setPageShown] = useState('Activity');
  return (
    <ActivitiesPanelWrapper>
      <ActivitiesPanelHeader pageShown={pageShown} setPageShown={setPageShown} />
      <PanelPageWrapper>
        <PanelPage pageShown={pageShown} personName={personName} activitiesUrls={activitiesUrls} />
      </PanelPageWrapper>
    </ActivitiesPanelWrapper>
  )
};

ActivitiesPanel.propTypes = {
  activitiesUrl: PropTypes.array,
  personName: PropTypes.string
};

PanelPage.propTypes = {
  activitiesUrls: PropTypes.array,
  pageShown: PropTypes.string,
  personName: PropTypes.string
}
