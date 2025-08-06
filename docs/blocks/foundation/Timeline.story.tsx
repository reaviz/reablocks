import { motion } from 'motion/react';
import React from 'react';
import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Stack,
  Step,
  Stepper,
  Textarea
} from '../../../src';

export default {
  title: 'Blocks/Foundation/Timeline'
};

export const ActivityTimeline = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full md:w-[820px]"
  >
    <Card className="w-full p-12 bg-background-neutral-canvas-base border border-stroke-neutral-3">
      <Stepper continuous animated>
        <Step>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
              03/01/2024, 8:00 AM
            </span>
            <span className="font-medium">
              Austin{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                created ticket
              </span>
            </span>
          </div>
        </Step>
        <Step>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
              03/02/2024, 10:00 AM
            </span>
            <span className="font-medium">
              Austin
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                {' '}
                changed statues from{' '}
              </span>
              Backlog
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                {' '}
                to{' '}
              </span>
              In Progress
            </span>
          </div>
        </Step>
        <Step>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
              03/03/2024, 10:15 AM
            </span>
            <span className="font-medium">
              Austin
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                {' '}
                left a comment{' '}
              </span>
            </span>
            <div className="mt-2 px-4 py-2 border border-solid border-tags-colors-neutral-stroke-hover bg-inputs-colors-normal-background-resting rounded-md">
              <div className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-medium text-sm">
                This looks fine, might've missed it but maybe we can add a link
                to the website where we also have the video of how to use the
                plug in? Otherwise this is a nice addition.
              </div>
              <Divider
                className="via-gray-500"
                variant="secondary"
                orientation="horizontal"
              />
              <Stack>
                <Textarea
                  fullWidth
                  placeholder="Leave a reply..."
                  containerClassName="border-transparent bg-vulcan light:bg-athens-gray"
                  className="text-sm! px-0"
                  endAdornment={null}
                />
                <IconButton className="text-secondary-inactive" variant="text">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M0.666748 6.00002L1.60675 6.94002L5.33342 3.22002V11.3334H6.66675V3.22002L10.3867 6.94669L11.3334 6.00002L6.00008 0.666687L0.666748 6.00002Z" fill="currentColor"/>
                  </svg>
                </IconButton>
              </Stack>
            </div>
          </div>
        </Step>
        <Step>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600">
              03/01/2024, 8:00 AM
            </span>
            <span className="font-medium">
              Austin
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                {' '}
                changed statues from{' '}
              </span>
              In Progress
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                {' '}
                to{' '}
              </span>
              Done
            </span>
          </div>
        </Step>
      </Stepper>

      <div className="mt-2 px-4 py-2 border border-solid border-tags-colors-neutral-stroke-hover bg-inputs-colors-normal-background-resting rounded-md">
        <Stack>
          <Textarea
            fullWidth
            placeholder="Leave a comment..."
            containerClassName="border-transparent bg-vulcan light:bg-athens-gray"
            className="text-sm! px-0"
            endAdornment={null}
          />
          <IconButton className="text-secondary-inactive" variant="text">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector" d="M0.666748 6.00002L1.60675 6.94002L5.33342 3.22002V11.3334H6.66675V3.22002L10.3867 6.94669L11.3334 6.00002L6.00008 0.666687L0.666748 6.00002Z" fill="currentColor"/>
            </svg>
          </IconButton>
        </Stack>
      </div>
    </Card>
  </motion.div>
);

export const VersionHistory = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full md:w-[560px]"
  >
    <Card className="w-full p-12 bg-background-neutral-canvas-base border border-stroke-neutral-3">
      <div className="w-full flex-row flex justify-between items-center text-center mb-8">
        <span className="text-xl font-bold">Version History</span>
        <IconButton variant="text">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="currentColor"/>
          </svg>
        </IconButton>
      </div>
      <div className="p-[1px] rounded-md [background-image:linear-gradient(-126.85deg,_rgba(30,_30,_46,_0)_63.1678%,_#2F6AFF_88.9438%)]">
        <div className="bg-background-neutral-canvas-base p-3 rounded-md">
          <Stepper activeStep={1} animated>
            <Step label="v6.0">
              <Stack direction="column" alignItems="start" dense>
                <span className="font-medium text-base">
                  New custom statuses for projects
                </span>
                <span className="font-normal text-sm text-waterloo light:text-gray-600">
                  Austin McDaniel • 1 hour ago
                </span>
              </Stack>
            </Step>
            <Step label="v5.0">
              <Stack direction="column" alignItems="start" dense>
                <span className="font-medium text-base">
                  Timeline UI overhaul
                </span>
                <span className="font-normal text-sm text-waterloo light:text-gray-600">
                  Austin McDaniel • March 22, 2024
                </span>
              </Stack>
            </Step>
            <Step label="v4.0">
              <Stack direction="column" alignItems="start" dense>
                <span className="font-medium text-base">
                  Google calendar integration
                </span>
                <span className="font-normal text-sm text-waterloo light:text-gray-600">
                  Austin McDaniel • March 21, 2024
                </span>
              </Stack>
            </Step>
            <Step>
              <Stack direction="column" alignItems="start" dense>
                <span className="font-medium text-base">
                  Branch-specific workflow automations
                </span>
                <span className="font-normal text-sm text-waterloo light:text-gray-600">
                  Austin McDaniel • February 28, 2024
                </span>
              </Stack>
            </Step>
            <Step>
              <Stack direction="column" alignItems="start" dense>
                <span className="font-medium text-base">
                  Project time frames
                </span>
                <span className="font-normal text-sm text-waterloo light:text-gray-600">
                  Austin McDaniel • February 15, 2024
                </span>
              </Stack>
            </Step>
            <Step label="v3.0">
              <Stack direction="column" alignItems="start" dense>
                <span className="font-medium text-base">
                  GitHub Issues Sync
                </span>
                <span className="font-normal text-sm text-waterloo light:text-gray-600">
                  Austin McDaniel • February 10, 2024
                </span>
              </Stack>
            </Step>
          </Stepper>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const WorkspaceHistory = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full md:w-[650px]"
  >
    <Card className="w-full p-12 bg-background-neutral-canvas-base border border-stroke-neutral-3">
      <Stack direction="column" alignItems="start">
        <div className="w-full flex-row flex justify-between items-center text-center">
          <span className="text-xl font-bold">Workspace History</span>
          <IconButton variant="text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="currentColor"/>
            </svg>
          </IconButton>
        </div>
        <span className="text-waterloo">Workspace History</span>
      </Stack>
      <Stepper className="mt-8" animated>
        <Step>
          <Stack direction="row" className="relative -top-1.5">
            <Avatar size={24} src="https://avatars.githubusercontent.com/u/227909?s=96&v=4" />
            <span className="font-medium">
              Austin{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                created workspace • 5 hour ago
              </span>
            </span>
          </Stack>
        </Step>
        <Step>
          <Stack direction="row" className="relative -top-1.5">
            <Avatar size={24} src="https://avatars.githubusercontent.com/u/227909?s=96&v=4" />
            <span className="font-medium">
              Kyle{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                renamed workspace to
              </span>{' '}
              Good Code{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                • 5 hour ago
              </span>
            </span>
          </Stack>
        </Step>
        <Step>
          <Stack direction="row" className="relative -top-1.5">
            <Avatar size={24} src="https://avatars.githubusercontent.com/u/227909?s=96&v=4" />
            <span className="font-medium">
              Laura{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                added
              </span>{' '}
              MYSQL{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                database • March 22, 2024
              </span>
            </span>
          </Stack>
        </Step>
        <Step>
          <Stack direction="row" className="relative -top-1.5">
            <Avatar size={24}  src="https://avatars.githubusercontent.com/u/227909?s=96&v=4" />
            <span className="font-medium">
              Lisa{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                changed access permission to
              </span>{' '}
              Private{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                • February 28, 2024
              </span>
            </span>
          </Stack>
        </Step>
        <Step>
          <Stack direction="row" className="relative -top-1.5">
            <Avatar size={24}  src="https://avatars.githubusercontent.com/u/227909?s=96&v=4" />
            <span className="font-medium">
              Kenneth{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                connected
              </span>{' '}
              GitHub{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                database • February 15, 2024
              </span>
            </span>
          </Stack>
        </Step>
        <Step>
          <Stack direction="row" className="relative -top-1.5">
            <Avatar size={24}  src="https://avatars.githubusercontent.com/u/227909?s=96&v=4" />
            <span className="font-medium">
              Carrington{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                renamed workspace to
              </span>{' '}
              Good Code Design{' '}
              <span className="text-neutrals-pure-white-dnt-400 light:text-neutrals-pure-black-dnt-600 font-normal">
                February 10, 2024
              </span>
            </span>
          </Stack>
        </Step>
      </Stepper>
    </Card>
  </motion.div>
);
