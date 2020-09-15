import React, { useState, useRef } from 'react';
import EditorHeader from './EditorHeader';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';

const EditorWrapperWrapper = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 600px) {
    width: 100%;
    height: 40%;
  }
`;

const EditorWrapper = ({ editorTheme, setEditorTheme, code, handleRun }) => {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();

  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  function handleClick() {
    handleRun(valueGetter.current());
  }

  return (
    <EditorWrapperWrapper>
      <EditorHeader setEditorTheme={setEditorTheme} handleClick={handleClick} />
      <Editor
        height="100%"
        width="100%"
        language="cpp"
        theme={editorTheme}
        value={code}
        editorDidMount={handleEditorDidMount}
      />
    </EditorWrapperWrapper>
  );
};

export default EditorWrapper;
