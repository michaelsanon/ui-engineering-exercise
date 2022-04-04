import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActivityPageCard } from './ActivityPageCard';

const ActivityPageCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 16px;
`;

export const ActivityPageCards = ({ personName, activities }) => {
  return (
    <ActivityPageCardsWrapper>
      {activities.map(activity => (
        <ActivityPageCard activity={activity} personName={personName} />
      ))}
    </ActivityPageCardsWrapper>
  )
};

ActivityPageCards.propTypes = {
  activities: PropTypes.array,
  personName: PropTypes.string
}
