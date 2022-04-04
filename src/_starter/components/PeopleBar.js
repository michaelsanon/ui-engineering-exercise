import React from "react";
import styled from "styled-components";

import { getColor } from "../theme/theme";

const BlankDiv = styled.div`
  width: 100%;
  padding: 16px 20px;
  background-color: ${getColor('white')};
  color: ${getColor('greyDarkest')};
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
`;

export const PeopleBar = () => {
  return (
    <BlankDiv>People</BlankDiv>
  )
};
