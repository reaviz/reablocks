import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReablocksTheme } from '../themes';

export const ComponentBlocks = ({
  components
}: {
  components: ReablocksTheme['components'];
}) => {
  return (
    <div
      style={{
        padding: '4px 8px',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {components ? (
        <>
          {Object.keys(components).map(key => (
            <div key={key}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  marginRight: 50,
                  marginBottom: '4px',
                  maxWidth: 300,
                  textTransform: 'capitalize'
                }}
              >
                {key}
              </h3>
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                className="highlighter"
              >
                {JSON.stringify(components[key], null, 2)}
              </SyntaxHighlighter>
            </div>
          ))}
        </>
      ) : (
        <p>⚠️ No components(s) defined</p>
      )}
    </div>
  );
};
