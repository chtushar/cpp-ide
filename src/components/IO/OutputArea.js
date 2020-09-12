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
  overflow-y: scroll;
`;

const OutputArea = ({ outputValue }) => {
  return (
    <OutputAreaWrapper>
      <IOHeader message="Output" />
      <OutputAreaText disabled value={outputValue} />
    </OutputAreaWrapper>
  );
};

export default OutputArea;
