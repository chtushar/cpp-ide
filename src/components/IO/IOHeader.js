import React from 'react';
import styled from 'styled-components';

const IOHeaderWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: #340068;
  color: #ffffff;
  font-size: 16px;
  padding-left: 24px;
  line-height: 20px;
`;

const IOHeader = ({ message }) => {
  return <IOHeaderWrapper>{message}</IOHeaderWrapper>;
};

export default IOHeader;
