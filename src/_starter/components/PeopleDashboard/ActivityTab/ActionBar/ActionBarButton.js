import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { getColor, getBreakpoint } from "../../../../theme/theme";

// TODO: change this to a custom styled button element for accessibility purposes
const ActionBarButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 12px;
  color: ${getColor('blue')};
  width: 100px;

  @media (min-width: ${getBreakpoint('md')}) {
    width: 115px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 6px;
`;

export const ActionBarButton = ({ text, icon }) => (
  <ActionBarButtonWrapper>
    <TextWrapper>
      {icon}
      <Text>{text}</Text>
    </TextWrapper>
  </ActionBarButtonWrapper>
);

ActionBarButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element
}
