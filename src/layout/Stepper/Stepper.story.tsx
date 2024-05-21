import { Stepper } from './Stepper';
import { Step } from './Step';

export default {
  title: 'Components/Layout/Stepper',
  component: Stepper
};

export const Markers = () => (
  <Stepper activeStep={2}>
    <Step
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin{' '}
            <span className="text-gray-400 light:text-gray-600">
              created ticket
            </span>
          </span>
        </div>
      }
    />
    <Step
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin
            <span className="text-gray-400 light:text-gray-600">
              {' '}
              changed statues from{' '}
            </span>
            Backlog
            <span className="text-gray-400 light:text-gray-600"> to </span>In
            Progress
          </span>
          <div className="px-4 py-2 border border-solid border-blue-700 bg-vulcan rounded-md">
            This looks fine, might've missed it but maybe we can add a link to
            the website where we also have the video of how to use the plug in?
            Otherwise this is a nice addition.
          </div>
        </div>
      }
    />
    <Step
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin
            <span className="text-gray-400 light:text-gray-600">
              {' '}
              changed statues from{' '}
            </span>
            In Progress
            <span className="text-gray-400 light:text-gray-600"> to </span>Done
          </span>
        </div>
      }
    />
  </Stepper>
);

export const Labels = () => (
  <Stepper>
    <Step
      markerLabel="v6.8"
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin{' '}
            <span className="text-gray-400 light:text-gray-600">
              created ticket
            </span>
          </span>
        </div>
      }
    />
    <Step
      markerLabel="v6.9"
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin
            <span className="text-gray-400 light:text-gray-600">
              {' '}
              changed statues from{' '}
            </span>
            Backlog
            <span className="text-gray-400 light:text-gray-600"> to </span>In
            Progress
          </span>
          <div className="px-4 py-2 border border-solid border-blue-700 bg-vulcan rounded-md">
            This looks fine, might've missed it but maybe we can add a link to
            the website where we also have the video of how to use the plug in?
            Otherwise this is a nice addition.
          </div>
        </div>
      }
    />
    <Step
      markerLabel="v7.0"
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin
            <span className="text-gray-400 light:text-gray-600">
              {' '}
              changed statues from{' '}
            </span>
            In Progress
            <span className="text-gray-400 light:text-gray-600"> to </span>Done
          </span>
        </div>
      }
    />
  </Stepper>
);

export const Mixed = () => (
  <Stepper activeStep={3}>
    <Step
      markerLabel="v6.8"
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin{' '}
            <span className="text-gray-400 light:text-gray-600">
              created ticket
            </span>
          </span>
        </div>
      }
    />
    <Step
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin
            <span className="text-gray-400 light:text-gray-600">
              {' '}
              changed statues from{' '}
            </span>
            Backlog
            <span className="text-gray-400 light:text-gray-600"> to </span>In
            Progress
          </span>
          <div className="px-4 py-2 border border-solid border-blue-700 bg-vulcan rounded-md">
            This looks fine, might've missed it but maybe we can add a link to
            the website where we also have the video of how to use the plug in?
            Otherwise this is a nice addition.
          </div>
        </div>
      }
    />
    <Step
      markerLabel="v7.0"
      content={
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400 light:text-gray-600">
            03/01/2024, 8:00 AM
          </span>
          <span>
            Austin
            <span className="text-gray-400 light:text-gray-600">
              {' '}
              changed statues from{' '}
            </span>
            In Progress
            <span className="text-gray-400 light:text-gray-600"> to </span>Done
          </span>
        </div>
      }
    />
  </Stepper>
);
