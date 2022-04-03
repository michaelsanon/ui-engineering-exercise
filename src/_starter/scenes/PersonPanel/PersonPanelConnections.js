import React from "react";
import PropTypes from "prop-types"
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

export const PersonPanelConnections = ({ personData }) => {
  return (
    <PersonPanelConnectionsWrapper>
      <a href={personData.crm_url}><StyledCloudIcon /></a>
      <a href={personData.linkedin_url}><StyledLinkedInIcon /></a>
      <a href={`https://twitter.com/${personData.twitter_handle}`}><StyledTwitterIcon /></a>
      <a href={personData.personal_website}><StyledLinkIcon /></a>
    </PersonPanelConnectionsWrapper>
  )
};

PersonPanelConnections.propTypes = {
  personData: PropTypes.object
}
