import React, { useRef } from 'react';
import styled from 'styled-components';
import { IoIosPlay } from 'react-icons/io';

const EditorHeaderWrapper = styled.div`
  width: calc(100% + 1px);
  padding: 15px 1.5rem;
  background-color: #340068;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const RunButton = styled.button`
  padding: 8px 16px;
  background-color: #16db65;
  color: #ffffff;
  border: none;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    margin-right: 8px;
  }
`;

const SelectTheme = styled.select`
  width: 75px;
  margin-right: 16px;
  padding: 8px 8px;
  border-radius: 24px;
  color: white;
  background-color: #340050;
  border: none;
  outline: none;

  option {
    width: auto;
  }
`;

const EditorHeader = ({ setEditorTheme }) => {
  const select_theme = useRef(null);

  return (
    <EditorHeaderWrapper>
      <SelectTheme
        ref={select_theme}
        onChange={() => setEditorTheme(select_theme.current.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </SelectTheme>
      <RunButton>
        <span>Run</span>
        <IoIosPlay />
      </RunButton>
    </EditorHeaderWrapper>
  );
};

export default EditorHeader;
