import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActivityPageCards } from './ActivityPageCards';
import { getColor } from "../../../../theme/theme";

const ActivityPageActivitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

const ActivityPageActivitiesTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: ${getColor('greyDark')};
`;

export const ActivityPageActivities = ({ personName, activitiesType, activities }) => {
  return (
    <ActivityPageActivitiesWrapper>
      <ActivityPageActivitiesTitle>
        {activitiesType === 'upcoming' ? 'Upcoming Activities' : 'Past Activities'}
      </ActivityPageActivitiesTitle>
      <ActivityPageCards activities={activities} personName={personName} />
    </ActivityPageActivitiesWrapper>
  )
};

ActivityPageActivities.propTypes = {
  activities: PropTypes.array,
  activitiesType: PropTypes.string,
  personName: PropTypes.string
}
