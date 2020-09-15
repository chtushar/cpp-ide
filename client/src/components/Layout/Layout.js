import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { languageDefault } from '../../content/defaultValues';
import EditorWrapper from '../Editor/EditorWrapper';
import InputArea from '../IO/InputArea';
import OutputArea from '../IO/OutputArea';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    height: 200%;
    flex-direction: column;
  }
`;

const IOWrapper = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Layout = ({ URL }) => {
  const [editorTheme, setEditorTheme] = useState('dark');
  const [code, setCode] = useState(languageDefault['cpp']);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  async function handleRun(_code) {
    setCode(_code);
    await axios
      .post(`${URL}/api/`, {
        code: _code,
        input: inputValue,
      })
      .then(({ data }) => {
        if (data.stderr) {
          setOutputValue(data.stderr);
          return;
        }
        setOutputValue(data.stdout);
      })
      .catch((err) => {
        setOutputValue('There is a server issue!');
      });
  }

  return (
    <LayoutWrapper>
      <EditorWrapper
        editorTheme={editorTheme}
        setEditorTheme={setEditorTheme}
        inputValue={inputValue}
        code={code}
        handleRun={handleRun}
      />
      <IOWrapper>
        <InputArea inputValue={inputValue} setInputValue={setInputValue} />
        <OutputArea outputValue={outputValue} />
      </IOWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
