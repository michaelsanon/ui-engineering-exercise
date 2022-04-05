import React from "react";
import styled from 'styled-components';

import { ActionBarDropdowns } from './ActionBarDropdowns';
import { ActionBarButtons } from './ActionBarButtons';
import { getBreakpoint } from "../../../../theme/theme";

const ActionBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${getBreakpoint('md')}) {
    flex-direction: row;
    justify-content: space-between;
    height: 32px;
    width: 100%;
  }
`;

export const ActionBar = () => (
  <ActionBarWrapper>
    <ActionBarDropdowns />
    <ActionBarButtons />
  </ActionBarWrapper>
);
