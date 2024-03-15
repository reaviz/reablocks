import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ThemeRenderProps {
  theme;
}

const ThemeRender: React.FC<ThemeRenderProps> = ({ theme }) => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {JSON.stringify(theme, null, 2)}
    </SyntaxHighlighter>
  );
};

export default ThemeRender;
