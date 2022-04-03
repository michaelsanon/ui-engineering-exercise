import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { default as PlusIcon } from "../../../shared/Icons/Plus";
import { default as PhoneIcon } from "../../../shared/Icons/Phone";
import { getColor } from "../../../theme/theme";

const ActivityPageActionsButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${getColor('blue')};
  cursor: pointer;
  margin-left: 20px;
`;

const Text = styled.span`
  margin-left: 6px; 
`;

export const ActivityPageActionsButton = ({ text, icon }) => {
  return (
    <ActivityPageActionsButtonWrapper>
      {icon === 'phone' ? <PhoneIcon /> : <PlusIcon width="18px" height="18px" />}
      <Text>{text}</Text>
    </ActivityPageActionsButtonWrapper>
  )
};

ActivityPageActionsButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string
}
