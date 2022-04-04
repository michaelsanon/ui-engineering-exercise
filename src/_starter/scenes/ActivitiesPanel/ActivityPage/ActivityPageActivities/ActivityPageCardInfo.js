import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { getColor } from "../../../../theme/theme";

const ActivityPageCardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  padding: 16px;
`;

const GeneralInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DateAndTime = styled.div`
  height: 100%;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: ${getColor('greyDark')};
  margin-bottom: 6px;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};
`;

const CardInfo = ({ personName, activity }) => {
  switch (activity.type) {
    case 'voicemail':
      return (
        <GeneralInfoWrapper>
          <Title>Voicemail Received: {activity.dynamic_data.voicemail_duration}</Title>
          <Text>{personName} To {activity.dynamic_data.user_name}</Text>
        </GeneralInfoWrapper>
      )
    case 'success':
      return (
        <div>hello</div>
      )
    case 'sent_email':
      return (
        <div>hello</div>
      )
    case 'call':
      return (
        <div>hello</div>
      )
      case 'email_reply':
        return (
          <div>hello</div>
        )
    default:
      return (
        <div>hello</div>
      )
  }
}

export const ActivityPageCardInfo = ({ personName, activity }) => {
  return (
    <ActivityPageCardInfoWrapper>
      <CardInfo activity={activity} personName={personName} />

      <DateAndTime>

      </DateAndTime>
    </ActivityPageCardInfoWrapper>
  )
};

ActivityPageCardInfo.propTypes = {
  activity: PropTypes.object,
  personName: PropTypes.string
}
