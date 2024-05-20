import React, { useState } from 'react';
import { Button } from '../../elements';
import { NotificationDialog } from './NotificationDialog';

export default {
  title: 'Components/Layers/Notification Dialog',
  component: NotificationDialog
};

export const Placement = () => {
  const [placement, setPlacement] = useState(null);

  return (
    <div className="flex flex-row gap-2">
      <Button onClick={() => setPlacement('top')}>Top</Button>
      <Button onClick={() => setPlacement('top-right')}>Top Right</Button>
      <Button onClick={() => setPlacement('top-left')}>Top Left</Button>
      <Button onClick={() => setPlacement('bottom')}>Bottom</Button>
      <Button onClick={() => setPlacement('bottom-right')}>Bottom Right</Button>
      <Button onClick={() => setPlacement('bottom-left')}>Bottom Left</Button>
      <NotificationDialog
        open={Boolean(placement)}
        header="Notification"
        placement={placement}
        onSubmit={() => setPlacement(null)}
        onClose={() => setPlacement(null)}
        onCancel={() => setPlacement(null)}
      >
        This is notification text. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </NotificationDialog>
    </div>
  );
};

export const Variants = () => {
  const [variant, setVariant] = useState(null);

  return (
    <div className="flex flex-row gap-2">
      <Button onClick={() => setVariant('Default')}>Default</Button>
      <Button onClick={() => setVariant('Success')}>Success</Button>
      <Button onClick={() => setVariant('Warning')}>Warning</Button>
      <Button onClick={() => setVariant('Error')}>Error</Button>
      <Button onClick={() => setVariant('Info')}>Info</Button>
      <NotificationDialog
        open={Boolean(variant)}
        header={variant}
        placement="bottom-right"
        variant={variant?.toLowerCase()}
        onSubmit={() => setVariant(null)}
        onClose={() => setVariant(null)}
        onCancel={() => setVariant(null)}
      >
        This is notification text. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </NotificationDialog>
    </div>
  );
};

export const Custom = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row gap-2">
      <Button onClick={() => setOpen(true)}>Custom</Button>
      <NotificationDialog
        header={<div className="text-error">Custom header</div>}
        footer={<div className="text-success">Custom footer</div>}
        open={open}
        placement="bottom-right"
        onSubmit={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        This is notification text. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </NotificationDialog>
    </div>
  );
};
