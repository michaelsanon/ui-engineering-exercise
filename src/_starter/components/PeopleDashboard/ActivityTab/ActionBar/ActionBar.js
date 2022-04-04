import React from "react";
import styled from 'styled-components';

import { ActionBarDropdowns } from './ActionBarDropdowns';
import { ActionBarButtons } from './ActionBarButtons';

const ActionBarWrapper = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionBar = () => (
  <ActionBarWrapper>
    <ActionBarDropdowns />
    <ActionBarButtons />
  </ActionBarWrapper>
);
