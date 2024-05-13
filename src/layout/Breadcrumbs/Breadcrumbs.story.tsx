import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Components/Layout/Breadcrumbs',
  component: Breadcrumbs
};

export const Basic = () => (
  <Breadcrumbs
    breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/' },
      {
        label: 'Breadcrumbs',
        href: '/'
      }
    ]}
  />
);

export const WithCustomSeparator = () => (
  <Breadcrumbs
    seperator="/"
    breadcrumbs={[
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/' },
      {
        label: 'Breadcrumbs',
        href: '/'
      }
    ]}
  />
);
