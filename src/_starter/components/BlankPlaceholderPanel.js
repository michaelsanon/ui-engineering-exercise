import React from "react";
import PropTypes from "prop-types"
import styled, { css } from "styled-components";

import { getColor, getBreakpoint } from "../theme/theme";

const BlankDiv = styled.div`
  display: none;

  @media (min-width: ${getBreakpoint('md')}) {
    display: block;
    background-color: ${getColor('bgGrey')};
    border: 1px solid ${getColor('greyLightest')};

    ${({ height }) => css`
      height: ${height};
    `}
  }
`;

export const BlankPlaceholderPanel = ({ height }) => (
  <BlankDiv height={height} />
)

BlankPlaceholderPanel.propTypes = {
  height: PropTypes.string
}
