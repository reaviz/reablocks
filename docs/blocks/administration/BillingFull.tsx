import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { Button } from '../../../src/elements/Button';
import { Chip } from '../../../src/elements/Chip';
import { Stack } from '../../../src/layout/Stack';
import { Divider } from '../../../src/layout/Divider';
import { Card } from '../../../src/layout/Card';
import { Tabs, Tab, TabList, TabPanel } from '../../../src/layout/Tabs';

export const BillingFull: FC = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[1200px]"
  >
    <Card className="transition-colors p-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">Billing</h2>
          <p className="text-panel-secondary-content text-base">
            Easily manage your account, view invoices, and track payments
            conveniently in one place. Explore flexible subscription options and
            manage your billing preferences effortlessly.
          </p>
        </div>
        <Tabs variant="secondary" selectedIndex={2}>
          <TabList>
            <Tab>Account Details</Tab>
            <Tab>Users</Tab>
            <Tab>Billing</Tab>
            <Tab>Integrations</Tab>
            <Tab>Notifications</Tab>
          </TabList>
        </Tabs>
        <TabPanel>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Plan</span>
            <div className="flex gap-4 w-full">
              <Card
                className="flex-1 light:bg-athens-gray"
                contentClassName="flex flex-col gap-6"
              >
                <Stack justifyContent="spaceBetween">
                  <span className="font-bold">Premium</span>
                  <Chip
                    className="rounded-full border border-panel-accent"
                    variant="outline"
                  >
                    Annual
                  </Chip>
                </Stack>
                <div className="flex gap-2 items-center">
                  <span className="font-bold">$1000</span>
                  <span className="text-panel-secondary-content text-sm">
                    /Year
                  </span>
                </div>
                <Button
                  className="w-fit font-semibold px-4 py-2 border-none dark:bg-charade/40 dark:hover:bg-charade/60 dark:focus:bg-charade/60 light:bg-blue-200/40 light:hover:bg-blue-200/60 light:focus:bg-blue-200/60 light:text-vulcan focus:outline-none transition-colors"
                  variant="outline"
                  startAdornment={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M2 3.33334V12.6667H14V3.33334H2ZM5.55333 11.3333H3.33333V4.66668H5.55333V11.3333ZM9.11333 11.3333H6.89333V4.66668H9.11333V11.3333ZM12.6667 11.3333H10.4467V4.66668H12.6667V11.3333Z" />
                    </svg>
                  }
                  color="secondary"
                >
                  Manage Plan
                </Button>
              </Card>
              <Card
                className="flex-1 light:bg-athens-gray"
                contentClassName="flex flex-col gap-6"
              >
                <span className="font-bold">Billing period</span>
                <div className="flex gap-2 items-center">
                  <span className="font-bold">Monthly</span>
                  <span className="text-panel-secondary-content text-sm">
                    (renews Mar 15, 2024)
                  </span>
                </div>
                <Button
                  className="w-fit font-semibold px-4 py-2 border-none dark:bg-charade/40 dark:hover:bg-charade/60 dark:focus:bg-charade/60 light:bg-blue-200/40 light:hover:bg-blue-200/60 light:focus:bg-blue-200/60 light:text-vulcan focus:outline-none transition-colors"
                  variant="outline"
                  startAdornment={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M1.86333 11.6367V14.1367H4.36333L11.7367 6.76334L9.23666 4.26334L1.86333 11.6367ZM14.1367 4.36334L11.6367 1.86334L9.94999 3.55668L12.45 6.05668L14.1367 4.36334Z" />
                    </svg>
                  }
                  color="secondary"
                >
                  Change billing period
                </Button>
              </Card>
            </div>
            <Divider className="my-6" variant="secondary" />
            <span className="font-bold">Seats</span>
            <span className="text-sm">Remaining Seats</span>
            <div className="relative rounded-full w-full border border-primary/40 h-[50px] my-3 dark:bg-vulcan light:bg-mystic">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '33%', opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-blue-400 h-full"
              />
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '33%', opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-blue-400 h-full blur-md"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center font-semibold">
                <div className="py-2 px-4 border border-panel-accent">5</div>
                <span className="d text-sm">of 25 seats used</span>
              </div>
              <Button
                className="font-semibold h-fit py-2 px-4"
                variant="outline"
                startAdornment={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M2 3.33331V12.6666H14V3.33331H2ZM5.55333 11.3333H3.33333V4.66665H5.55333V11.3333ZM9.11333 11.3333H6.89333V4.66665H9.11333V11.3333ZM12.6667 11.3333H10.4467V4.66665H12.6667V11.3333Z" />
                  </svg>
                }
              >
                Manage Seats
              </Button>
            </div>
          </div>
        </TabPanel>
      </div>
    </Card>
  </motion.div>
);
