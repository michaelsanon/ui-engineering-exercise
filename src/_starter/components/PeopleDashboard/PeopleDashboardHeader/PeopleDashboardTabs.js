import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { PeopleDashboardTab } from './PeopleDashboardTab';

const PeopleDashboardTabsWrapper = styled.div`
  height: 49px;
  margin-left: 17px;
  display: flex;
`;

export const PeopleDashboardTabs = ({ activeTab, setactiveTab }) => {
  
  const handleTabClick = (tabTitle) => {
    setactiveTab(tabTitle)
  }

  return (
    <PeopleDashboardTabsWrapper>
      <PeopleDashboardTab tabTitle="Activity" activeTab={activeTab} handleTabClick={handleTabClick} />
      <PeopleDashboardTab tabTitle="Tracking" activeTab={activeTab} handleTabClick={handleTabClick}/>
      <PeopleDashboardTab tabTitle="Reminders" activeTab={activeTab} handleTabClick={handleTabClick} />
    </PeopleDashboardTabsWrapper>
  )
};

PeopleDashboardTabs.propTypes = {
  activeTab: PropTypes.string,
  setactiveTab: PropTypes.func
}
