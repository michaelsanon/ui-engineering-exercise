import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';

import { Cards } from './Cards';
import { getColor } from "../../../../theme/theme";

const ActivitiesSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

const ActivitiesSectionTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: ${getColor('greyDark')};
`;

export const ActivitiesSection = ({ personName, title, activities }) => (
  <ActivitiesSectionWrapper>
    <ActivitiesSectionTitle>
      {title}
    </ActivitiesSectionTitle>
    <Cards activities={activities} personName={personName} />
  </ActivitiesSectionWrapper>
)

ActivitiesSection.propTypes = {
  activities: PropTypes.array,
  title: PropTypes.string,
  personName: PropTypes.string
}
