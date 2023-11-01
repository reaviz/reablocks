import { Fragment } from 'react';
import { IconButton } from './IconButton';

export default {
  title: 'Components/Elements/IconButton',
  component: IconButton
};

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    viewBox="0 0 16 16"
  >
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
  </svg>
);

export const IconAndTextSizes = () => (
  <Fragment>
    <IconButton size="small" icon={<BellIcon />}>
      Small
    </IconButton>
    {` `}
    <IconButton size="medium" icon={<BellIcon />}>
      Medium
    </IconButton>
    {` `}
    <IconButton size="large" icon={<BellIcon />}>
      Large
    </IconButton>
  </Fragment>
);

export const IconAndTextPositions = () => (
  <Fragment>
    <IconButton size="medium" icon={<BellIcon />} direction="row">
      Text After Icon
    </IconButton>
    {` `}
    <IconButton size="medium" icon={<BellIcon />} direction="column">
      Text Below Icon
    </IconButton>
    {` `}
    <IconButton size="medium" icon={<BellIcon />} direction="rowReverse">
      Text Before Icon
    </IconButton>
    {` `}
    <IconButton size="medium" icon={<BellIcon />} direction="columnReverse">
      Text Above Icon
    </IconButton>
  </Fragment>
);

export const IconOnly = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="small" icon={<BellIcon />} />
    <IconButton size="medium" icon={<BellIcon />} />
    <IconButton size="large" icon={<BellIcon />} />
  </div>
);

export const IconButtonColors = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" icon={<BellIcon />} />
    <IconButton size="medium" color="primary" icon={<BellIcon />} />
    <IconButton size="medium" color="secondary" icon={<BellIcon />} />
    <IconButton size="medium" color="success" icon={<BellIcon />} />
    <IconButton size="medium" color="warning" icon={<BellIcon />} />
    <IconButton size="medium" color="error" icon={<BellIcon />} />
    <IconButton size="medium" disabled icon={<BellIcon />} />
  </div>
);

export const IconButtonVariants = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" icon={<BellIcon />} />
    <IconButton size="medium" variant="outline" icon={<BellIcon />} />
    <IconButton size="medium" variant="text" icon={<BellIcon />} />
  </div>
);
