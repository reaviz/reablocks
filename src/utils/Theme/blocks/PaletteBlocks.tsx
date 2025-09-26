import type { FC } from 'react';
import React from 'react';

import { ColorBlock } from './ColorBlocks';

export interface PaletteBlocksProps {
  palettes: Record<string, string>;
}

export const PaletteBlocks: FC<PaletteBlocksProps> = ({ palettes }) => (
  <div
    style={{
      padding: '4px 8px',
      color: 'var(--body-color)',
      width: '100%',
    }}
  >
    {Object.keys(palettes).map(key => (
      <div key={key}>
        <h3 style={{ fontWeight: 500, fontSize: '24px', margin: 0 }}>{key}</h3>
        <div
          style={{
            marginBottom: '20px',
            display: 'grid',
            gap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            borderRadius: '4px',
          }}
        >
          {Object.keys(palettes[key]).map(item => (
            <ColorBlock
              key={`${key}-${item}`}
              name={`${key}-${item}`}
              color={palettes![key][item]}
              className="rounded-sm border border-slate-500"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);
