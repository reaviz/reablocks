import React from 'react';
import { useDts } from '../DesignTokensContext';
import { camelToDash } from '../utils';

export const TypographyLetterBlock = ({ fontFamily }) => (
  <div
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

export const TypographySizeBlock = ({ sizes }) => (
  <div>
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
            color: 'var(--gray-900)',
            fontSize: 12,
            width: 110,
            marginRight: 'var(--spacing-md)'
          }}
        >
          {sizes[size]}
          <br />
          <small>
            <code>--font-size-{size}</code>
          </small>
        </div>
        The quick brown fox jumps over the lazy dog.
      </div>
    ))}
  </div>
);

export const TypographyBlocks = () => {
  const {
    typography: { families, sizes }
  } = useDts();

  return (
    <div
      style={{
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {Object.keys(families).map(family => (
        <div
          key={family}
          style={{
            marginBottom: 'var(--spacing-xl)'
          }}
        >
          <h3 style={{ fontWeight: 500 }}>
            {families[family]}
            <br />
            <small>
              <code>--{camelToDash(family)}</code>
            </small>
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
    </div>
  );
};
