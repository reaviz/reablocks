import React from 'react';
import { ReablocksTheme } from '@/utils/Theme/themes';
import { JsonTree } from '@/layout/Tree';

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
            <div key={key} className="pb-3">
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
              <JsonTree
                className="border border-gray-700 rounded"
                data={components[key]}
              />
            </div>
          ))}
        </>
      ) : (
        <p>⚠️ No components(s) defined</p>
      )}
    </div>
  );
};
