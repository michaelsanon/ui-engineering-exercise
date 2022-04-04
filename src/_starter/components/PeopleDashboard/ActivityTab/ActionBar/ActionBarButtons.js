import React from "react";
import styled from 'styled-components';

import { ActionBarButton } from './ActionBarButton';

const ActionBarButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ActionBarButtons = () => (
  <ActionBarButtonsWrapper>
    <ActionBarButton text="Log a Call" icon="phone" />
    <ActionBarButton text="Add a Note" icon="plus"/>
  </ActionBarButtonsWrapper>
);
