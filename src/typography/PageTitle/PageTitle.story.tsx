import { PageTitle } from './PageTitle';

export default {
  title: 'Components/Typography/PageTitle',
  component: PageTitle
};

export const Simple = () => <PageTitle>Hello world</PageTitle>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <PageTitle>Default</PageTitle>
    <PageTitle color="primary">Primary</PageTitle>
    <PageTitle color="secondary">Secondary</PageTitle>
    <PageTitle color="error">Error</PageTitle>
    <PageTitle color="success">Success</PageTitle>
    <PageTitle color="warning">Warning</PageTitle>
    <PageTitle color="info">Info</PageTitle>
  </div>
);

export const NoMargins = () => (
  <>
    <PageTitle disableMargins>Hello world</PageTitle>
    <PageTitle disableMargins>Hello world</PageTitle>
  </>
);

export const Monospace = () => (
  <PageTitle variant="mono">Hello world</PageTitle>
);

export const Weights = () => (
  <>
    <PageTitle>Default - Hello world</PageTitle>
    <PageTitle fontWeight={100}>100 - Hello world</PageTitle>
    <PageTitle fontWeight={200}>200 - Hello world</PageTitle>
    <PageTitle fontWeight={300}>300 - Hello world</PageTitle>
    <PageTitle fontWeight={400}>400 - Hello world</PageTitle>
    <PageTitle fontWeight={500}>500 - Hello world</PageTitle>
    <PageTitle fontWeight={600}>600 - Hello world</PageTitle>
    <PageTitle fontWeight={700}>700 - Hello world</PageTitle>
    <PageTitle fontWeight={800}>800 - Hello world</PageTitle>
    <PageTitle fontWeight={900}>900 - Hello world</PageTitle>
  </>
);
