import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';

import { Avatar } from '../../../src/elements/Avatar';
import { Button } from '../../../src/elements/Button';
import { IconButton } from '../../../src/elements/IconButton';
import {
  Checkbox,
  CheckboxTheme,
  checkboxTheme as defaultCheckboxTheme
} from '../../../src/form/Checkbox';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { Stack } from '../../../src/layout/Stack';

export const TeamRoles: FC = () => {
  const [checkedUsers, setCheckedUsers] = useState<number[]>([]);
  const [checkedAdmins, setCheckedAdmins] = useState<number[]>([]);

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
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Team Members</h2>
              <span className="text-panel-secondary-content text-base">
                Manage user accounts, permissions, and access levels within the
                app to ensure smooth operation and security.
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
                  <path d="M8.00002 1.33337C6.16499 1.33337 4.66669 2.83168 4.66669 4.66671C4.66669 6.50173 6.16499 8.00004 8.00002 8.00004C9.83505 8.00004 11.3334 6.50173 11.3334 4.66671C11.3334 2.83168 9.83505 1.33337 8.00002 1.33337ZM8.00002 2.33337C9.29461 2.33337 10.3334 3.37212 10.3334 4.66671C10.3334 5.96129 9.29461 7.00004 8.00002 7.00004C6.70543 7.00004 5.66669 5.96129 5.66669 4.66671C5.66669 3.37212 6.70543 2.33337 8.00002 2.33337ZM3.99286 9.33337C3.26625 9.33337 2.66669 9.93294 2.66669 10.6595V11.1667C2.66669 12.3681 3.42644 13.2974 4.43557 13.8542C5.44469 14.411 6.72272 14.6667 8.00002 14.6667C9.27732 14.6667 10.5553 14.411 11.5645 13.8542C12.4249 13.3795 13.0725 12.6209 13.2539 11.6667H13.334V10.6595C13.334 9.93294 12.7338 9.33337 12.0072 9.33337H3.99286ZM3.99286 10.3334H12.0072C12.1932 10.3334 12.334 10.4735 12.334 10.6595V10.6667H12.3334V11.1667C12.3334 11.9653 11.8848 12.536 11.0814 12.9792C10.278 13.4224 9.13939 13.6667 8.00002 13.6667C6.86065 13.6667 5.72202 13.4224 4.91864 12.9792C4.11526 12.536 3.66669 11.9653 3.66669 11.1667V10.6595C3.66669 10.4735 3.8068 10.3334 3.99286 10.3334Z" />
                </svg>
              }
              variant="outline"
            >
              Add Team Member
            </Button>
          </div>
          <Divider variant="secondary" />
          <div className="w-full flex gap-12  ">
            <div className="flex flex-col w-1/4">
              <span className="font-bold">Admins (3)</span>
              <p className="text-panel-secondary-content text-base">
                Manage user accounts, permissions, and access levels within the
                app to ensure smooth operation and security.
              </p>
            </div>
            <div className="flex-1 rounded-xl overflow-auto">
              <table className="w-full">
                <thead className="text-left text-panel-secondary-content text-base dark:bg-vulcan light:bg-gray-200">
                  <tr>
                    <th className="py-6 pl-4">
                      <Checkbox
                        theme={checkboxTheme}
                        className="shrink-0"
                        size="small"
                        checked={checkedAdmins.length === 3}
                        onChange={checked =>
                          setCheckedAdmins(
                            checked
                              ? Array(3)
                                  .fill(0)
                                  .map((_, i) => i)
                              : []
                          )
                        }
                      />
                    </th>
                    <th className="py-6 pl-4">Name</th>
                    <th className="py-6 pl-4">Email</th>
                    <th className="py-6 pl-4">Date Added</th>
                    <th className="py-6 pl-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {Array(3)
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
                            <Checkbox
                              theme={checkboxTheme}
                              className="shrink-0"
                              size="small"
                              checked={checkedAdmins.includes(index)}
                              onChange={checked => {
                                if (checked) {
                                  setCheckedAdmins([...checkedAdmins, index]);
                                } else {
                                  setCheckedAdmins(
                                    checkedAdmins.filter(i => i !== index)
                                  );
                                }
                              }}
                            />
                          </td>
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
                          <td className="py-6 pl-4">
                            <div className="flex gap-2 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                className="text-panel-content"
                                fill="currentColor"
                              >
                                <path d="M13.3333 2.66671H12.6666V1.33337H11.3333V2.66671H5.99996V1.33337H4.66663V2.66671H3.99996C3.25996 2.66671 2.67329 3.26671 2.67329 4.00004L2.66663 13.3334C2.66663 14.0667 3.25996 14.6667 3.99996 14.6667H13.3333C14.0666 14.6667 14.6666 14.0667 14.6666 13.3334V4.00004C14.6666 3.26671 14.0666 2.66671 13.3333 2.66671ZM13.3333 13.3334H3.99996V6.66671H13.3333V13.3334ZM13.3333 5.33337H3.99996V4.00004H13.3333V5.33337ZM6.66663 9.33337H5.33329V8.00004H6.66663V9.33337ZM9.33329 9.33337H7.99996V8.00004H9.33329V9.33337ZM12 9.33337H10.6666V8.00004H12V9.33337ZM6.66663 12H5.33329V10.6667H6.66663V12ZM9.33329 12H7.99996V10.6667H9.33329V12ZM12 12H10.6666V10.6667H12V12Z" />
                              </svg>
                              {user.dateAdded}
                            </div>
                          </td>
                          <td className="py-6 pl-4">
                            <Stack dense>
                              <IconButton variant="text">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                >
                                  <path d="M6.83337 1.33329C6.75284 1.33226 6.67325 1.3507 6.60138 1.38703C6.5295 1.42336 6.46747 1.47652 6.42055 1.54198C6.37363 1.60744 6.34321 1.68326 6.33189 1.763C6.32056 1.84273 6.32867 1.92403 6.35551 1.99996H4.88025C4.26783 1.99996 3.69435 2.30644 3.35486 2.81637L2.5658 3.99996H2.50004C2.43379 3.99902 2.368 4.01126 2.30652 4.03597C2.24504 4.06068 2.18908 4.09736 2.14189 4.14388C2.09471 4.1904 2.05724 4.24584 2.03166 4.30697C2.00609 4.3681 1.99292 4.4337 1.99292 4.49996C1.99292 4.56622 2.00609 4.63182 2.03166 4.69295C2.05724 4.75408 2.09471 4.80952 2.14189 4.85604C2.18908 4.90256 2.24504 4.93924 2.30652 4.96395C2.368 4.98866 2.43379 5.0009 2.50004 4.99996H2.7546C2.79749 5.00644 2.84104 5.00732 2.88416 5.00256L3.70837 12.6953C3.80783 13.6227 4.59865 14.3333 5.53129 14.3333H10.4681C11.4008 14.3333 12.1916 13.6227 12.2911 12.6953L13.1159 5.00256C13.1582 5.00709 13.2008 5.00622 13.2429 4.99996H13.5C13.5663 5.0009 13.6321 4.98866 13.6936 4.96395C13.755 4.93924 13.811 4.90256 13.8582 4.85604C13.9054 4.80952 13.9428 4.75408 13.9684 4.69295C13.994 4.63182 14.0072 4.56622 14.0072 4.49996C14.0072 4.4337 13.994 4.3681 13.9684 4.30697C13.9428 4.24584 13.9054 4.1904 13.8582 4.14388C13.811 4.09736 13.755 4.06068 13.6936 4.03597C13.6321 4.01126 13.5663 3.99902 13.5 3.99996H13.4343L12.6452 2.81637C12.3055 2.30672 11.732 1.99996 11.1198 1.99996H9.64457C9.67141 1.92403 9.67952 1.84273 9.66819 1.763C9.65687 1.68326 9.62646 1.60744 9.57954 1.54198C9.53262 1.47652 9.47058 1.42336 9.3987 1.38703C9.32683 1.3507 9.24724 1.33226 9.16671 1.33329H6.83337ZM4.88025 2.99996H11.1198C11.399 2.99996 11.6583 3.1387 11.8132 3.37105L12.2325 3.99996H3.76762L4.18689 3.37105L4.18754 3.3704C4.34204 3.13834 4.60067 2.99996 4.88025 2.99996ZM3.89002 4.99996H12.1101L11.2969 12.5885C11.251 13.0164 10.8982 13.3333 10.4681 13.3333H5.53129C5.10126 13.3333 4.74905 13.0164 4.70317 12.5885L3.89002 4.99996Z" />
                                </svg>
                              </IconButton>
                              <IconButton variant="text">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                >
                                  <path d="M1.86328 11.6366V14.1366H4.36328L11.7366 6.76328L9.23662 4.26328L1.86328 11.6366ZM14.1366 4.36328L11.6366 1.86328L9.94995 3.55661L12.4499 6.05661L14.1366 4.36328Z" />
                                </svg>
                              </IconButton>
                            </Stack>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <Divider variant="secondary" />
          <div className="w-full flex gap-12  ">
            <div className="flex flex-col w-1/4">
              <span className="font-bold">Users (12)</span>
              <p className="text-panel-secondary-content text-base">
                Manage user accounts, permissions, and access levels within the
                app to ensure smooth operation and security.
              </p>
            </div>
            <div className="flex-1 rounded-xl overflow-auto h-[500px]">
              <table className="w-full">
                <thead className="sticky top-0 left-0 text-left text-panel-secondary-content text-base dark:bg-vulcan light:bg-gray-200">
                  <tr>
                    <th className="py-6 pl-4">
                      <Checkbox
                        theme={checkboxTheme}
                        className="shrink-0"
                        size="small"
                        checked={checkedUsers.length === 12}
                        onChange={checked =>
                          setCheckedUsers(
                            checked
                              ? Array(12)
                                  .fill(0)
                                  .map((_, i) => i)
                              : []
                          )
                        }
                      />
                    </th>
                    <th className="py-6 pl-4">Name</th>
                    <th className="py-6 pl-4">Email</th>
                    <th className="py-6 pl-4">Date Added</th>
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
                          <td className="py-6 pl-4">
                            <div className="flex gap-2 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                className="text-panel-content"
                                fill="currentColor"
                              >
                                <path d="M13.3333 2.66671H12.6666V1.33337H11.3333V2.66671H5.99996V1.33337H4.66663V2.66671H3.99996C3.25996 2.66671 2.67329 3.26671 2.67329 4.00004L2.66663 13.3334C2.66663 14.0667 3.25996 14.6667 3.99996 14.6667H13.3333C14.0666 14.6667 14.6666 14.0667 14.6666 13.3334V4.00004C14.6666 3.26671 14.0666 2.66671 13.3333 2.66671ZM13.3333 13.3334H3.99996V6.66671H13.3333V13.3334ZM13.3333 5.33337H3.99996V4.00004H13.3333V5.33337ZM6.66663 9.33337H5.33329V8.00004H6.66663V9.33337ZM9.33329 9.33337H7.99996V8.00004H9.33329V9.33337ZM12 9.33337H10.6666V8.00004H12V9.33337ZM6.66663 12H5.33329V10.6667H6.66663V12ZM9.33329 12H7.99996V10.6667H9.33329V12ZM12 12H10.6666V10.6667H12V12Z" />
                              </svg>
                              {user.dateAdded}
                            </div>
                          </td>
                          <td className="py-6 pl-4">
                            <Stack dense>
                              <IconButton variant="text">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                >
                                  <path d="M6.83337 1.33329C6.75284 1.33226 6.67325 1.3507 6.60138 1.38703C6.5295 1.42336 6.46747 1.47652 6.42055 1.54198C6.37363 1.60744 6.34321 1.68326 6.33189 1.763C6.32056 1.84273 6.32867 1.92403 6.35551 1.99996H4.88025C4.26783 1.99996 3.69435 2.30644 3.35486 2.81637L2.5658 3.99996H2.50004C2.43379 3.99902 2.368 4.01126 2.30652 4.03597C2.24504 4.06068 2.18908 4.09736 2.14189 4.14388C2.09471 4.1904 2.05724 4.24584 2.03166 4.30697C2.00609 4.3681 1.99292 4.4337 1.99292 4.49996C1.99292 4.56622 2.00609 4.63182 2.03166 4.69295C2.05724 4.75408 2.09471 4.80952 2.14189 4.85604C2.18908 4.90256 2.24504 4.93924 2.30652 4.96395C2.368 4.98866 2.43379 5.0009 2.50004 4.99996H2.7546C2.79749 5.00644 2.84104 5.00732 2.88416 5.00256L3.70837 12.6953C3.80783 13.6227 4.59865 14.3333 5.53129 14.3333H10.4681C11.4008 14.3333 12.1916 13.6227 12.2911 12.6953L13.1159 5.00256C13.1582 5.00709 13.2008 5.00622 13.2429 4.99996H13.5C13.5663 5.0009 13.6321 4.98866 13.6936 4.96395C13.755 4.93924 13.811 4.90256 13.8582 4.85604C13.9054 4.80952 13.9428 4.75408 13.9684 4.69295C13.994 4.63182 14.0072 4.56622 14.0072 4.49996C14.0072 4.4337 13.994 4.3681 13.9684 4.30697C13.9428 4.24584 13.9054 4.1904 13.8582 4.14388C13.811 4.09736 13.755 4.06068 13.6936 4.03597C13.6321 4.01126 13.5663 3.99902 13.5 3.99996H13.4343L12.6452 2.81637C12.3055 2.30672 11.732 1.99996 11.1198 1.99996H9.64457C9.67141 1.92403 9.67952 1.84273 9.66819 1.763C9.65687 1.68326 9.62646 1.60744 9.57954 1.54198C9.53262 1.47652 9.47058 1.42336 9.3987 1.38703C9.32683 1.3507 9.24724 1.33226 9.16671 1.33329H6.83337ZM4.88025 2.99996H11.1198C11.399 2.99996 11.6583 3.1387 11.8132 3.37105L12.2325 3.99996H3.76762L4.18689 3.37105L4.18754 3.3704C4.34204 3.13834 4.60067 2.99996 4.88025 2.99996ZM3.89002 4.99996H12.1101L11.2969 12.5885C11.251 13.0164 10.8982 13.3333 10.4681 13.3333H5.53129C5.10126 13.3333 4.74905 13.0164 4.70317 12.5885L3.89002 4.99996Z" />
                                </svg>
                              </IconButton>
                              <IconButton variant="text">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                >
                                  <path d="M1.86328 11.6366V14.1366H4.36328L11.7366 6.76328L9.23662 4.26328L1.86328 11.6366ZM14.1366 4.36328L11.6366 1.86328L9.94995 3.55661L12.4499 6.05661L14.1366 4.36328Z" />
                                </svg>
                              </IconButton>
                            </Stack>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
