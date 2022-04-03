import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActivitiesPanelHeaderTab } from './ActivitiesPanelHeaderTab';

const ActivitiesPanelHeaderTabsWrapper = styled.div`
  height: 49px;
  margin-left: 17px;
  display: flex;
`;

export const ActivitiesPanelHeaderTabs = ({ pageShown, setPageShown }) => {
  
  const handleTabClick = (tabTitle) => {
    setPageShown(tabTitle)
  }

  return (
    <ActivitiesPanelHeaderTabsWrapper>
      <ActivitiesPanelHeaderTab tabTitle="Activity" pageShown={pageShown} handleTabClick={handleTabClick} />
      <ActivitiesPanelHeaderTab tabTitle="Tracking" pageShown={pageShown} handleTabClick={handleTabClick}/>
      <ActivitiesPanelHeaderTab tabTitle="Reminders" pageShown={pageShown} handleTabClick={handleTabClick} />
    </ActivitiesPanelHeaderTabsWrapper>
  )
};

ActivitiesPanelHeaderTabs.propTypes = {
  pageShown: PropTypes.string,
  setPageShown: PropTypes.func
}
