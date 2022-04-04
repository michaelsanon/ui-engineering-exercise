import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { PeopleDashboardTabs } from "./PeopleDashboardTabs";
import { getColor } from "../../../theme/theme";

const PeopleDashboardHeaderWrapper = styled.div`
  height: 48px;
  width: 100%;
  border-bottom: 1px solid ${getColor('greyLightest')};
`;

export const PeopleDashboardHeader = ({ activeTab, setactiveTab }) => {
  return (
    <PeopleDashboardHeaderWrapper>
      <PeopleDashboardTabs activeTab={activeTab} setactiveTab={setactiveTab} />
    </PeopleDashboardHeaderWrapper>
  )
};

PeopleDashboardHeader.propTypes = {
  activeTab: PropTypes.string,
  setactiveTab: PropTypes.func
}
