import React from "react";
import styled from 'styled-components';

import { getColor } from "../../theme/theme";
import { default as StarOutlinedIcon } from "../../shared/Icons/StarOutlined";
import { default as EllipsisHorizontalIcon } from "../../shared/Icons/EllipsisHorizontal";

const HeaderWrapper = styled.div`
  height: 32px;
  width: 100%;
  background-color: ${getColor('white')};
  border-bottom: 1px solid ${getColor('greyLightest')};

  display: flex;
  Justify-content: space-between;
  align-items: center;
`;

export const StyledStarOutlinedIcon = styled(StarOutlinedIcon)`
  color: ${getColor('orange')};
  margin-left: 16px;
  cursor: pointer;
`;

export const StyledEllipsisHorizontalIcon = styled(EllipsisHorizontalIcon)`
  margin-right: 8px;
  cursor: pointer;
`;

export const PersonPanelHeader = () => {
  return (
    <HeaderWrapper>
      <StyledStarOutlinedIcon />
      <StyledEllipsisHorizontalIcon />
    </HeaderWrapper>
  )
};
