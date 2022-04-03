import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActivitiesPanelHeaderTabs } from "./ActivitiesPanelHeaderTabs";
import { getColor } from "../../../theme/theme";

const ActivitiesPanelHeaderWrapper = styled.div`
  height: 48px;
  width: 100%;
  border-bottom: 1px solid ${getColor('greyLightest')};
`;

export const ActivitiesPanelHeader = ({ pageShown, setPageShown }) => {
  return (
    <ActivitiesPanelHeaderWrapper>
      <ActivitiesPanelHeaderTabs pageShown={pageShown} setPageShown={setPageShown} />
    </ActivitiesPanelHeaderWrapper>
  )
};

ActivitiesPanelHeader.propTypes = {
  pageShown: PropTypes.string,
  setPageShown: PropTypes.func
}
