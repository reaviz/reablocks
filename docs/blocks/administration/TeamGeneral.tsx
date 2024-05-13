import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { Card } from '../../../src/layout/Card';
import { Tabs, Tab, TabList, TabPanel } from '../../../src/layout/Tabs';
import { Avatar } from '../../../src/elements/Avatar';
import { Button } from '../../../src/elements/Button';
import { IconButton } from '../../../src/elements/IconButton';
import {
  Checkbox,
  CheckboxTheme,
  checkboxTheme as defaultCheckboxTheme
} from '../../../src/form/Checkbox';
import { Stack } from '../../../src/layout/Stack';

export const TeamGeneral: FC = () => {
  const [checkedUsers, setCheckedUsers] = useState<number[]>([]);

  const checkboxTheme: CheckboxTheme = {
    ...defaultCheckboxTheme,
    check: 'stroke-white',
    boxVariants: {
      ...defaultCheckboxTheme.boxVariants,
      checked: {
        fill: 'hsl(var(--twc-primary))',
        stroke: 'hsla(var(--twc-primary))'
      },
      unchecked: {
        fill: 'transparent',
        stroke: 'hsl(var(--twc-surface))'
      }
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[1200px]"
    >
      <Card className="transition-colors p-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">General</h2>
            <p className="text-panel-secondary-content text-base">
              Effectively manage your team's workflow with our intuitive
              application. Streamline task delegation, monitor progress, and
              foster seamless collaboration among team members. Stay informed,
              stay connected, and drive productivity with ease.
            </p>
          </div>
          <Tabs variant="secondary" selectedIndex={1}>
            <TabList>
              <Tab>Account Details</Tab>
              <Tab>Users</Tab>
              <Tab>Billing</Tab>
              <Tab>Integrations</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
          <TabPanel>
            <div className="flex w-full justify-between items-center mb-4">
              <div className="flex flex-col">
                <span className="font-bold">Users</span>
                <span className="text-base text-panel-secondary-content">
                  Manage user accounts, permissions, and access levels within
                  the app to ensure smooth operation and security.
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
                Add user
              </Button>
            </div>
            <div className="flex flex-col w-full max-h-[400px] overflow-auto">
              <table>
                <tbody>
                  {Array(10)
                    .fill({
                      name: 'Austin McDaniel',
                      email: 'austin@goodcode.us',
                      role: 'Admin'
                    })
                    .map((user, index) => (
                      <>
                        <tr
                          className="border-b border-panel-accent hover:bg-panel-accent/40 transition-colors text-base text-panel-secondary-content"
                          key={index}
                        >
                          <td className="py-6 px-2">
                            <Checkbox
                              theme={checkboxTheme}
                              className="shrink-0"
                              size="small"
                              checked={checkedUsers.includes(index)}
                              onChange={checked => {
                                if (checked) {
                                  setCheckedUsers([...checkedUsers, index]);
                                } else {
                                  setCheckedUsers(
                                    checkedUsers.filter(i => i !== index)
                                  );
                                }
                              }}
                            />
                          </td>
                          <td className="py-6 px-2">
                            <div className="flex gap-2 items-center">
                              <Avatar src="https://goodcode.us/static/austin-d1a2c5249336c31662b8ee6d4e169b2b.jpg" />
                              {user.name}
                            </div>
                          </td>
                          <td className="py-6 px-2">
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
                          <td className="py-6 px-2">
                            <div className="flex gap-2 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="text-panel-content"
                                fill="currentColor"
                              >
                                <path d="M8.0163 0.666656C7.88737 0.662633 7.76188 0.708585 7.66604 0.794911C7.66604 0.794911 5.16341 2.99999 2.16669 2.99999C2.03408 3 1.90691 3.05268 1.81315 3.14645C1.71938 3.24022 1.6667 3.36738 1.66669 3.49999V7.58658C1.66669 9.81259 2.69649 13.4755 7.80601 15.6276C7.86742 15.6534 7.93339 15.6668 8.00002 15.6668C8.06665 15.6668 8.13262 15.6534 8.19403 15.6276C13.3035 13.4755 14.3334 9.81259 14.3334 7.58658V3.49999C14.3333 3.36738 14.2807 3.24022 14.1869 3.14645C14.0931 3.05268 13.966 3 13.8334 2.99999C10.8366 2.99999 8.334 0.794911 8.334 0.794911C8.24651 0.716081 8.134 0.670661 8.0163 0.666656ZM8.00002 1.80923C8.68768 2.36211 10.7038 3.77905 13.3334 3.95832V7.58658C13.3334 9.50066 12.5978 12.5886 8.00002 14.6087C3.40221 12.5886 2.66669 9.50066 2.66669 7.58658V3.95832C5.29627 3.77905 7.31237 2.36211 8.00002 1.80923ZM8.00002 3.99999C7.37502 3.99999 6.84296 4.25237 6.50132 4.63671C6.15969 5.02105 6.00002 5.51388 6.00002 5.99999C6.00002 6.4861 6.15969 6.97893 6.50132 7.36327C6.84296 7.74761 7.37502 7.99999 8.00002 7.99999C8.62502 7.99999 9.15708 7.74761 9.49872 7.36327C9.84035 6.97893 10 6.4861 10 5.99999C10 5.51388 9.84035 5.02105 9.49872 4.63671C9.15708 4.25237 8.62502 3.99999 8.00002 3.99999ZM8.00002 4.99999C8.37502 4.99999 8.59296 5.12261 8.75132 5.30077C8.90969 5.47893 9.00002 5.7361 9.00002 5.99999C9.00002 6.26388 8.90969 6.52105 8.75132 6.69921C8.59296 6.87737 8.37502 6.99999 8.00002 6.99999C7.62502 6.99999 7.40708 6.87737 7.24872 6.69921C7.09035 6.52105 7.00002 6.26388 7.00002 5.99999C7.00002 5.7361 7.09035 5.47893 7.24872 5.30077C7.40708 5.12261 7.62502 4.99999 8.00002 4.99999ZM6.16669 8.66666C5.52729 8.66666 5.00002 9.19393 5.00002 9.83332V10.1667C5.00002 10.3192 5.01798 10.4649 5.0508 10.6009C5.07261 10.691 5.11905 10.7733 5.18492 10.8385C5.90726 11.5533 6.9046 12 8.00002 12C9.09544 12 10.0928 11.5533 10.8151 10.8385C10.881 10.7733 10.9274 10.691 10.9492 10.6009C10.9821 10.4649 11 10.3192 11 10.1667V9.83332C11 9.19393 10.4727 8.66666 9.83335 8.66666H6.16669ZM6.16669 9.66666H9.83335C9.92729 9.66666 10 9.73938 10 9.83332V10.1667C10 10.1812 9.99612 10.1917 9.99546 10.2057C9.46207 10.6873 8.7741 11 8.00002 11C7.22594 11 6.53797 10.6873 6.00458 10.2057C6.00393 10.1917 6.00002 10.1812 6.00002 10.1667V9.83332C6.00002 9.73938 6.07275 9.66666 6.16669 9.66666Z" />
                              </svg>
                              {user.role}
                            </div>
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
        </div>
      </Card>
    </motion.div>
  );
};
