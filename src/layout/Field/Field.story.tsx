import { Field } from './Field';
import React from 'react';

export default {
  title: 'Components/Layout/Field',
  component: Field
};

export const Labelless = () => (
  <>
    <Field>
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Field>
    <Field>
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Field>
  </>
);

export const Label = () => (
  <>
    <Field label="Haxor">
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Field>
    <Field label="Manifest">
      Haxx0r ipsum else break headers private dereference bin race condition bit
      continue emacs public todo buffer ip mailbomb void strlen leapfrog.
    </Field>
  </>
);

export const Required = () => (
  <Field label="Name" required={true}>
    Haxx0r ipsum else break headers private dereference.
  </Field>
);

export const Alignment = () => (
  <>
    <h2>Start</h2>
    <Field
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
    </Field>
    <h2>Center</h2>
    <Field
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
    </Field>
    <h2>End</h2>
    <Field label="Name" required={true} alignment="end" direction="horizontal">
      Haxx0r ipsum else break headers private dereference. Haxx0r ipsum else
      break headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference. Haxx0r ipsum else break headers private
      dereference. Haxx0r ipsum else break headers private dereference. Haxx0r
      ipsum else break headers private dereference. Haxx0r ipsum else break
      headers private dereference.
    </Field>
  </>
);

export const Horizontal = () => (
  <Field label="Name" direction="horizontal" required={true}>
    Haxx0r ipsum else break headers private dereference.
  </Field>
);
