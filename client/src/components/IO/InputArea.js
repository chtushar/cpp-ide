import React from 'react';
import styled from 'styled-components';
import IOHeader from './IOHeader';

const InputAreaWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputAreaText = styled.textarea`
  flex-grow: 1;
  width: 100%;
  outline: none;
`;

const InputArea = ({ inputValue, setInputValue }) => {
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <InputAreaWrapper>
      <IOHeader message="Input" />
      <InputAreaText onChange={handleInput} value={inputValue} />
    </InputAreaWrapper>
  );
};

export default InputArea;
