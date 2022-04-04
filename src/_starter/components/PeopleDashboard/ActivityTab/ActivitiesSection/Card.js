import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { CardIcon } from './CardIcons';
import { CardInfo } from './CardInfo';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 66px;
  width: 100%;
  margin-bottom: 8px;
`;


export const Card = ({ personName, activity }) => (
  <CardWrapper>
      <CardIcon activityType={activity.type} />
      <CardInfo personName={personName} activity={activity} />
  </CardWrapper>
)

Card.propTypes = {
  activity: PropTypes.object,
  PersonName: PropTypes.string
}
