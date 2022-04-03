import React from "react";
import styled from 'styled-components';

import { getColor } from "../../../theme/theme";

const ActivitiesPanelHeaderTabWrapper = styled.div`

  margin-right: 25px;
  display: flex;
  align-items: center;
`;

const TabTitle = styled.span`
  font-weight: 400;
  color: ${getColor('greyDark')};
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;

export const ActivitiesPanelHeaderTab = ({ tabTitle }) => {
  return (
    <ActivitiesPanelHeaderTabWrapper>
      <TabTitle>
        {tabTitle}
      </TabTitle>
    </ActivitiesPanelHeaderTabWrapper>
  )
};
