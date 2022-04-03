import React from "react";
import styled from 'styled-components';

import { getColor } from "../../theme/theme";

const RemindersPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: Red;
`;

export const RemindersPage = ({ pageShown, setPageShown }) => {
  return (
    <RemindersPageWrapper />
  )
};