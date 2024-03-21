import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ThemeRenderProps {
  theme: any;
}

const ThemeRender: FC<ThemeRenderProps> = ({ theme }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dracula} className="highlighter">
      {JSON.stringify(theme, null, 2)}
    </SyntaxHighlighter>
  );
};

export default ThemeRender;
