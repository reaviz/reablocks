import { ExternalDocs } from '@storybook/addon-docs';

import * as reactAnnotations from '@storybook/react/dist/entry-preview.mjs';
import * as previewAnnotations from '../.storybook/preview';

export default function Nextra({ Component, pageProps }) {
  return (
    <ExternalDocs projectAnnotationsList={[reactAnnotations, previewAnnotations]}>
      <Component {...pageProps} />
    </ExternalDocs>
  );
}
