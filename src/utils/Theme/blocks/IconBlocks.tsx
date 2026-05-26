import React, { FC, Suspense } from 'react';

export interface IconBlockProps {
  /** Display name of the icon. */
  name: string;
  /** React component used to render the icon. */
  component?: any;
  /** Image source URL used to render the icon when no component is provided. */
  src?: any;
  /** Additional class names applied to the block. */
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
  /** Collection of icons to display in the grid. */
  icons: IconBlockProps[];
  /** Additional class names applied to the grid. */
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
