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
    <PageTitle>default</PageTitle>
    <PageTitle fontWeight="thin">thin</PageTitle>
    <PageTitle fontWeight="normal">normal</PageTitle>
    <PageTitle fontWeight="bold">bold</PageTitle>
    <PageTitle fontWeight="extra-bold">extra-bold</PageTitle>
  </>
);
