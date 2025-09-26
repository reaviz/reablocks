import React from 'react';

import { Block } from './Block';

export default {
  title: 'Components/Layout/Block',
  component: Block,
};

export const Labelless = () => (
  <>
    <Block>
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Block>
    <Block>
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Block>
  </>
);

export const Label = () => (
  <>
    <Block label="Haxor">
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Block>
    <Block label="Manifest">
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Block>
  </>
);

export const Required = () => (
  <Block label="Name" required={true}>
    Haxx0r ipsum else break headers private dereference.
  </Block>
);

export const Alignment = () => (
  <>
    <h2>Start</h2>
    <Block
      label="Name"
      required={true}
      alignment="start"
      direction="horizontal"
    >
      Haxx0r ipsum else break headers private dereference. Haxx0r ipsum else
      break headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference.
    </Block>
    <h2>Center</h2>
    <Block
      label="Name"
      required={true}
      alignment="center"
      direction="horizontal"
    >
      Haxx0r ipsum else break headers private dereference. Haxx0r ipsum else
      break headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference.
    </Block>
    <h2>End</h2>
    <Block label="Name" required={true} alignment="end" direction="horizontal">
      Haxx0r ipsum else break headers private dereference. Haxx0r ipsum else
      break headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference.
    </Block>
  </>
);

export const Horizontal = () => (
  <Block label="Name" direction="horizontal" required={true}>
    Haxx0r ipsum else break headers private dereference.
  </Block>
);
