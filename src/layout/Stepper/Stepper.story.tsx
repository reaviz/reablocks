import { Stepper } from '@/layout';
import { Step } from './Step';

export default {
  title: 'Components/Layout/Stepper',
  component: Stepper
};

export const Markers = () => (
  <Stepper activeStep={2}>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin{' '}
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            created ticket
          </span>
        </span>
      </div>
    </Step>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          Backlog
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          In Progress
        </span>
        <div className="px-4 py-2 border border-solid border-tags-colors-neutral-stroke-hover bg-inputs-colors-normal-background-resting rounded-md">
          This looks fine, might've missed it but maybe we can add a link to the
          website where we also have the video of how to use the plug in?
          Otherwise this is a nice addition.
        </div>
      </div>
    </Step>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          In Progress
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          Done
        </span>
      </div>
    </Step>
  </Stepper>
);

export const Numbered = () => (
  <Stepper variant="numbered" activeStep={2}>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin{' '}
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            created ticket
          </span>
        </span>
      </div>
    </Step>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          Backlog
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          In Progress
        </span>
        <div className="px-4 py-2 border border-solid border-tags-colors-neutral-stroke-hover bg-inputs-colors-normal-background-resting rounded-md">
          This looks fine, might've missed it but maybe we can add a link to the
          website where we also have the video of how to use the plug in?
          Otherwise this is a nice addition.
        </div>
      </div>
    </Step>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          In Progress
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          Done
        </span>
      </div>
    </Step>
  </Stepper>
);

export const Labels = () => (
  <Stepper activeStep={2}>
    <Step label="v6.8">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin{' '}
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            created ticket
          </span>
        </span>
      </div>
    </Step>
    <Step label="v6.9">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          Backlog
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          In Progress
        </span>
        <div className="px-4 py-2 border border-solid border-tags-colors-neutral-stroke-hover bg-inputs-colors-normal-background-resting rounded-md">
          This looks fine, might've missed it but maybe we can add a link to the
          website where we also have the video of how to use the plug in?
          Otherwise this is a nice addition.
        </div>
      </div>
    </Step>
    <Step label="v7.0">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          In Progress
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          Done
        </span>
      </div>
    </Step>
  </Stepper>
);

export const Mixed = () => (
  <Stepper activeStep={3}>
    <Step label="v6.8">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin{' '}
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            created ticket
          </span>
        </span>
      </div>
    </Step>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          Backlog
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          In Progress
        </span>
        <div className="px-4 py-2 border border-solid border-tags-colors-neutral-stroke-hover bg-inputs-colors-normal-background-resting rounded-md">
          This looks fine, might've missed it but maybe we can add a link to the
          website where we also have the video of how to use the plug in?
          Otherwise this is a nice addition.
        </div>
      </div>
    </Step>
    <Step label="v7.0">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          In Progress
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          Done
        </span>
      </div>
    </Step>
  </Stepper>
);

export const Animated = () => (
  <Stepper animated activeStep={2}>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin{' '}
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            created ticket
          </span>
        </span>
      </div>
    </Step>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          Backlog
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          In Progress
        </span>
        <div className="px-4 py-2 border border-solid border-tags-colors-neutral-stroke-hover bg-inputs-colors-normal-background-resting rounded-md">
          This looks fine, might've missed it but maybe we can add a link to the
          website where we also have the video of how to use the plug in?
          Otherwise this is a nice addition.
        </div>
      </div>
    </Step>
    <Step>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
          03/01/2024, 8:00 AM
        </span>
        <span>
          Austin
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            changed statues from{' '}
          </span>
          In Progress
          <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
            {' '}
            to{' '}
          </span>
          Done
        </span>
      </div>
    </Step>
  </Stepper>
);
