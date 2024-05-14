import { motion } from 'framer-motion';
import React, { FC } from 'react';

import { Avatar } from '../../../src/elements/Avatar';
import { Button } from '../../../src/elements/Button';
import { IconButton } from '../../../src/elements/IconButton';
import { Input } from '../../../src/form/Input';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { Stack } from '../../../src/layout/Stack';
import { Tab, TabList, TabPanel, Tabs } from '../../../src/layout/Tabs';

const GoodCodeLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="12"
    viewBox="0 0 10 12"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.30914 0L0.800049 5.95244L9.30914 12V6.50322L7.39925 5.2725L6.32435 6L8.11316 7.16363V9.6557L2.90066 5.95244L9.30914 1.4745V0Z"
      fill="url(#paint0_linear_2617_5417)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.30912 1.93848L3.61314 5.95581L7.70718 8.86155V7.35838L5.64 6.01625L9.30912 3.42873V1.93848Z"
      fill="url(#paint1_linear_2617_5417)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2617_5417"
        x1="10.1601"
        y1="2.975"
        x2="4.08606"
        y2="10.0814"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#105EFF" />
        <stop offset="0.413357" stop-color="#009BFF" />
        <stop offset="0.735652" stop-color="#105EFF" />
        <stop offset="1" stop-color="#090E43" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2617_5417"
        x1="4.49859"
        y1="8.00001"
        x2="10.0046"
        y2="2.10756"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#105EFF" />
        <stop offset="0.413357" stop-color="#009BFF" />
        <stop offset="0.735652" stop-color="#105EFF" />
        <stop offset="1" stop-color="#090E43" />
      </linearGradient>
    </defs>
  </svg>
);

export const TeamMinimal: FC = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[840px]"
    >
      <Card className="transition-colors p-12">
        <div className="flex gap-2 items-center justify-between">
          <Tabs variant="secondary" selectedIndex={1}>
            <TabList>
              <Tab>Account</Tab>
              <Tab>Users</Tab>
              <Tab>Billing</Tab>
              <Tab>Integrations</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
          <Input
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="currentColor"
              >
                <path d="M10.5033 10.0033H9.97659L9.78992 9.82335C10.4433 9.06335 10.8366 8.07668 10.8366 7.00335C10.8366 4.61001 8.89659 2.67001 6.50326 2.67001C4.10992 2.67001 2.16992 4.61001 2.16992 7.00335C2.16992 9.39668 4.10992 11.3367 6.50326 11.3367C7.57659 11.3367 8.56326 10.9433 9.32326 10.29L9.50326 10.4767V11.0033L12.8366 14.33L13.8299 13.3367L10.5033 10.0033ZM6.50326 10.0033C4.84326 10.0033 3.50326 8.66335 3.50326 7.00335C3.50326 5.34335 4.84326 4.00335 6.50326 4.00335C8.16326 4.00335 9.50326 5.34335 9.50326 7.00335C9.50326 8.66335 8.16326 10.0033 6.50326 10.0033Z" />
              </svg>
            }
            containerClassname="max-w-[200px]"
            placeholder="Search teams, users..."
          />
        </div>
        <TabPanel className="flex flex-col gap-2 mt-8">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col">
              <span className="font-bold">On teams</span>
              <span className="text-base text-panel-secondary-content">
                You're currently on these teams.
              </span>
            </div>
            <Button
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 12.6667H3.33333V3.33333H12.6667V12.6667ZM7.33333 11.3333H8.66667V8.66667H11.3333V7.33333H8.66667V4.66667H7.33333V7.33333H4.66667V8.66667H7.33333V11.3333Z" />
                </svg>
              }
              className="font-semibold px-4 py-2 h-fit my-auto flex items-center gap-2 self-stretch bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            >
              Add team member
            </Button>
          </div>
          <div className="flex flex-col w-full rounded-xl border border-panel-accent p-6">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex gap-2 items-center">
                <GoodCodeLogo />
                <span className="font-bold">Good Code</span>
              </div>
              <Button color="secondary">Leave</Button>
            </div>
            <Divider className="my-4" variant="secondary" />
            <div className="flex gap-2 justify-between items-center">
              <div className="flex gap-2 items-center">
                <GoodCodeLogo />
                <span className="font-bold">Good Code</span>
              </div>
              <Button color="secondary">Leave</Button>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <span className="font-bold">Your team</span>
            <span className="text-base text-panel-secondary-content">
              Manage your existing team and change roles/permissions.
            </span>
          </div>
          <div className="rounded-xl overflow-auto max-h-[300px]">
            <table className="w-full">
              <thead className="sticky top-0 left-0 text-left text-panel-secondary-content text-base dark:bg-vulcan light:bg-gray-200">
                <tr>
                  <th className="py-6 pl-4">Name</th>
                  <th className="py-6 pl-4">Email</th>
                  <th className="py-6 pl-4"></th>
                </tr>
              </thead>
              <tbody>
                {Array(12)
                  .fill({
                    name: 'Austin McDaniel',
                    email: 'austin@goodcode.us',
                    dateAdded: new Date().toLocaleDateString()
                  })
                  .map((user, index) => (
                    <>
                      <tr
                        className="border-b border-panel-accent hover:bg-panel-accent/40 transition-colors text-base text-panel-secondary-content"
                        key={index}
                      >
                        <td className="py-6 pl-4">
                          <div className="flex gap-2 items-center">
                            <Avatar src="https://goodcode.us/static/austin-d1a2c5249336c31662b8ee6d4e169b2b.jpg" />
                            {user.name}
                          </div>
                        </td>
                        <td className="py-6 pl-4">
                          <div className="flex gap-2 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              className="text-panel-content"
                              fill="currentColor"
                            >
                              <path d="M8.00001 1.33334C4.32403 1.33334 1.33334 4.32403 1.33334 8.00001C1.33334 11.676 4.32403 14.6667 8.00001 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8.00001C14.6667 4.32403 11.676 1.33334 8.00001 1.33334ZM8.00001 2.33334C11.1355 2.33334 13.6667 4.86447 13.6667 8.00001C13.6667 11.1355 11.1355 13.6667 8.00001 13.6667C4.86447 13.6667 2.33334 11.1355 2.33334 8.00001C2.33334 4.86447 4.86447 2.33334 8.00001 2.33334ZM8.00001 3.33334C5.42849 3.33334 3.33334 5.42849 3.33334 8.00001C3.33334 10.5715 5.42849 12.6667 8.00001 12.6667C8.57571 12.6667 9.12943 12.5622 9.63998 12.3705C9.70219 12.3479 9.7593 12.3133 9.80802 12.2685C9.85674 12.2237 9.89608 12.1698 9.92379 12.1097C9.95149 12.0496 9.96699 11.9846 9.9694 11.9185C9.97181 11.8524 9.96107 11.7864 9.93781 11.7245C9.91455 11.6626 9.87924 11.6059 9.8339 11.5577C9.78857 11.5095 9.73413 11.4708 9.67373 11.4438C9.61333 11.4168 9.54817 11.402 9.48203 11.4004C9.41589 11.3988 9.35008 11.4103 9.28842 11.4343C8.88831 11.5845 8.45497 11.6667 8.00001 11.6667C5.96886 11.6667 4.33334 10.0312 4.33334 8.00001C4.33334 5.96886 5.96886 4.33334 8.00001 4.33334C10.0312 4.33334 11.6667 5.96886 11.6667 8.00001V8.50001C11.6667 8.96608 11.2994 9.33334 10.8333 9.33334C10.3673 9.33334 10 8.96608 10 8.50001V6.16668C10.001 6.04387 9.95673 5.92501 9.87569 5.83274C9.79465 5.74046 9.68249 5.68124 9.56059 5.66635C9.43869 5.65147 9.31557 5.68196 9.21471 5.75202C9.11384 5.82208 9.04229 5.92681 9.01368 6.04623C8.67622 5.8081 8.27257 5.66668 7.83334 5.66668C6.61607 5.66668 5.66668 6.7425 5.66668 8.00001C5.66668 9.25752 6.61607 10.3333 7.83334 10.3333C8.45026 10.3333 8.99744 10.0561 9.38803 9.6198C9.72452 10.052 10.2478 10.3333 10.8333 10.3333C11.8399 10.3333 12.6667 9.5066 12.6667 8.50001V8.00001C12.6667 5.42849 10.5715 3.33334 8.00001 3.33334ZM7.83334 6.66668C8.45407 6.66668 9.00001 7.23552 9.00001 8.00001C9.00001 8.7645 8.45407 9.33334 7.83334 9.33334C7.21261 9.33334 6.66668 8.7645 6.66668 8.00001C6.66668 7.23552 7.21261 6.66668 7.83334 6.66668Z" />
                            </svg>
                            {user.email}
                          </div>
                        </td>
                        <td className="py-6 px-4 flex justify-end">
                          <Stack dense>
                            <Button color="error">Delete</Button>
                            <Button color="secondary">Edit</Button>
                          </Stack>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between w-full mt-2 items-center">
            <span className="text-panel-secondary-content text-sm">
              Showing 10 of 25
            </span>
            <Stack>
              <IconButton variant="outline" className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M13.3334 7.33335H5.22002L8.94669 3.60669L8.00002 2.66669L2.66669 8.00002L8.00002 13.3334L8.94002 12.3934L5.22002 8.66669H13.3334V7.33335Z" />
                </svg>
              </IconButton>
              <Stack dense>
                <IconButton
                  color="primary"
                  variant="outline"
                  className="w-10 h-10"
                >
                  1
                </IconButton>
                <IconButton color="secondary" className="w-10 h-10">
                  2
                </IconButton>
                <IconButton color="secondary" className="w-10 h-10">
                  3
                </IconButton>
              </Stack>
              <IconButton variant="outline" className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8.00002 2.66669L7.06002 3.60669L10.78 7.33335H2.66669V8.66669H10.78L7.06002 12.3934L8.00002 13.3334L13.3334 8.00002L8.00002 2.66669Z" />
                </svg>
              </IconButton>
            </Stack>
          </div>
        </TabPanel>
      </Card>
    </motion.div>
  );
};
