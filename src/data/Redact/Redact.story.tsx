import { Redact } from './Redact';

export default {
  title: 'Components/Data/Redact',
  component: Redact,
};

export const Basic = () => <Redact value="SuperSecretText" />;

export const LongText = () => (
  <Redact value="SuperSecretTextSuperSecretTextSuperSecretTextSuperSecretTextSuperSecretTextSuperSecretTextSuperSecretTextSuperSecretText" />
);

export const NoToggle = () => (
  <Redact value="SuperSecretText!!" allowToggle={false} />
);
