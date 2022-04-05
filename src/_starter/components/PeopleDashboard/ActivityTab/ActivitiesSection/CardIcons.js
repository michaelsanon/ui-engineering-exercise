import React from "react";
import PropTypes from "prop-types"
import styled, { css } from 'styled-components';

import { default as PaperPlaneIcon } from "../../../../shared/Icons/PaperPlane";
import { default as RocketIcon } from "../../../../shared/Icons/Rocket";
import { default as ReplyIcon } from "../../../../shared/Icons/Reply";
import { default as PhoneIcon } from "../../../../shared/Icons/Phone";
import { default as VoiceMailIcon } from "../../../../shared/Icons/Voicemail";
import { default as BadgeIcon } from "../../../../shared/Icons/Badge";
import { getBreakpoint } from "../../../../theme/theme";

const IconWrapper = styled.div`
  display: none;

  @media (min-width: ${getBreakpoint('md')}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    margin-right: 16px;
    ${({ color }) => css`
      background: rgba(${color}, 0.1);
    `};
  }
`;

const StyledVoiceMailIcon = styled(VoiceMailIcon)`
  opacity: 1 !important;
`;

export const CardIcon = ({ activityType }) => {
  switch (activityType) {
    case 'voicemail':
      return (
        <IconWrapper color='23, 187, 182'>
          <StyledVoiceMailIcon color='#17BBB6' />
        </IconWrapper>
      )
    case 'success':
      return (
        <IconWrapper color='37, 62, 162'>
          <BadgeIcon color='#253ea2'/>
        </IconWrapper>
      )
    case 'sent_email':
      return (
        <IconWrapper color='37, 62, 162'>
          <PaperPlaneIcon color='#253ea2'/>
        </IconWrapper>
      )
    case 'call':
      return (
        <IconWrapper color='23, 187, 182'>
          <PhoneIcon color='#17BBB6'/>
        </IconWrapper>
      )
      case 'email_reply':
        return (
          <IconWrapper color='37, 62, 162'>
            <ReplyIcon color='#253ea2'/>
          </IconWrapper>
        )
    default:
      return (
        <IconWrapper color='101, 139, 159'>
          <RocketIcon color='#3c9cd2'/>
        </IconWrapper>
      )
  }
}

CardIcon.propTypes = {
  activityType: PropTypes.string
}
