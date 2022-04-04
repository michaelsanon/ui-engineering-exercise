import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getColor } from "./_starter/theme/theme";
import { PersonPanel } from "./_starter/scenes/PersonPanel/PersonPanel";
import { ActivitiesPanel } from "./_starter/scenes/ActivitiesPanel/ActivitiesPanel";

const AppWrapper = styled.div`
  height: 100%;
  background-color: ${getColor('blueGreyLightest')};
`;

export const App = () => {
  const [personData, setpersonData] = useState({});

  useEffect(() => {
    fetch('https://ui-offline-exercise.s3.amazonaws.com/data/people.json')
      .then(res => res.json())
      .then(result => setpersonData(result))
  }, []);

  return (
    <AppWrapper>
      {/* <PersonPanel personData={personData} /> */}
      <ActivitiesPanel 
        personName={personData.display_name} 
        activitiesUrls={[personData?.activities?._href, personData?.upcoming_activities?._href]} 
      />
    </AppWrapper>
  )
};
