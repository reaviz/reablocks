import React from 'react';
import { ReablocksTheme } from '@/utils/Theme/themes';
import { JsonTree } from '@/layout/Tree';
import { Button } from '@/elements';
import { Notifications, NotificationsContext } from '@/layers';

export const ComponentBlocks = ({
  components
}: {
  components: ReablocksTheme['components'];
}) => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notifySuccess }) => (
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
                <div key={key} className="mb-3 relative">
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
                    className="border border-gray-700 rounded p-3"
                    expandDepth={Infinity}
                    data={components[key]}
                  />
                  <Button
                    size="small"
                    color="secondary"
                    variant="outline"
                    className="absolute right-0 bottom-0 text-xs"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(
                          JSON.stringify(components[key], null, 2)
                        );
                        notifySuccess('Content copied to clipboard');
                      } catch (err) {
                        console.error('Failed to copy: ', err);
                      }
                    }}
                  >
                    Copy Code
                  </Button>
                </div>
              ))}
            </>
          ) : (
            <p>⚠️ No components(s) defined</p>
          )}
        </div>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);
