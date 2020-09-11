import React, { useState } from 'react';
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
`;

const IOWrapper = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Layout = () => {
  const [editorTheme, setEditorTheme] = useState('dark');
  const [code, setCode] = useState(languageDefault['cpp']);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  function handleRun(_code) {
    setCode(_code);
    console.log(_code);
    console.log(inputValue);
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
