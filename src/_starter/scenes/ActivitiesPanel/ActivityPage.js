import React from "react";
import styled from 'styled-components';

import { getColor } from "../../theme/theme";

const ActivityPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
`;

export const ActivityPage = ({ pageShown, setPageShown }) => {
  return (
    <ActivityPageWrapper />
  )
};
