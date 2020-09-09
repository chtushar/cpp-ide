import React, { Fragment } from 'react';
import EditorHeader from './EditorHeader';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';

import { languageDefault } from '../../content/defaultValues';

const Editor_Wrapper = styled.div`
  width: 60%;
  height: 100%;
`;

const EditorWrapper = ({ editorTheme, setEditorTheme }) => {
  return (
    <Editor_Wrapper>
      <EditorHeader setEditorTheme={setEditorTheme} />
      <Editor
        width="100%"
        language="cpp"
        value={languageDefault['cpp']}
        theme={editorTheme}
      />
    </Editor_Wrapper>
  );
};

export default EditorWrapper;
