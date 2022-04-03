import React from "react";
import styled from 'styled-components';

import { default as CloudIcon } from "../../shared/Icons/Cloud";
import { default as LinkedInIcon } from "../../shared/Icons/LinkedIn";
import { default as TwitterIcon } from "../../shared/Icons/Twitter";
import { default as LinkIcon } from "../../shared/Icons/Link";
import { getColor } from "../../theme/theme";

const PersonPanelConnectionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  width: 110px;
`;

export const StyledCloudIcon = styled(CloudIcon)`
  color: #049BE5;
  cursor: pointer;
`;

export const StyledLinkedInIcon = styled(LinkedInIcon)`
  color: ${getColor('vendorLinkedInBlue')};
  cursor: pointer;
`;

export const StyledTwitterIcon = styled(TwitterIcon)`
  color: ${getColor('vendorTwitterBlue')};
  cursor: pointer;
`;

export const StyledLinkIcon = styled(LinkIcon)`
  color: ${getColor('greyDarkest')};
  cursor: pointer;
`;

export const PersonPanelConnections = () => {
  return (
    <PersonPanelConnectionsWrapper>
      <a href="www.google.com"><StyledCloudIcon /></a>
      <a href="www.google.com"><StyledLinkedInIcon /></a>
      <a href="www.google.com"><StyledTwitterIcon /></a>
      <a href="www.google.com"><StyledLinkIcon /></a>
    </PersonPanelConnectionsWrapper>
  )
};
