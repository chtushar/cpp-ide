import React from 'react';
import styled from 'styled-components';
import IOHeader from './IOHeader';

const OutputAreaWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OutputAreaText = styled.textarea`
  flex-grow: 1;
  width: 100%;
  outline: none;
`;

const OutputArea = () => {
  return (
    <OutputAreaWrapper>
      <IOHeader message="Output" />
      <OutputAreaText disabled />
    </OutputAreaWrapper>
  );
};

export default OutputArea;
