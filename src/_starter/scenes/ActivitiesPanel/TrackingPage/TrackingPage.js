import React from "react";
import styled from 'styled-components';

const TrackingPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: green;
`;

export const TrackingPage = ({ pageShown, setPageShown }) => {
  return (
    <TrackingPageWrapper />
  )
};