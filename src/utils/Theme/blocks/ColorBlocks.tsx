import React, { FC } from 'react';
import chroma from 'chroma-js';
import { RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export interface ColorBlockProps {
  name: string;
  color: string;
  className?: string;
}

export const ColorBlock: FC<ColorBlockProps> = ({ name, color, className }) => (
  <div
    key={name}
    style={{
      border: 'solid 1px --border-color',
      borderRadius: '4px',
      overflow: 'hidden'
    }}
    className={className}
  >
    <div
      style={{
        padding: '20px',
        background: color,
        color: '#161616',
        borderBottom: 'solid 1px var(--border-color)'
      }}
    />
    <div
      style={{
        padding: '6px',
        fontSize: '12px'
      }}
    >
      <div>
        <code
          style={{ cursor: 'pointer' }}
          title={`Double click to copy ${name} to your clipboard`}
          onDoubleClick={() => navigator.clipboard.writeText(name)}
        >
          {name}
        </code>
      </div>
      <div>
        <code
          style={{ cursor: 'pointer' }}
          title={`Double click to copy ${color} to your clipboard`}
          onDoubleClick={() => navigator.clipboard.writeText(color)}
        >
          {color}
        </code>
      </div>
    </div>
  </div>
);

interface ColorPaletteBlockProps {
  name: string;
  color: string;
  className?: string;
  showName?: boolean;
}

export const ColorPaletteBlock: FC<ColorPaletteBlockProps> = ({
  name,
  color,
  className,
  showName = true
}) => {
  const valid = chroma.valid(color);
  const fontColor =
    valid && !name.includes('overlay')
      ? chroma(color).luminance() >= 0.3
        ? chroma(color).darken(100).css()
        : chroma(color).brighten(100).css()
      : 'var(--body-color)';

  return (
    <div
      key={name}
      className={className}
      style={{
        borderRight: 'solid 1px var(--border-color)'
      }}
    >
      <div
        style={{
          padding: '6px',
          background: color,
          height: '100%',
          minHeight: 50
        }}
      >
        {showName && (
          <div>
            <code
              style={{ cursor: 'pointer', color: fontColor, fontSize: '12px' }}
              title={`Double click to copy ${name} to your clipboard`}
              onDoubleClick={() => navigator.clipboard.writeText(name)}
            >
              {name}
            </code>
          </div>
        )}
        <div>
          <code
            style={{ cursor: 'pointer', color: fontColor, fontSize: '12px' }}
            title={`Double click to copy ${color} to your clipboard`}
            onDoubleClick={() => navigator.clipboard.writeText(color)}
          >
            {color}
          </code>
        </div>
      </div>
    </div>
  );
};

export interface ColorPaletteBlocksProps {
  name: string;
  colors: string | Record<string, string>;
  className?: string;
  token?: string | null;
  showNames?: boolean;
}

export const ColorPaletteBlocks: FC<ColorPaletteBlocksProps> = ({
  name,
  colors,
  className,
  showNames = true
}) => (
  <div
    className={className}
    style={{
      marginBottom: '24px'
    }}
  >
    <h3 style={{ fontWeight: 500, margin: 0 }}>{name}</h3>
    <div
      style={{
        display: 'grid',
        overflow: 'hidden',
        borderRadius: '6px',
        border: 'solid 1px var(--border-color)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
      }}
    >
      {typeof colors === 'string' && (
        <ColorBlock name={`${name}`} color={colors} showName={showNames} />
      )}
      {typeof colors === 'object' && (
        <>
          {Object.keys(colors).map(color => (
            <ColorPaletteBlock
              key={`${name}-${color}`}
              name={`${name}-${color}`}
              color={colors[color]}
              showName={showNames}
            />
          ))}
        </>
      )}
      {typeof colors === 'function' && (
        <ColorBlock
          name={`${name}`}
          color={(colors as any)({})}
          showName={showNames}
        />
      )}
    </div>
  </div>
);

export const ColorBlocks = ({
  colors
}: {
  colors: ResolvableTo<RecursiveKeyValuePair>;
}) => {
  return (
    <div
      style={{
        padding: '6px 12px',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {colors ? (
        <>
          {Object.keys(colors).map(key => (
            <ColorPaletteBlocks key={key} name={key} colors={colors[key]} />
          ))}
        </>
      ) : (
        <p>⚠️ No colors defined</p>
      )}
    </div>
  );
};
