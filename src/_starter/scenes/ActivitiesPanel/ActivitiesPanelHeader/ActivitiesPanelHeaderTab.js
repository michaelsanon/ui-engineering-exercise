import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'styled-components';

import { getColor } from "../../../theme/theme";

const ActivitiesPanelHeaderTabWrapper = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: center;
  font-weight: 400;
  color: ${getColor('greyDark')};
  font-size: 14px;
  line-height: 17px;

  ${({ pageShown, tabTitle }) => pageShown === tabTitle && css`
    font-weight: 600;
    border-bottom: 3px solid ${getColor('blueLight')};
  `};
`;

const TabTitle = styled.span`
  cursor: pointer;
`;

export const ActivitiesPanelHeaderTab = ({ tabTitle, pageShown, handleTabClick }) => {
  return (
    <ActivitiesPanelHeaderTabWrapper pageShown={pageShown} tabTitle={tabTitle}>
      <TabTitle onClick={() => handleTabClick(tabTitle)}>
        {tabTitle}
      </TabTitle>
    </ActivitiesPanelHeaderTabWrapper>
  )
};

ActivitiesPanelHeaderTab.propTypes = {
  tabTitle: PropTypes.string,
  pageShown: PropTypes.string,
  handleTabClick: PropTypes.func
}
