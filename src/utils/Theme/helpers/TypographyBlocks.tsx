import React, { FC } from 'react';

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
      marginLeft: '20px'
    }}
  >
    <div style={{ fontSize: 128 }}>Aa</div>
    <div
      style={{
        marginLeft: '20px',
        paddingLeft: '20px',
        fontSize: 22,
        borderLeft: 'solid 1px var(--border-color)'
      }}
    >
      <h2 style={{ margin: 0 }}>{fontFamily}</h2>
      <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      <div>abcdefghijklmnopqrstuvwxyz</div>
      <div>{'1234567890 /&*()?<>+-=$@%!”[]{}'}</div>
    </div>
  </div>
);

export interface TypographySizeBlockProps {
  sizes: any;
  className?: string;
}

export const TypographySizeBlock: FC<TypographySizeBlockProps> = ({
  sizes,
  className
}) => (
  <div className={className}>
    {Object.keys(sizes).map(size => (
      <div
        key={size}
        style={{
          fontSize: sizes[size][0],
          lineHeight: sizes[size][1].lineHeight,
          display: 'flex',
          alignItems: 'center',
          margin: '20px'
        }}
      >
        <div
          style={{
            fontSize: 16,
            minWidth: 110,
            marginRight: '6px',
            color: 'var(--body-color)'
          }}
        >
          <code
            style={{ cursor: 'pointer', fontSize: 14 }}
            onDoubleClick={() => navigator.clipboard.writeText(`font-${size}`)}
          >
            font-{size}
          </code>
          <br />
          <small>
            <code
              style={{ cursor: 'pointer' }}
              onDoubleClick={() =>
                navigator.clipboard.writeText(sizes[size][0])
              }
            >
              {sizes[size][0]}
            </code>
          </small>
        </div>
        The quick brown fox jumps over the lazy dog.
      </div>
    ))}
  </div>
);

export interface TypographyWeightBlockProps {
  weights: any;
  className?: string;
}

export const TypographyWeightBlock: FC<TypographyWeightBlockProps> = ({
  weights,
  className
}) => (
  <div
    className={className}
    style={{
      padding: '6px',
      borderRadius: '6px',
      border: 'solid 1px var(--border-color)'
    }}
  >
    {Object.keys(weights).map((weight, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px'
        }}
      >
        <code style={{ width: '25%', minWidth: 200 }}>
          <span
            style={{ fontSize: '16px', cursor: 'pointer' }}
            onDoubleClick={() =>
              navigator.clipboard.writeText(`font-${weight}`)
            }
          >
            font-{weight}
          </span>
          <br />
          <div
            style={{ fontSize: '14px', cursor: 'pointer' }}
            onDoubleClick={() => navigator.clipboard.writeText(weights[weight])}
          >
            {weights[weight]}
          </div>
        </code>
        <div style={{ fontWeight: weights[weight] }}>
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    ))}
  </div>
);

export const TypographyBlocks = ({ families, sizes, weights }) => {
  return (
    <div
      style={{
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>
        Typography
      </h1>
      <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Font Families</h2>
      <br />
      {Object.keys(families).map(family => (
        <div
          key={family}
          style={{
            marginBottom: '24px'
          }}
        >
          <h3 style={{ fontWeight: 600, fontSize: '20px' }}>
            <small>
              <code>font-{family}</code>
            </small>
            <br />
          </h3>
          <div
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: 'solid 1px var(--border-color)'
            }}
          >
            <TypographyLetterBlock fontFamily={families[family]} />
            <hr
              style={{
                background: 'none',
                border: 'none',
                borderTop: 'solid 1px var(--border-color)'
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
