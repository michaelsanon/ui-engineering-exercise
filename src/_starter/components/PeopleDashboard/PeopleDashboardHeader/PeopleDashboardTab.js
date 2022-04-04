import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'styled-components';

import { getColor } from "../../../theme/theme";

const PeopleDashboardTabWrapper = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: center;
  font-weight: 400;
  color: ${getColor('greyDark')};
  font-size: 14px;
  line-height: 17px;

  ${({ activeTab, tabTitle }) => activeTab === tabTitle && css`
    font-weight: 600;
    border-bottom: 3px solid ${getColor('blueLight')};
  `};
`;

const TabTitle = styled.span`
  cursor: pointer;
`;

export const PeopleDashboardTab = ({ tabTitle, activeTab, handleTabClick }) => {
  return (
    <PeopleDashboardTabWrapper activeTab={activeTab} tabTitle={tabTitle}>
      <TabTitle onClick={() => handleTabClick(tabTitle)}>
        {tabTitle}
      </TabTitle>
    </PeopleDashboardTabWrapper>
  )
};

PeopleDashboardTab.propTypes = {
  tabTitle: PropTypes.string,
  activeTab: PropTypes.string,
  handleTabClick: PropTypes.func
}
