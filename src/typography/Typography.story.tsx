import { Divider } from '@/layout';
import React from 'react';
import { Typography } from '@/typography/Typography';

export default {
  title: 'Components/Typography',
  component: Typography
};

export const Heading = () => (
  <div className="grid grid-cols-[50px_250px_1fr] gap-4 auto-rows-[40px] justify-center items-center">
    <Typography variant="h1">H1</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Regular | 40 / 48 / 0
    </Typography>
    <Typography variant="h1">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h1" size="medium" weight="medium">
      H1
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Medium | 40 / 48 / 0
    </Typography>
    <Typography variant="h1" size="medium" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h1" size="medium" weight="bold">
      H1
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Bold | 40 / 48 / 0
    </Typography>
    <Typography variant="h1" size="medium" weight="bold">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="h2">H2</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Regular | 32 / 36 / 0
    </Typography>
    <Typography variant="h2">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h2" size="medium" weight="medium">
      H2
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Medium | 32 / 36 / 0
    </Typography>
    <Typography variant="h2" size="medium" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h2" size="medium" weight="bold">
      H2
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Bold | 32 / 36 / 0
    </Typography>
    <Typography variant="h2" size="medium" weight="bold">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="h3">H3</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Regular | 28 / 32 / 0
    </Typography>
    <Typography variant="h3">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h3" size="medium" weight="medium">
      H3
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Medium | 28 / 32 / 0
    </Typography>
    <Typography variant="h3" size="medium" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h3" size="medium" weight="bold">
      H3
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Bold | 28 / 32 / 0
    </Typography>
    <Typography variant="h3" size="medium" weight="bold">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="h4">H4</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Regular | 24 / 28 / 0
    </Typography>
    <Typography variant="h4">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h4" size="medium" weight="medium">
      H4
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Medium | 24 / 28 / 0
    </Typography>
    <Typography variant="h4" size="medium" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h4" size="medium" weight="bold">
      H4
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Bold | 24 / 28 / 0
    </Typography>
    <Typography variant="h4" size="medium" weight="bold">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="h5">H5</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Regular | 20 / 24 / 0
    </Typography>
    <Typography variant="h5">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h5" size="medium" weight="medium">
      H5
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Medium | 20 / 24 / 0
    </Typography>
    <Typography variant="h5" size="medium" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h5" size="medium" weight="bold">
      H5
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Bold | 20 / 24 / 0
    </Typography>
    <Typography variant="h5" size="medium" weight="bold">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="h6">H6</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Regular | 16 / 24 / 0
    </Typography>
    <Typography variant="h6">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h6" size="medium" weight="medium">
      H6
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Medium | 16 / 24 / 0
    </Typography>
    <Typography variant="h6" size="medium" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="h6" size="medium" weight="bold">
      H6
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Proxima Nova | Bold | 16 / 24 / 0
    </Typography>
    <Typography variant="h6" size="medium" weight="bold">
      Quantum flux stabilizer online protocol
    </Typography>
  </div>
);

export const Body = () => (
  <div className="grid grid-cols-[150px_250px_1fr] gap-6 auto-rows-[20px] justify-center items-center">
    <Typography variant="body" size="large" weight="regular">
      Body Large
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Regular | 16 / 24 / 0
    </Typography>
    <Typography variant="body" size="large" weight="regular">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="body" size="large" weight="medium">
      Body Large
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Medium | 16 / 24 / 0
    </Typography>
    <Typography variant="body" size="large" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="body">Body Medium</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Regular | 14 / 18 / 0
    </Typography>
    <Typography variant="body">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="body" size="medium" weight="medium">
      Body Medium
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Medium | 14 / 18 / 0
    </Typography>
    <Typography variant="body" size="medium" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="body" size="small" weight="regular">
      Body Small
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Regular | 12 / 14 / 0
    </Typography>
    <Typography variant="body" size="small" weight="regular">
      Quantum flux stabilizer online protocol
    </Typography>
    <Typography variant="body" size="small" weight="medium">
      Body Small
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Medium | 12 / 14 / 0
    </Typography>
    <Typography variant="body" size="small" weight="medium">
      Quantum flux stabilizer online protocol
    </Typography>
  </div>
);

export const Button = () => (
  <div className="grid grid-cols-[150px_250px_1fr] gap-6 auto-rows-[20px] justify-center items-center">
    <Typography variant="button" size="large">
      Button Large
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Semi Bold | 16 / 24 / 0
    </Typography>
    <Typography variant="button" size="large">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="button" size="medium">
      Button Medium
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Semi Bold | 14 / 18 / 0
    </Typography>
    <Typography variant="button" size="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="button" size="small">
      Button Small
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Semi Bold | 12 / 14 / 0
    </Typography>
    <Typography variant="button" size="small">
      Quantum flux stabilizer online protocol
    </Typography>
  </div>
);

export const Label = () => (
  <div className="grid grid-cols-[150px_250px_1fr] gap-6 auto-rows-[20px] justify-center items-center">
    <Typography variant="label" size="large">
      Label Large
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Semi Bold | 14 / 14 / 0
    </Typography>
    <Typography variant="label" size="large">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="label" size="medium">
      Label Medium
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Semi Bold | 12 / 12 / 0
    </Typography>
    <Typography variant="label" size="medium">
      Quantum flux stabilizer online protocol
    </Typography>
    <Divider />
    <Divider />
    <Divider />
    <Typography variant="label" size="small">
      Label Small
    </Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Inter | Semi Bold | 10 / 12 / 0
    </Typography>
    <Typography variant="label" size="small">
      Quantum flux stabilizer online protocol
    </Typography>
  </div>
);

export const Monospace = () => (
  <div className="grid grid-cols-[150px_250px_1fr] gap-6 auto-rows-[20px] justify-center items-center">
    <Typography variant="monospace">Monospace</Typography>
    <Typography variant="label" size="medium" weight="bold" color="secondary">
      Share Tech Mono | Medium | 10 / 12 / 0
    </Typography>
    <Typography variant="monospace">
      Quantum flux stabilizer online protocol
    </Typography>
  </div>
);
