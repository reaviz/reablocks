import React, { FC } from 'react';
import { useTheme } from '../ThemeContext';
import { camelToDash } from '../utils';

export interface TypographyLetterBlockProps {
  fontFamily: string;
  className?: string;
}

export const TypographyLetterBlock: FC<TypographyLetterBlockProps> = ({
  fontFamily,
  className
}) => (
  <div
    className={className}
    style={{
      fontFamily,
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'var(--spacing-lg)'
    }}
  >
    <div style={{ fontSize: 128 }}>Aa</div>
    <div
      style={{
        marginLeft: 'var(--spacing-lg)',
        paddingLeft: 'var(--spacing-lg)',
        fontSize: 22,
        borderLeft: 'solid 1px var(--slate-500)'
      }}
    >
      <h2 style={{ margin: 0 }}>{fontFamily}</h2>
      <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      <div>abcdefghijklmnopqrstuvwxyz</div>
      <div>{'1234567890 /&*()?<>+-=$@%!”[]{}'}</div>
    </div>
  </div>
);

export const TypographySizeBlock = ({ sizes, className }) => (
  <div className={className}>
    {Object.keys(sizes).map(size => (
      <div
        key={size}
        style={{
          fontSize: sizes[size],
          display: 'flex',
          alignItems: 'center',
          margin: 'var(--spacing-lg)'
        }}
      >
        <div
          style={{
            fontSize: 12,
            width: 110,
            marginRight: 'var(--spacing-md)',
            color: 'var(--body-color)'
          }}
        >
          <code
            style={{ cursor: 'pointer' }}
            onDoubleClick={() =>
              navigator.clipboard.writeText(`--font-size-${size}`)
            }
          >
            {sizes[size]}
          </code>
          <br />
          <small>
            <code
              style={{ cursor: 'pointer' }}
              onDoubleClick={() =>
                navigator.clipboard.writeText(`--font-size-${size}`)
              }
            >
              --font-size-{size}
            </code>
          </small>
        </div>
        The quick brown fox jumps over the lazy dog.
      </div>
    ))}
  </div>
);

export interface TypographyWeightBlockProps {
  weights: Record<string, number>;
  className?: string;
}

export const TypographyWeightBlock: FC<TypographyWeightBlockProps> = ({
  weights,
  className
}) => (
  <div
    className={className}
    style={{
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--border-radius-md)',
      border: 'solid 1px var(--slate-500)'
    }}
  >
    {Object.keys(weights).map((weight, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 'var(--spacing-lg)'
        }}
      >
        <code style={{ width: '25%', minWidth: 200 }}>
          <div style={{ fontSize: 'var(--font-size-md)' }}>
            {weights[weight]}
          </div>
          <span
            style={{ cursor: 'pointer' }}
            onDoubleClick={() =>
              navigator.clipboard.writeText(`--font-weight-${weight}`)
            }
          >
            --font-weight-{weight}
          </span>
        </code>
        <div style={{ fontWeight: weights[weight] }}>
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    ))}
  </div>
);

export const TypographyBlocks = () => {
  const {
    typography: { families, sizes, weights }
  } = useTheme();

  return (
    <div
      style={{
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      <h1>Typography</h1>
      <h2>Font Families</h2>
      {Object.keys(families).map(family => (
        <div
          key={family}
          style={{
            marginBottom: 'var(--spacing-xl)'
          }}
        >
          <h3 style={{ fontWeight: 500, fontSize: 'var(--font-size-lg)' }}>
            <small>
              <code>--{camelToDash(family)}</code>
            </small>
            <br />
          </h3>
          <div
            style={{
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)',
              border: 'solid 1px var(--slate-500)'
            }}
          >
            <TypographyLetterBlock fontFamily={families[family]} />
            <hr
              style={{
                background: 'none',
                border: 'none',
                borderTop: 'solid 1px var(--slate-500)'
              }}
            />
            <TypographySizeBlock sizes={sizes} />
          </div>
        </div>
      ))}
      {weights && (
        <>
          <h2>Font Weights</h2>
          <TypographyWeightBlock weights={weights} />
        </>
      )}
    </div>
  );
};
