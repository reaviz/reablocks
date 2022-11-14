import React from 'react';
import { Ellipsis } from './Ellipsis';

export default {
  title: 'Data/Ellipsis',
  component: Ellipsis
};

const words = `Integer a aliquet ligula. Fusce vel eros libero. Sed dictum tincidunt hendrerit. Integer id neque faucibus, imperdiet purus dapibus, rutrum tellus. Nullam facilisis odio sit amet metus efficitur, varius pellentesque lectus placerat. Integer non magna in justo cursus vestibulum sit amet ut odio. Pellentesque consectetur volutpat lectus ut gravida. In in urna eu felis malesuada pretium.`;

export const Simple = () => <Ellipsis value={words} />;

export const Short = () => <Ellipsis value="A short sentence." />;

export const Unexpandable = () => <Ellipsis expandable={false} value={words} />;
