import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'styled-components';

import { default as EyeIcon } from "../../../../shared/Icons/Eye";
import { default as ClickIcon } from "../../../../shared/Icons/Click";
import { default as ReplyIcon } from "../../../../shared/Icons/Reply";
import { getColor } from "../../../../theme/theme";
import { secondsToMS } from "../../../../utilities/timeConversions";

const GeneralInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  ${({ titleColor, weight }) => css`
    color: ${getColor(titleColor)};
    font-weight: ${weight};
  `};
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};
  white-space: nowrap;
  margin-right: 5px;
`;

const TextIconWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  height: 8px;
  border-right: 1px solid ${getColor('grey')};
  display: flex;
  align-items: center;
  height: 10px;
  margin-right: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledEyeIcon = styled(EyeIcon)`
  color: ${getColor('grey')};
  width: 12px;
  height: 12px;
  margin-right: 2px;
`;

const StyledClickIcon = styled(ClickIcon)`
  color: ${getColor('grey')};
  width: 12px;
  height: 12px;
  margin-right: 2px;
  margin-left: 5px;
`;

const StyledReplyIcon = styled(ReplyIcon)`
  color: ${getColor('grey')};
  width: 12px;
  height: 12px;
  margin-right: 2px;
  margin-left: 5px;
`;

export const CardTypes = ({ personName, activity }) => {
  switch (activity.type) {
    case 'voicemail':
      return (
        <GeneralInfoWrapper>
          <Title titleColor='greyDark' >Voicemail Received: {secondsToMS(activity.dynamic_data.voicemail_duration)}</Title>
          <Text>{personName} To {activity.dynamic_data.user_name}</Text>
        </GeneralInfoWrapper>
      )
    case 'success':
      return (
        <GeneralInfoWrapper>
          <Title titleColor='greyDark'>Marked as Success</Title>
          <Text>{activity.dynamic_data.user_name}</Text>
        </GeneralInfoWrapper>
      )
    case 'sent_email':
      return (
        <GeneralInfoWrapper>
          <Title titleColor='blueDark'>{activity.static_data.subject}</Title>
          <TextIconWrapper>
            <TextWrapper>
              <Text>{activity.dynamic_data.user_name}</Text>
            </TextWrapper>
            <IconWrapper>
              <StyledEyeIcon />
              <Text>{activity.dynamic_data.counts.views}</Text>
              <StyledClickIcon color={getColor('grey')}/>
              <Text>{activity.dynamic_data.counts.clicks}</Text>
              <StyledReplyIcon color={getColor('grey')}/>
              <Text>{activity.dynamic_data.counts.replies}</Text>
            </IconWrapper>
          </TextIconWrapper>
        </GeneralInfoWrapper>
      )
    case 'call':
      return (
        <GeneralInfoWrapper>
          <Title titleColor='greyDark'>{activity.static_data.sentiment}</Title>
          <Text>{`${activity.dynamic_data.user_name} with ${activity.dynamic_data.phone_number}`}</Text>
        </GeneralInfoWrapper>
      )
      case 'email_reply':
        return (
          <GeneralInfoWrapper>
          <Title titleColor='blueDark'>
            {`RE: ${activity.static_data.in_reply_to_subject} `}
            <Title weight="400" titleColor='greyDark'>{activity.static_data.body}</Title>
          </Title>
          <TextIconWrapper>
            <TextWrapper>
              <Text>{activity.dynamic_data.user_name}</Text>
            </TextWrapper>
            <IconWrapper>
              <StyledEyeIcon />
              <Text>{activity.dynamic_data.counts.views}</Text>
              <StyledClickIcon color={getColor('grey')}/>
              <Text>{activity.dynamic_data.counts.clicks}</Text>
              <StyledReplyIcon color={getColor('grey')}/>
              <Text>{activity.dynamic_data.counts.replies}</Text>
            </IconWrapper>
          </TextIconWrapper>
        </GeneralInfoWrapper>
        )
    default:
      return (
        <GeneralInfoWrapper>
          <Title titleColor='greyDark'>
            {'Added to Cadence '}
            <Title weight="400" titleColor='blueDark'>{activity.dynamic_data.cadence_name}</Title>
          </Title>
          <Text>{`Added by ${activity.static_data.instigator.action_caller_name} assigned to ${activity.dynamic_data.user_name}`}</Text>
        </GeneralInfoWrapper>
      )
  }
}

CardTypes.propTypes = {
  activity: PropTypes.object,
  personName: PropTypes.string
}
