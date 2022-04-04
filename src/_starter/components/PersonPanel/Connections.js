import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { default as CloudIcon } from "../../shared/Icons/Cloud";
import { default as LinkedInIcon } from "../../shared/Icons/LinkedIn";
import { default as TwitterIcon } from "../../shared/Icons/Twitter";
import { default as LinkIcon } from "../../shared/Icons/Link";
import { getColor } from "../../theme/theme";

const ConnectionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  width: 110px;
`;

export const StyledCloudIcon = styled(CloudIcon)`
  color: ${getColor('vendorSalesforceBlue')};
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

export const Connections = ({
  salesforceUrl,
  linkedinUrl,
  twitterHandle,
  personalWebsiteUrl
}) => (
  <ConnectionsWrapper>
    <a href={salesforceUrl}><StyledCloudIcon /></a>
    <a href={linkedinUrl}><StyledLinkedInIcon /></a>
    <a href={`https://twitter.com/${twitterHandle}`}><StyledTwitterIcon /></a>
    <a href={personalWebsiteUrl}><StyledLinkIcon /></a>
  </ConnectionsWrapper>
)

Connections.propTypes = {
  salesforceUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  twitterHandle: PropTypes.string,
  personalWebsiteUrl: PropTypes.string
}
