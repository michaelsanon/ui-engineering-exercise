import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { ActivityPageCardIcon } from './ActivityPageCardIcons';
import { ActivityPageCardInfo } from './ActivityPageCardInfo';

const ActivityPageCardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 66px;
  width: 100%;
  margin-bottom: 8px;
`;


export const ActivityPageCard = ({ personName, activity }) => {
  return (
    <ActivityPageCardWrapper>
        <ActivityPageCardIcon activityType={activity.type} />
        <ActivityPageCardInfo personName={personName} activity={activity} />
    </ActivityPageCardWrapper>
  )
};

ActivityPageCard.propTypes = {
  activity: PropTypes.object,
  PersonName: PropTypes.string
}
