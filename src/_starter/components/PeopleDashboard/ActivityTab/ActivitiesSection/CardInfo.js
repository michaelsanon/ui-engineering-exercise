import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { CardType } from './CardType';
import { getColor, getBreakpoint } from "../../../../theme/theme";
import { extractDateAndTime } from "../../../../utilities/timeConversions"

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  padding: 16px;

  @media (min-width: ${getBreakpoint('md')}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const DateAndTime = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;

  @media (min-width: ${getBreakpoint('md')}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 0;
  }
`;

const DateText = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};
  margin-right: 6px;

  @media (min-width: ${getBreakpoint('md')}) {
    margin-right: 0;
  }
`;

const TimeText = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};

  @media (min-width: ${getBreakpoint('md')}) {
    margin-top: 10px;
  }
`;

export const CardInfo = ({ personName, activity }) => {
  const date = new Date(activity.created_at);
  const formattedDate = date.toLocaleDateString("en-US",  {  year: 'numeric', month: 'short', day: 'numeric' });
  const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  return (
    <CardInfoWrapper>
      <CardType activity={activity} personName={personName} />
      <DateAndTime>
        <DateText>{formattedDate}</DateText>
        <TimeText>{formattedTime}</TimeText>
      </DateAndTime>
    </CardInfoWrapper>
  )
};

CardInfo.propTypes = {
  activity: PropTypes.object,
  personName: PropTypes.string
}
