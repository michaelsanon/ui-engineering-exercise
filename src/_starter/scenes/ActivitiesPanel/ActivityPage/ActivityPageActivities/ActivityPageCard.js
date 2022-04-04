import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { default as PaperPlaneIcon } from "../../../../shared/Icons/PaperPlane";
import { default as RocketIcon } from "../../../../shared/Icons/Rocket";
import { default as ReplyIcon } from "../../../../shared/Icons/Reply";
import { default as PhoneIcon } from "../../../../shared/Icons/Phone";
import { default as VoiceMailIcon } from "../../../../shared/Icons/Voicemail";
import { default as BadgeIcon } from "../../../../shared/Icons/Badge";
import { getColor } from "../../../../theme/theme";


const ActivityPageCardWrapper = styled.div`
  display: flex;
  height: 66px;
  width: 100%;
  margin-bottom: 8px;
`;

const ActivityPageCardInfo = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid ${getColor('greyLightest')};
  background-color: green;
`;

const ActivityIcon = ({ activityType }) => {
  switch (activityType) {
    case 'voicemail':
      return <VoiceMailIcon />
    case 'success':
      return <BadgeIcon />
    case 'sent_email':
      return <PaperPlaneIcon />
    case 'call':
      return <PhoneIcon />
      case 'email_reply':
        return <ReplyIcon />
    default:
      return <RocketIcon />
  }
}

export const ActivityPageCard = ({ activity }) => {
  console.log('ACTIVITY', activity)
  return (
    <ActivityPageCardWrapper>
        <ActivityIcon activityType={activity.type} />
        <ActivityPageCardInfo />
    </ActivityPageCardWrapper>
  )
};

ActivityIcon.propTypes = {
  activityType: PropTypes.string
}

ActivityPageCard.propTypes = {
  activity: PropTypes.object
}
