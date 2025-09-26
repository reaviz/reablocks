import chroma from 'chroma-js';
import type { FC } from 'react';
import React, { useMemo } from 'react';

export interface ColorBlockProps {
  name: string;
  color: string;
  className?: string;
}

const COLOR_TOKENS = [
  'white',
  'black',
  'neutrals',
  'blue',
  'green',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
];

export const ColorBlock: FC<ColorBlockProps> = ({ name, color, className }) => (
  <div
    key={name}
    style={{
      border: 'solid 1px --border-color',
      borderRadius: '4px',
      overflow: 'hidden',
    }}
    className={className}
  >
    <div
      style={{
        padding: '20px',
        background: color,
        color: '#161616',
        borderBottom: 'solid 1px var(--border-color)',
      }}
    />
    <div
      style={{
        padding: '6px',
        fontSize: '12px',
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
  theme: string;
}

export const ColorPaletteBlock: FC<ColorPaletteBlockProps> = ({
  name,
  color,
  className,
  showName = true,
  theme = 'dark',
}) => {
  let fontColor = 'var(--body-color)';
  if (!name.includes('overlay')) {
    const isOklch = color.trim().startsWith('oklch(');
    const oklchColor = isOklch
      ? color
          .replace('oklch(', '')
          .replace(')', '')
          .split(' ')
          .map(i => parseFloat(i))
      : null;
    const valid = isOklch ? chroma.oklch(oklchColor) : chroma.valid(color);

    if (valid) {
      const colorInstance = isOklch ? chroma.oklch(oklchColor) : chroma(color);
      const luminance = colorInstance.luminance();
      const alpha = colorInstance.alpha();
      const effectiveLuminance =
        alpha * luminance + (1 - alpha) * (theme === 'light' ? 1 : 0);

      fontColor =
        effectiveLuminance > 0.5 ? 'var(--color-black)' : 'var(--color-white)';
    }
  }

  return (
    <div
      key={name}
      className={className}
      style={{
        border: 'solid 1px var(--border-color)',
        margin: '-0.5px',
      }}
    >
      <div
        style={{
          padding: '6px',
          background: color,
          height: '100%',
          minHeight: 50,
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
  theme: string;
}

const extractColorName = (colorToken: string): string => {
  const withoutPrefix = colorToken.replace('--color-', '');
  return withoutPrefix.replace(/-\d+$/, '');
};

export const ColorPaletteBlocks: FC<ColorPaletteBlocksProps> = ({
  name,
  colors,
  className,
  showNames = true,
  theme,
}) => (
  <div
    className={className}
    style={{
      marginBottom: '24px',
    }}
  >
    <h3 style={{ textTransform: 'capitalize', fontWeight: 500, margin: 0 }}>
      {name}
    </h3>
    <div
      style={{
        display: 'grid',
        overflow: 'hidden',
        borderRadius: '6px',
        border: 'solid 1px var(--border-color)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      }}
    >
      {typeof colors === 'string' && (
        <ColorBlock name={`${name}`} color={colors} />
      )}
      {typeof colors === 'object' && (
        <>
          {Object.keys(colors).map(color => (
            <ColorPaletteBlock
              key={color}
              name={color.replace('--color-', '')}
              color={colors[color]}
              showName={showNames}
              theme={theme}
            />
          ))}
        </>
      )}
      {typeof colors === 'function' && (
        <ColorBlock name={`${name}`} color={(colors as any)({})} />
      )}
    </div>
  </div>
);

export const ColorBlocks = ({
  colors,
  theme,
}: {
  colors: Record<string, string>;
  theme: string;
}) => {
  const groupedColors = useMemo((): Record<string, Record<string, string>> => {
    const groups = Object.keys(colors).reduce(
      (acc, token) => {
        const match = token.match(/^--(?:color-)?([^-]+)(?:-|$)/);
        const groupName = match ? match[1] : token;
        if (!acc[groupName]) {
          acc[groupName] = {};
        }
        acc[groupName][token] = colors[token];
        return acc;
      },
      {} as Record<string, Record<string, string>>,
    );

    const sortedGroupNames = Object.keys(groups).sort((a, b) => {
      const indexA = COLOR_TOKENS.indexOf(a);
      const indexB = COLOR_TOKENS.indexOf(b);

      const aIsColor = indexA !== -1;
      const bIsColor = indexB !== -1;

      // Both are colors → sort by token order
      if (aIsColor && bIsColor) {
        return indexA - indexB;
      }

      // Only A is a color → A comes first
      if (aIsColor) return -1;

      // Only B is a color → B comes first
      if (bIsColor) return 1;

      return a.localeCompare(b); // both are non-color → sort alphabetically
    });

    return sortedGroupNames.reduce(
      (sorted, groupName) => {
        sorted[groupName] = groups[groupName];
        return sorted;
      },
      {} as Record<string, Record<string, string>>,
    );
  }, [colors]);

  return (
    <div
      style={{
        padding: '6px 12px',
        color: 'var(--body-color)',
        width: '100%',
      }}
    >
      {groupedColors ? (
        <>
          {Object.keys(groupedColors).map(key => (
            <ColorPaletteBlocks
              key={key}
              name={extractColorName(key)}
              colors={groupedColors[key]}
              theme={theme}
            />
          ))}
        </>
      ) : (
        <p>⚠️ No colors defined</p>
      )}
    </div>
  );
};
