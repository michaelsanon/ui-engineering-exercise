import React from "react";
import styled from 'styled-components';

import { ActionBarButton } from './ActionBarButton';
import { default as PlusIcon } from "../../../../shared/Icons/Plus";
import { default as PhoneIcon } from "../../../../shared/Icons/Phone";
import { getBreakpoint } from "../../../../theme/theme";

const ActionBarButtonsWrapper = styled.div`
  display: flex;
  margin-top: 16px;

  @media (min-width: ${getBreakpoint('md')}) {
    align-items: center;
    margin-top: 10px;
  }
`;

export const ActionBarButtons = () => (
  <ActionBarButtonsWrapper>
    <ActionBarButton text="Log a Call" icon={<PhoneIcon />} />
    <ActionBarButton text="Add a Note" icon={<PlusIcon />} />
  </ActionBarButtonsWrapper>
);
