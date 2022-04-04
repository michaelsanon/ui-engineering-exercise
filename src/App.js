import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getColor } from "./_starter/theme/theme";
import { PersonPanel } from "./_starter/components/PersonPanel/PersonPanel";
import { PeopleDashboard } from "./_starter/components/PeopleDashboard/PeopleDashboard";
import { BlankPlaceholderPanel } from "./_starter/components/BlankPlaceholderPanel";
import { PeopleBar } from "./_starter/components/PeopleBar";

const AppWrapper = styled.div`
  height: 100%;
  background-color: ${getColor('blueGreyLightest')};
`;

export const App = () => {
  const [personData, setpersonData] = useState({});

  useEffect(() => {
    // TODO: Add error handling for fetch request

    fetch('https://ui-offline-exercise.s3.amazonaws.com/data/people.json')
      .then(res => res.json())
      .then(result => setpersonData(result))
  }, []);

  return (
    <AppWrapper>
      <PeopleBar />
      {/* <PersonPanel 
        displayName={personData.display_name}
        title={personData.title}
        companyName={personData.person_company_name}
        salesforceUrl={personData.crm_url}
        linkedinUrl={personData.linkedin_url}
        twitterHandle={personData.twitter_handle}
        personalWebsiteUrl={personData.personal_website}
        companyWebsiteUrl={personData.person_company_website}
      /> */}
      {/* <PeopleDashboard 
        personName={personData.display_name} 
        activitiesUrls={[personData?.activities?._href, personData?.upcoming_activities?._href]} 
      /> */}
    </AppWrapper>
  )
};
