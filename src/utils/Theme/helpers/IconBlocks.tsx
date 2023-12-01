import React, { FC, Suspense } from 'react';

export interface IconBlockProps {
  name: string;
  component?: any;
  src?: any;
  className?: string;
}

export const IconBlock: FC<IconBlockProps> = ({
  name,
  src,
  className,
  component: Component
}) => (
  <div
    className={className}
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
        <img
          src={src}
          style={{ width: 25, height: 25, marginBottom: 'var(--spacing-md)' }}
        />
      ) : (
        <Component
          style={{ width: 25, height: 25, marginBottom: 'var(--spacing-md)' }}
        />
      )}
      <div>{name}</div>
    </Suspense>
  </div>
);

export interface IconBlocksProps {
  icons: IconBlockProps[];
  className?: string;
}

export const IconBlocks: FC<IconBlocksProps> = ({ icons, className }) => (
  <div
    style={{
      display: 'grid',
      gridGap: 'var(--spacing-lg)',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      justifyItems: 'stretch'
    }}
    className={className}
  >
    {icons.map(key => (
      <IconBlock key={key.name} {...key} />
    ))}
  </div>
);
