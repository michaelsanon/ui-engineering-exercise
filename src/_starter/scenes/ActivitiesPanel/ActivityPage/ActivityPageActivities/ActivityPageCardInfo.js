import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'styled-components';

import { CardTypes } from './CardTypes';
import { getColor } from "../../../../theme/theme";
import { extractDateAndTime } from "../../../../utilities/timeConversions"

const ActivityPageCardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  padding: 16px;
`;

const DateAndTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
`;

const DateAndTimeText = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};
`;

export const ActivityPageCardInfo = ({ personName, activity }) => {
  const dateAndTime = extractDateAndTime(activity.created_at);
  return (
    <ActivityPageCardInfoWrapper>
      <CardTypes activity={activity} personName={personName} />
      <DateAndTime>
        <DateAndTimeText>{dateAndTime[0]}</DateAndTimeText>
        <DateAndTimeText>{dateAndTime[1]}</DateAndTimeText>
      </DateAndTime>
    </ActivityPageCardInfoWrapper>
  )
};

ActivityPageCardInfo.propTypes = {
  activity: PropTypes.object,
  personName: PropTypes.string
}
