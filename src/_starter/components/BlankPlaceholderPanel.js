import React from "react";
import styled from "styled-components";

import { getColor } from "../theme/theme";

const BlankDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const BlankPlaceholderPanel = () => {
  return (
    <BlankDiv />
  )
};
