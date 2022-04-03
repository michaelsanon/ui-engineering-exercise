import React, { useState } from "react";
import styled from 'styled-components';

import { ActivitiesPanelHeader } from "./ActivitiesPanelHeader/ActivitiesPanelHeader";
import { getColor } from "../../theme/theme";

const ActivitiesPanelWrapper = styled.div`
  height: 700px;
  width: 667px;
  margin-top: 20px;
  margin-left: 20px;

  background-color: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};

  display: flex;
  flex-direction: column;
`;

export const ActivitiesPanel = () => {
  const [pageShown, setPageShown] = useState('Activity')
  return (
    <ActivitiesPanelWrapper>
      <ActivitiesPanelHeader pageShown={pageShown} setPageShown={setPageShown} />
    </ActivitiesPanelWrapper>
  )
};
