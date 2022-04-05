import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { Card } from './Card';
import { getColor, getBreakpoint } from "../../../../theme/theme";

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

const NoActivitiesMessageWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: ${getBreakpoint('md')}) {
    justify-content: center;
  }
`;

const NoActivitiesText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('greyDark')};
  margin-right: 5px;
`;

export const Cards = ({ personName, activities }) => (
  <CardsWrapper>
    {activities.length ? (
      activities.map(activity => (
        <Card key={activity.id} activity={activity} personName={personName} />
      ))
    ) : (
      <NoActivitiesMessageWrapper>
        <NoActivitiesText>Once actions are scheduled, they'll appear here</NoActivitiesText>
      </NoActivitiesMessageWrapper>
    )}
  </CardsWrapper>
)

Cards.propTypes = {
  activities: PropTypes.array,
  personName: PropTypes.string
}
