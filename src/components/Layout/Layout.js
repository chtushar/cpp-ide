import Editor from '@monaco-editor/react';
import React from 'react';
import styled from 'styled-components';
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

const Layout = ({ editorTheme, setEditorTheme }) => {
  return (
    <LayoutWrapper>
      <EditorWrapper
        editorTheme={editorTheme}
        setEditorTheme={setEditorTheme}
      />
      <IOWrapper>
        <InputArea />
        <OutputArea />
      </IOWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
