import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'styled-components';

// import { default as ChevronSmDownIcon } from "../../../shared/Icons/ChevronSmDown";
import { getColor } from "../../../theme/theme";

const ActivityPageActionsDropdownWrapper = styled.select`
  width: 88px;
  border-radius: 4px;
  padding-left: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

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

export const ActivityPageActionsDropdown = ({ type }) => {
  return (
    <ActivityPageActionsDropdownWrapper type={type}>
      <option value="" disabled selected>{type}</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </ActivityPageActionsDropdownWrapper>
  )
};

ActivityPageActionsDropdown.propTypes = {
  type: PropTypes.string
}
