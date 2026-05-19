import React from 'react';
import { Ellipsis } from './Ellipsis';
import { P, H3, Muted, H4, Lead, Small, H5 } from '@/typography';

export default {
  title: 'Components/Data/Ellipsis',
  component: Ellipsis
};

const words = `Integer a aliquet ligula. Fusce vel eros libero. Sed dictum tincidunt hendrerit. Integer id neque faucibus, imperdiet purus dapibus, rutrum tellus. Nullam facilisis odio sit amet metus efficitur, varius pellentesque lectus placerat. Integer non magna in justo cursus vestibulum sit amet ut odio. Pellentesque consectetur volutpat lectus ut gravida. In in urna eu felis malesuada pretium.`;

export const Simple = () => <Ellipsis value={words} title={words} />;

export const Short = () => (
  <Ellipsis value="A short sentence." title="A short sentence." />
);

export const Unexpandable = () => (
  <Ellipsis expandable={false} value={words} title={words} />
);

export const Lines = () => (
  <div style={{ width: '250px' }}>
    <Ellipsis lines={3} value={words} title={words} />
  </div>
);

export const WithTypographyP = () => (
  <div style={{ width: '250px' }}>
    <Ellipsis lines={3} title={words}>
      <P>{words}</P>
    </Ellipsis>
  </div>
);

export const WithTypographyH4 = () => (
  <div style={{ width: '300px' }}>
    <Ellipsis lines={2} title={words}>
      <H4>{words}</H4>
    </Ellipsis>
  </div>
);

export const WithTypographyMuted = () => (
  <div style={{ width: '200px' }}>
    <Ellipsis lines={4} title={words}>
      <Muted>{words}</Muted>
    </Ellipsis>
  </div>
);

export const WithMixedTypography = () => (
  <div style={{ width: '400px' }}>
    <Ellipsis
      lines={4}
      title={`A complex React composition. This block consists of multiple typography components. ${words} End of the block.`}
    >
      <H5>A complex React composition.</H5>
      <Muted>
        This block consists of multiple typography components. {words}
      </Muted>
      <Small>End of the block.</Small>
    </Ellipsis>
  </div>
);

export const CharacterLimit = () => (
  <Ellipsis limit={80} value={words} title={words} />
);
