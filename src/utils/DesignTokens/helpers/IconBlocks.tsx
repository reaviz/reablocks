import React, { FC, Suspense } from 'react';

export interface IconBlockProps {
  name: string;
  component?: any;
  src?: any;
}

export const IconBlock: FC<IconBlockProps> = ({
  name,
  src,
  component: Component
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'var(--spacing-md)',
      fontFamily: 'var(--font-family)',
      background: 'var(--icon-block-background)',
      color: 'var(--icon-block-color)',
      textAlign: 'center',
      fontSize: '12px',
      borderRadius: 'var(--border-radius-md)',
      height: 75
    }}
  >
    <Suspense fallback={null}>
      {src ? (
        <img src={src} style={{ width: 25, height: 25, marginBottom: 5 }} />
      ) : (
        <Component style={{ width: 25, height: 25, marginBottom: 5 }} />
      )}
      <div>{name}</div>
    </Suspense>
  </div>
);

export interface IconBlocksProps {
  icons: IconBlockProps[];
}

export const IconBlocks: FC<IconBlocksProps> = ({ icons }) => (
  <div
    style={{
      display: 'grid',
      gridGap: '15px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      justifyItems: 'stretch'
    }}
  >
    {icons.map(key => (
      <IconBlock key={key.name} {...key} />
    ))}
  </div>
);
