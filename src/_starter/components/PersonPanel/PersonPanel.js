import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { Header } from "./Header";
import { Connections } from "./Connections";
import { getColor } from "../../theme/theme";

const PersonPanelWrapper = styled.div`
  height: 166px;
  width: 300px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PersonName = styled.span`
  font-weight: 300;
  color: ${getColor('greyDark')};
  font-size: 24px;
  line-height: 24px;
  margin-top: 20px;
`;

const PersonTitle = styled.span`
  font-weight: 400;
  color: ${getColor('greyDark')};
  font-size: 14px;
  line-height: 17px;
  margin-top: 6px;
`;

const PersonCompany = styled.a`
  font-weight: 600;
  color: #337AB7;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  text-decoration: none;
`;

export const PersonPanel = ({
  displayName,
  title,
  companyName,
  salesforceUrl,
  linkedinUrl,
  twitterHandle,
  personalWebsiteUrl,
  companyWebsiteUrl
 }) => (
  <PersonPanelWrapper>
    <Header />
    <PersonName>{displayName}</PersonName>
    <PersonTitle>{title}</PersonTitle>
    <PersonCompany href={companyWebsiteUrl}>{companyName}</PersonCompany>
    <Connections 
      salesforceUrl={salesforceUrl} 
      linkedinUrl={linkedinUrl} 
      twitterHandle={twitterHandle} 
      personalWebsiteUrl={personalWebsiteUrl}
    />
  </PersonPanelWrapper>
)

PersonPanel.propTypes = {
  displayName: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  salesforceUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  twitterHandle: PropTypes.string,
  personalWebsiteUrl: PropTypes.string
}

