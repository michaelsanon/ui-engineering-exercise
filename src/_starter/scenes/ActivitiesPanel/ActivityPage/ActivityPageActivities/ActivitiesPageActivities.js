import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { getColor } from "../../../../theme/theme";

const ActivityPageActivitiesWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 16px;
`;

const ActivityPageActivitiesTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: ${getColor('greyDark')};
`;

export const ActivityPageActivities = ({ activitiesType }) => {
  return (
    <ActivityPageActivitiesWrapper>
      <ActivityPageActivitiesTitle>
        {activitiesType === 'upcoming' ? 'Upcoming Activities' : 'Past Activities'}
      </ActivityPageActivitiesTitle>
    </ActivityPageActivitiesWrapper>
  )
};

ActivityPageActivities.propTypes = {
  activitiesType: PropTypes.string
}
