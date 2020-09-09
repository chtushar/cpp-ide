import React from 'react';
import EditorHeader from './EditorHeader';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';

import { languageDefault } from '../../content/defaultValues';

const EditorWrapperWrapper = styled.div`
  width: 60%;
  height: 100%;
`;

const EditorWrapper = ({ editorTheme, setEditorTheme }) => {
  return (
    <EditorWrapperWrapper>
      <EditorHeader setEditorTheme={setEditorTheme} />
      <Editor
        height="100%"
        width="100%"
        language="cpp"
        value={languageDefault['cpp']}
        theme={editorTheme}
      />
    </EditorWrapperWrapper>
  );
};

export default EditorWrapper;
