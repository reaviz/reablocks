import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface DiffRenderProps {
  code: string;
  addedLines?: number[];
  removedLines?: number[];
}

const ThemeRender: React.FC<DiffRenderProps> = ({code, addedLines, removedLines}) => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{flex: 1, width: '100%', flexDirection: 'column'}}>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          showLineNumbers={true}
          wrapLines={true}
          lineProps={(lineNumber) => {
            let style = {display: 'block'} as any;
            if (addedLines.includes(lineNumber)) {
              style.backgroundColor = 'rgba(86,255,104,0.3)';
            } else if (removedLines.includes(lineNumber)) {
              style.backgroundColor = 'rgba(246,134,134,0.3)';
            }

            return {style};
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ThemeRender;
