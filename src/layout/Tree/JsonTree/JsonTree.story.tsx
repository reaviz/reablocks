import React from 'react';
import { JsonTree } from './JsonTree';

export default {
  title: 'Components/Layout/Tree/Json',
  components: JsonTree
};

const data = {
  name: 'John Doe',
  age: 30,
  over21: true,
  children: [
    { name: 'Jane Doe', age: 25 },
    { name: 'Jim Doe', age: 33 }
  ]
};

export const Simple = () => <JsonTree data={data} />;

export const Expanded = () => <JsonTree data={data} expandDepth={Infinity} />;
