import React, { FC } from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  P,
  BlockQuote,
  Lead,
  Large,
  Small,
  Muted
} from '@/typography';

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
      <div>{'1234567890 /&*()?<>+-=$@%!"[]{}'}</div>
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
    {Object.keys(sizes)
      .filter(size => !size.endsWith('--line-height'))
      .map(size => (
        <div
          key={size}
          style={{
            fontSize: sizes[size],
            lineHeight: sizes[`${size}-line-height`],
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
              onDoubleClick={() => navigator.clipboard.writeText(size)}
            >
              {size.replace('--', '')}
            </code>
            <br />
            <small>
              <code
                style={{ cursor: 'pointer' }}
                onDoubleClick={() =>
                  navigator.clipboard.writeText(sizes[size][0])
                }
              >
                {sizes[size]}
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
            {weight.replace('--', '').replace('-weight', '')}
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

export const TypographyComponentsBlock: FC = () => (
  <div style={{ maxWidth: '720px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '16px' }}>
      Components
    </h2>
    <div
      style={{
        padding: '24px',
        borderRadius: '8px',
        border: 'solid 1px var(--border-color)',
        marginBottom: '24px'
      }}
    >
      <H1>H1: The quick brown fox</H1>
      <Muted>text-4xl font-extrabold tracking-tight text-balance</Muted>
      <div style={{ height: '16px' }} />
      <H2 className="border-0">H2: The quick brown fox</H2>
      <Muted>border-b pb-2 text-3xl font-semibold tracking-tight</Muted>
      <div style={{ height: '16px' }} />
      <H3>H3: The quick brown fox</H3>
      <Muted>text-2xl font-semibold tracking-tight</Muted>
      <div style={{ height: '16px' }} />
      <H4>H4: The quick brown fox</H4>
      <Muted>text-xl font-semibold tracking-tight</Muted>
    </div>
    <div
      style={{
        padding: '24px',
        borderRadius: '8px',
        border: 'solid 1px var(--border-color)',
        marginBottom: '24px'
      }}
    >
      <P>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester began sneaking into the
        castle in the middle of the night and telling jokes to the king.
      </P>
      <P>
        The people of the kingdom once again could freely exchange jokes and
        laughter, and the land was filled with joy and mirth once more.
      </P>
    </div>
    <div
      style={{
        padding: '24px',
        borderRadius: '8px',
        border: 'solid 1px var(--border-color)',
        marginBottom: '24px'
      }}
    >
      <BlockQuote>
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </BlockQuote>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      <div
        style={{
          padding: '24px',
          borderRadius: '8px',
          border: 'solid 1px var(--border-color)'
        }}
      >
        <Large>Large Text</Large>
        <Muted>text-lg font-semibold</Muted>
      </div>
      <div
        style={{
          padding: '24px',
          borderRadius: '8px',
          border: 'solid 1px var(--border-color)'
        }}
      >
        <Lead>Lead text for introductions and summaries.</Lead>
        <Muted>text-xl text-text-secondary</Muted>
      </div>
      <div
        style={{
          padding: '24px',
          borderRadius: '8px',
          border: 'solid 1px var(--border-color)'
        }}
      >
        <Small>Small Text</Small>
        <Muted>text-sm leading-none font-medium</Muted>
      </div>
      <div
        style={{
          padding: '24px',
          borderRadius: '8px',
          border: 'solid 1px var(--border-color)'
        }}
      >
        <Muted>Muted text for secondary information.</Muted>
      </div>
    </div>
  </div>
);

export const TypographyBlocks = ({
  families,
  sizes,
  weights
}: {
  families: Record<string, string>;
  sizes: Record<string, string>;
  weights: Record<string, string>;
}) => (
  <div
    style={{
      color: 'var(--body-color)',
      width: '100%'
    }}
  >
    <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>
      Typography
    </h1>
    <TypographyComponentsBlock />
    <br />
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
            <code>{family.replace('--font-', '')}</code>
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
