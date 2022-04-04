import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'styled-components';

import { default as ChevronSmDownIcon } from "../../../../shared/Icons/ChevronSmDown";
import { getColor } from "../../../../theme/theme";

const ActivityPageActionsDropdownWrapper = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 8px;
  width: 88px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  ${({ type }) => type === 'Person' && css`
    background-color: ${getColor('blue')};
    color: ${getColor('white')};
    border: none;
  `};

  ${({ type }) => type === 'Activity' && css`
    background-color: ${getColor('white')};
    color: ${getColor('greyDarkest')};
    border: 1px solid ${getColor('greyLight')};
  `};
`;

const StyledChevronSmDownIcon = styled(ChevronSmDownIcon)`
  height: 18px;
  width: 18px;
  margin-left: 2px;
`;

export const ActivityPageActionsDropdown = ({ type }) => {
  return (
    <ActivityPageActionsDropdownWrapper type={type}>
      {type}
      <StyledChevronSmDownIcon />
    </ActivityPageActionsDropdownWrapper>
  )
};

ActivityPageActionsDropdown.propTypes = {
  type: PropTypes.string
}
