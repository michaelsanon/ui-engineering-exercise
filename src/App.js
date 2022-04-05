import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import styled, { css } from "styled-components";

import { getColor, getBreakpoint } from "./_starter/theme/theme";
import { PersonPanel } from "./_starter/components/PersonPanel/PersonPanel";
import { PeopleDashboard } from "./_starter/components/PeopleDashboard/PeopleDashboard";
import { BlankPlaceholderPanel } from "./_starter/components/BlankPlaceholderPanel";
import { PeopleBar } from "./_starter/components/PeopleBar";

const AppWrapper = styled.div`
  display: flex;
  gap: 10px;
  background-color: ${getColor('blueGreyLightest')};
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px 20px 10px;

  @media (min-width: ${getBreakpoint('md')}) {
    flex-direction: row;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${getBreakpoint('md')}) {
    ${({ width }) => css`
      flex-basis: ${width};
    `};
  }
`;

export const App = () => {
  const [personData, setPersonData] = useState({});

  useEffect(() => {
    // TODO: Add error handling in case the fetch request fails so we can inform the user
    fetch('https://ui-offline-exercise.s3.amazonaws.com/data/people.json')
      .then(res => res.json())
      .then(result => setPersonData(result))
  }, []);

  return (
    <>
      <PeopleBar />
      <AppWrapper>
        <ColumnWrapper width="300px">
          <PersonPanel 
            displayName={personData.display_name}
            title={personData.title}
            companyName={personData.person_company_name}
            salesforceUrl={personData.crm_url}
            linkedinUrl={personData.linkedin_url}
            twitterHandle={personData.twitter_handle}
            personalWebsiteUrl={personData.personal_website}
            companyWebsiteUrl={personData.person_company_website}
          />
          <BlankPlaceholderPanel height="238px" />
          <BlankPlaceholderPanel height="144px" />
          <BlankPlaceholderPanel height="536px" />
        </ColumnWrapper>
        <ColumnWrapper width="667px">
          <PeopleDashboard
            personName={personData.display_name} 
            pastActivitiesUrl={personData?.activities?._href} 
            upcomingActivitiesUrl={personData?.upcoming_activities?._href}
          />
        </ColumnWrapper>
        <ColumnWrapper width="372px">
          <BlankPlaceholderPanel height="226px" />
          <BlankPlaceholderPanel height="428px" />
          <BlankPlaceholderPanel height="194px" />
          <BlankPlaceholderPanel height="213px" />
        </ColumnWrapper>
      </AppWrapper>
    </>
  )
};

ColumnWrapper.propTypes = {
  width: PropTypes.string
}
