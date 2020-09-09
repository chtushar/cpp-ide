import Editor from '@monaco-editor/react';
import React from 'react';
import styled from 'styled-components';
import EditorWrapper from '../Editor/EditorWrapper';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ editorTheme, setEditorTheme }) => {
  return (
    <LayoutWrapper>
      <EditorWrapper
        editorTheme={editorTheme}
        setEditorTheme={setEditorTheme}
      />
    </LayoutWrapper>
  );
};

export default Layout;
