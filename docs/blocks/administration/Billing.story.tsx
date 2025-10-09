import { motion } from 'motion/react';
import React from 'react';

import { Button } from '../../../src/elements/Button';
import { Chip } from '../../../src/elements/Chip';
import { Tooltip } from '../../../src/layers';
import {
  Divider,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs
} from '../../../src/layout';
import { Card } from '../../../src/layout/Card';

export default {
  title: 'Blocks/Administration/Billing'
};

export const BillingFull = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:min-w-[960px] md:max-w-[1200px]"
  >
    <Card className="p-12 transition-colors">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Billing</h2>
          <p className="text-content-text-neutral-2 text-sm">
            Easily manage your account, view invoices, and track payments
            conveniently in one place. Explore flexible subscription options and
            manage your billing preferences effortlessly.
          </p>
        </div>
        <Tabs size="large" variant="secondary" selectedIndex={2}>
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
            <div className="flex w-full gap-4">
              <Card
                className="flex-1 p-7"
                contentClassName="flex flex-col gap-6"
              >
                <Stack justifyContent="spaceBetween">
                  <span className="font-bold">Premium</span>
                  <Chip size="large" variant="outline">
                    Annual
                  </Chip>
                </Stack>
                <div className="flex items-center gap-2">
                  <span className="font-bold">$1000</span>
                  <span className="text-content-text-neutral-2 text-xs">
                    /Year
                  </span>
                </div>
                <Button
                  className="w-fit border-none px-4 py-2 font-semibold transition-colors focus:outline-hidden"
                  variant="filled"
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
                className="flex-1 p-7"
                contentClassName="flex flex-col gap-6"
              >
                <span className="font-bold">Billing period</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Monthly</span>
                  <span className="text-content-text-neutral-2 text-sm">
                    (renews Mar 15, 2024)
                  </span>
                </div>
                <Button
                  className="w-fit border-none px-4 py-2 font-semibold transition-colors focus:outline-hidden"
                  variant="filled"
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
            <div className="bg-background-neutral-raised-5 relative my-3 h-[50px] w-full rounded-full border border-background-brand-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '33%', opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base"
              />
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '33%', opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base blur-md"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold">
                <div className="border-background-neutral-raised-4 border px-4 py-2">
                  5
                </div>
                <span className="text-sm">of 25 seats used</span>
              </div>
              <Button
                className="h-fit px-4 py-2 font-semibold"
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

export const PayAndBilling = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:min-w-[960px] md:max-w-[1200px]"
  >
    <Card className="p-12 transition-colors">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Pay & Billing</h2>
            <p className="text-content-text-neutral-2 text-sm">
              Manage your plan and payments
            </p>
          </div>
          <Stack>
            <Button
              className="w-fit border-none px-4 py-2 font-semibold transition-colors focus:outline-hidden"
              variant="filled"
              color="secondary"
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M12.6667 4.27337L11.7267 3.33337L8.00001 7.06004L4.27334 3.33337L3.33334 4.27337L7.06001 8.00004L3.33334 11.7267L4.27334 12.6667L8.00001 8.94004L11.7267 12.6667L12.6667 11.7267L8.94001 8.00004L12.6667 4.27337Z" />
                </svg>
              }
            >
              Cancel Subscription
            </Button>
            <Button
              className="flex items-center gap-2 self-stretch px-4 py-2 font-semibold transition-colors focus:outline-hidden"
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M12.9548 8.65337C12.9815 8.44004 13.0015 8.22671 13.0015 8.00004C13.0015 7.77337 12.9815 7.56004 12.9548 7.34671L14.3615 6.24671C14.4881 6.14671 14.5215 5.96671 14.4415 5.82004L13.1081 3.51337C13.0481 3.40671 12.9348 3.34671 12.8148 3.34671C12.7748 3.34671 12.7348 3.35337 12.7015 3.36671L11.0415 4.03337C10.6948 3.76671 10.3215 3.54671 9.91481 3.38004L9.66148 1.61337C9.64148 1.45337 9.50148 1.33337 9.33481 1.33337H6.66815C6.50148 1.33337 6.36148 1.45337 6.34148 1.61337L6.08815 3.38004C5.68148 3.54671 5.30815 3.77337 4.96148 4.03337L3.30148 3.36671C3.26148 3.35337 3.22148 3.34671 3.18148 3.34671C3.06815 3.34671 2.95481 3.40671 2.89481 3.51337L1.56148 5.82004C1.47481 5.96671 1.51481 6.14671 1.64148 6.24671L3.04815 7.34671C3.02148 7.56004 3.00148 7.78004 3.00148 8.00004C3.00148 8.22004 3.02148 8.44004 3.04815 8.65337L1.64148 9.75337C1.51481 9.85337 1.48148 10.0334 1.56148 10.18L2.89481 12.4867C2.95481 12.5934 3.06815 12.6534 3.18815 12.6534C3.22815 12.6534 3.26815 12.6467 3.30148 12.6334L4.96148 11.9667C5.30815 12.2334 5.68148 12.4534 6.08815 12.62L6.34148 14.3867C6.36148 14.5467 6.50148 14.6667 6.66815 14.6667H9.33481C9.50148 14.6667 9.64148 14.5467 9.66148 14.3867L9.91481 12.62C10.3215 12.4534 10.6948 12.2267 11.0415 11.9667L12.7015 12.6334C12.7415 12.6467 12.7815 12.6534 12.8215 12.6534C12.9348 12.6534 13.0481 12.5934 13.1081 12.4867L14.4415 10.18C14.5215 10.0334 14.4881 9.85337 14.3615 9.75337L12.9548 8.65337ZM11.6348 7.51337C11.6615 7.72004 11.6681 7.86004 11.6681 8.00004C11.6681 8.14004 11.6548 8.28671 11.6348 8.48671L11.5415 9.24004L12.1348 9.70671L12.8548 10.2667L12.3881 11.0734L11.5415 10.7334L10.8481 10.4534L10.2481 10.9067C9.96148 11.12 9.68815 11.28 9.41481 11.3934L8.70815 11.68L8.60148 12.4334L8.46815 13.3334H7.53481L7.30148 11.68L6.59481 11.3934C6.30815 11.2734 6.04148 11.12 5.77481 10.92L5.16815 10.4534L4.46148 10.74L3.61481 11.08L3.14815 10.2734L3.86815 9.71337L4.46148 9.24671L4.36815 8.49337C4.34815 8.28671 4.33481 8.13337 4.33481 8.00004C4.33481 7.86671 4.34815 7.71337 4.36815 7.51337L4.46148 6.76004L3.86815 6.29337L3.14815 5.73337L3.61481 4.92671L4.46148 5.26671L5.15481 5.54671L5.75481 5.09337C6.04148 4.88004 6.31481 4.72004 6.58815 4.60671L7.29481 4.32004L7.40148 3.56671L7.53481 2.66671H8.46148L8.69481 4.32004L9.40148 4.60671C9.68815 4.72671 9.95481 4.88004 10.2215 5.08004L10.8281 5.54671L11.5348 5.26004L12.3815 4.92004L12.8481 5.72671L12.1348 6.29337L11.5415 6.76004L11.6348 7.51337ZM8.00148 5.33337C6.52815 5.33337 5.33481 6.52671 5.33481 8.00004C5.33481 9.47337 6.52815 10.6667 8.00148 10.6667C9.47481 10.6667 10.6681 9.47337 10.6681 8.00004C10.6681 6.52671 9.47481 5.33337 8.00148 5.33337ZM8.00148 9.33337C7.26815 9.33337 6.66815 8.73337 6.66815 8.00004C6.66815 7.26671 7.26815 6.66671 8.00148 6.66671C8.73481 6.66671 9.33481 7.26671 9.33481 8.00004C9.33481 8.73337 8.73481 9.33337 8.00148 9.33337Z" />
                </svg>
              }
              color="primary"
            >
              Manage Payments
            </Button>
          </Stack>
        </div>
        <Divider />
        <div className="flex items-center justify-between">
          <span className="font-bold">Current plan</span>
          <Button variant="outline">Change plan</Button>
        </div>
        <div className="flex w-full gap-4">
          <Card
            className="flex-1 p-7"
            contentClassName="flex justify-between items-start"
          >
            <div className="flex flex-col">
              <span className="text-content-text-neutral-2 text-sm">
                Monthly plan
              </span>
              <div className="flex items-center gap-2 text-2xl font-bold">
                $1000{' '}
                <span className="text-content-text-neutral-2 text-sm">
                  /Month
                </span>
              </div>
            </div>
            <Stack>
              <Chip
                start={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="text-primary"
                    fill="currentColor"
                  >
                    <path d="M8 1.33337C4.32 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8 1.33337ZM8 13.3334C5.06 13.3334 2.66667 10.94 2.66667 8.00004C2.66667 5.06004 5.06 2.66671 8 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 8 13.3334ZM11.06 5.05337L6.66667 9.44671L4.94 7.72671L4 8.66671L6.66667 11.3334L12 6.00004L11.06 5.05337Z" />
                  </svg>
                }
                color="info"
                variant="outline"
              >
                Auto Renew
              </Chip>
              <Chip color="success" variant="outline">
                Active
              </Chip>
            </Stack>
          </Card>
          <Card className="flex-1 p-7">
            <div className="flex flex-col">
              <span className="text-content-text-neutral-2 text-sm">
                Renews on
              </span>
              <span className="text-2xl font-bold ">Mar 15, 2024</span>
            </div>
          </Card>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Usage</span>
          <span className="text-content-text-neutral-2">
            Your usage is renewed every month
          </span>
        </div>
        <div className="flex gap-4">
          <Card className="flex-1 p-7" contentClassName="flex flex-col gap-2">
            <div className="border-stroke-neutral-3 w-fit border p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M15 2.5C13.8281 2.5 12.8305 2.97321 12.1899 3.69385C11.5494 4.41449 11.25 5.33854 11.25 6.25C11.25 6.90401 11.4646 7.53774 11.7883 8.125H8.49732C6.93557 8.125 5.5613 9.18786 5.16968 10.6995L2.09107 22.5745C1.53226 24.7289 3.19295 26.875 5.41871 26.875H24.6961C26.8743 26.875 28.5241 24.8177 28.0518 22.6917L25.4126 10.8167C25.064 9.24931 23.6628 8.125 22.0569 8.125H18.2117C18.5354 7.53774 18.75 6.90401 18.75 6.25C18.75 5.33854 18.4506 4.41449 17.8101 3.69385C17.1695 2.97321 16.1719 2.5 15 2.5ZM15 4.375C15.7031 4.375 16.1118 4.60492 16.4087 4.93896C16.7056 5.27301 16.875 5.75521 16.875 6.25C16.875 6.74479 16.7056 7.22699 16.4087 7.56104C16.1118 7.89508 15.7031 8.125 15 8.125C14.2969 8.125 13.8882 7.89508 13.5913 7.56104C13.2944 7.22699 13.125 6.74479 13.125 6.25C13.125 5.75521 13.2944 5.27301 13.5913 4.93896C13.8882 4.60492 14.2969 4.375 15 4.375ZM8.49732 10H15H22.0569C22.7948 10 23.4226 10.503 23.5828 11.2231L26.2207 23.0981C26.4421 24.0946 25.7166 25 24.6961 25H5.41871C4.37321 25 3.64259 24.0575 3.90504 23.0457L6.98487 11.1707C7.16451 10.4773 7.78033 10 8.49732 10ZM14.9854 11.2366C14.7369 11.2405 14.5002 11.3428 14.3272 11.5211C14.1541 11.6994 14.0589 11.9391 14.0625 12.1875V12.6416C12.8151 12.998 11.875 14.1053 11.875 15.4578V15.459C11.875 17.0926 13.2199 18.4375 14.8535 18.4375H15.7715C16.3916 18.4375 16.875 18.9209 16.875 19.541C16.875 20.1576 16.3971 20.6381 15.78 20.6433L14.6301 20.6531C14.2268 20.6531 13.9016 20.3915 13.7903 20.0378C13.7553 19.9181 13.6968 19.8065 13.6182 19.7096C13.5395 19.6128 13.4423 19.5326 13.3323 19.4737C13.2223 19.4149 13.1016 19.3787 12.9774 19.3671C12.8531 19.3555 12.7278 19.3688 12.6088 19.4062C12.4898 19.4437 12.3795 19.5045 12.2843 19.5852C12.1891 19.6658 12.1109 19.7646 12.0544 19.8759C11.9979 19.9871 11.9641 20.1085 11.9551 20.2329C11.9461 20.3574 11.962 20.4824 12.002 20.6006C12.2935 21.5269 13.1124 22.1213 14.0625 22.3401V22.8125C14.0608 22.9367 14.0837 23.0601 14.13 23.1754C14.1764 23.2906 14.2451 23.3956 14.3324 23.484C14.4196 23.5725 14.5235 23.6428 14.6381 23.6907C14.7528 23.7387 14.8758 23.7634 15 23.7634C15.1242 23.7634 15.2473 23.7387 15.3619 23.6907C15.4765 23.6428 15.5804 23.5725 15.6677 23.484C15.7549 23.3956 15.8237 23.2906 15.87 23.1754C15.9163 23.0601 15.9393 22.9367 15.9375 22.8125V22.489C17.4931 22.3976 18.75 21.1156 18.75 19.541C18.75 17.9073 17.4052 16.5625 15.7715 16.5625H14.8535C14.2334 16.5625 13.75 16.0791 13.75 15.459V15.4578C13.75 14.8439 14.2237 14.3632 14.8377 14.3542L15.3528 14.3469C15.7584 14.3469 16.086 14.6117 16.1951 14.9683C16.2302 15.087 16.2885 15.1977 16.3666 15.2938C16.4447 15.39 16.5411 15.4697 16.6501 15.5283C16.7592 15.587 16.8789 15.6235 17.0021 15.6356C17.1254 15.6478 17.2498 15.6354 17.3683 15.5992C17.4868 15.563 17.5969 15.5037 17.6923 15.4247C17.7877 15.3457 17.8664 15.2486 17.9241 15.1389C17.9817 15.0293 18.0171 14.9094 18.0281 14.786C18.0391 14.6626 18.0256 14.5383 17.9883 14.4202C17.7037 13.4897 16.8862 12.8926 15.9375 12.6672V12.1875C15.9393 12.062 15.9159 11.9375 15.8687 11.8212C15.8214 11.7049 15.7514 11.5993 15.6626 11.5106C15.5738 11.422 15.4681 11.352 15.3518 11.3049C15.2354 11.2579 15.1108 11.2346 14.9854 11.2366Z" />
              </svg>
            </div>
            <div className="text-content-text-neutral-2 flex items-center gap-2 text-sm">
              Design Credits
              <Tooltip content={'Hover Me'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                >
                  <path d="M7.33334 4.66671H8.66668V6.00004H7.33334V4.66671ZM7.33334 7.33337H8.66668V11.3334H7.33334V7.33337ZM8.00001 1.33337C4.32001 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00001 1.33337ZM8.00001 13.3334C5.06001 13.3334 2.66668 10.94 2.66668 8.00004C2.66668 5.06004 5.06001 2.66671 8.00001 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 8.00001 13.3334Z" />
                </svg>
              </Tooltip>
            </div>
            <span className="text-lg font-bold">100 of 500</span>
            <div className="bg-background-neutral-raised-5 relative h-3 w-full rounded-full border border-background-brand-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(100 / 500) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(100 / 500) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base blur-md"
              />
            </div>
          </Card>
          <Card className="flex-1 p-7" contentClassName="flex flex-col gap-2">
            <div className="border-stroke-neutral-3 w-fit border p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M15 2.5C11.5593 2.5 8.75 5.30933 8.75 8.75C8.75 12.1907 11.5593 15 15 15C18.4407 15 21.25 12.1907 21.25 8.75C21.25 5.30933 18.4407 2.5 15 2.5ZM15 4.375C17.4274 4.375 19.375 6.32265 19.375 8.75C19.375 11.1774 17.4274 13.125 15 13.125C12.5726 13.125 10.625 11.1774 10.625 8.75C10.625 6.32265 12.5726 4.375 15 4.375ZM7.48657 17.5C6.12419 17.5 5 18.6242 5 19.9866V20.9375C5 23.1901 6.42454 24.9326 8.31665 25.9766C10.2088 27.0205 12.6051 27.5 15 27.5C17.3949 27.5 19.7912 27.0205 21.6833 25.9766C23.2966 25.0865 24.5108 23.6641 24.8511 21.875H25.0012V19.9866C25.0012 18.6242 23.8758 17.5 22.5134 17.5H7.48657ZM7.48657 19.375H22.5134C22.8623 19.375 23.1262 19.6377 23.1262 19.9866V20H23.125V20.9375C23.125 22.4349 22.2839 23.5049 20.7776 24.3359C19.2713 25.167 17.1363 25.625 15 25.625C12.8637 25.625 10.7287 25.167 9.22241 24.3359C7.71608 23.5049 6.875 22.4349 6.875 20.9375V19.9866C6.875 19.6377 7.1377 19.375 7.48657 19.375Z" />
              </svg>
            </div>
            <div className="text-content-text-neutral-2 flex items-center gap-2 text-sm">
              Design Credits
              <Tooltip content={'Hover Me'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                >
                  <path d="M7.33334 4.66671H8.66668V6.00004H7.33334V4.66671ZM7.33334 7.33337H8.66668V11.3334H7.33334V7.33337ZM8.00001 1.33337C4.32001 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00001 1.33337ZM8.00001 13.3334C5.06001 13.3334 2.66668 10.94 2.66668 8.00004C2.66668 5.06004 5.06001 2.66671 8.00001 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 8.00001 13.3334Z" />
                </svg>
              </Tooltip>
            </div>
            <span className="text-lg font-bold">33 of 50</span>
            <div className="bg-background-neutral-raised-5 relative h-3 w-full rounded-full border border-background-brand-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(33 / 50) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(33 / 50) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base blur-md"
              />
            </div>
          </Card>
          <Card className="flex-1 p-7" contentClassName="flex flex-col gap-2">
            <div className="border-stroke-neutral-3 w-fit border p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M5.3125 6.25C3.42514 6.25 1.875 7.80014 1.875 9.6875V21.5625C1.875 23.4499 3.42514 25 5.3125 25H24.6875C26.5749 25 28.125 23.4499 28.125 21.5625V9.6875C28.125 7.80014 26.5749 6.25 24.6875 6.25H5.3125ZM5.3125 8.125H24.6875C25.5614 8.125 26.25 8.81361 26.25 9.6875V21.5625C26.25 22.4364 25.5614 23.125 24.6875 23.125H5.3125C4.43861 23.125 3.75 22.4364 3.75 21.5625V9.6875C3.75 8.81361 4.43861 8.125 5.3125 8.125ZM6.5625 10.625C6.43827 10.6232 6.31493 10.6462 6.19965 10.6925C6.08436 10.7388 5.97944 10.8076 5.89097 10.8949C5.8025 10.9821 5.73224 11.086 5.68429 11.2006C5.63634 11.3153 5.61165 11.4383 5.61165 11.5625C5.61165 11.6867 5.63634 11.8097 5.68429 11.9244C5.73224 12.039 5.8025 12.1429 5.89097 12.2301C5.97944 12.3174 6.08436 12.3862 6.19965 12.4325C6.31493 12.4788 6.43827 12.5018 6.5625 12.5H15.3125C15.4367 12.5018 15.5601 12.4788 15.6754 12.4325C15.7906 12.3862 15.8956 12.3174 15.984 12.2301C16.0725 12.1429 16.1428 12.039 16.1907 11.9244C16.2387 11.8097 16.2634 11.6867 16.2634 11.5625C16.2634 11.4383 16.2387 11.3153 16.1907 11.2006C16.1428 11.086 16.0725 10.9821 15.984 10.8949C15.8956 10.8076 15.7906 10.7388 15.6754 10.6925C15.5601 10.6462 15.4367 10.6232 15.3125 10.625H6.5625ZM6.5625 14.375C6.43827 14.3732 6.31493 14.3962 6.19965 14.4425C6.08436 14.4888 5.97944 14.5576 5.89097 14.6449C5.8025 14.7321 5.73224 14.836 5.68429 14.9506C5.63634 15.0653 5.61165 15.1883 5.61165 15.3125C5.61165 15.4367 5.63634 15.5597 5.68429 15.6744C5.73224 15.789 5.8025 15.8929 5.89097 15.9801C5.97944 16.0674 6.08436 16.1362 6.19965 16.1825C6.31493 16.2288 6.43827 16.2518 6.5625 16.25H12.1875C12.3117 16.2518 12.4351 16.2288 12.5504 16.1825C12.6656 16.1362 12.7706 16.0674 12.859 15.9801C12.9475 15.8929 13.0178 15.789 13.0657 15.6744C13.1137 15.5597 13.1384 15.4367 13.1384 15.3125C13.1384 15.1883 13.1137 15.0653 13.0657 14.9506C13.0178 14.836 12.9475 14.7321 12.859 14.6449C12.7706 14.5576 12.6656 14.4888 12.5504 14.4425C12.4351 14.3962 12.3117 14.3732 12.1875 14.375H6.5625ZM16.7188 16.25C16.1127 16.25 15.7213 16.607 15.4639 16.9226C15.2064 17.2382 15.0268 17.5901 14.873 17.9675C14.5656 18.7224 14.375 19.557 14.375 20.3125C14.3732 20.4367 14.3962 20.5601 14.4425 20.6754C14.4888 20.7906 14.5576 20.8956 14.6449 20.984C14.7321 21.0725 14.836 21.1428 14.9506 21.1907C15.0653 21.2387 15.1883 21.2634 15.3125 21.2634C15.4367 21.2634 15.5597 21.2387 15.6744 21.1907C15.789 21.1428 15.8929 21.0725 15.9801 20.984C16.0674 20.8956 16.1362 20.7906 16.1825 20.6754C16.2288 20.5601 16.2518 20.4367 16.25 20.3125C16.25 19.9255 16.3963 19.1975 16.6089 18.6755C16.6261 18.6334 16.641 18.6234 16.6589 18.584C16.7285 18.75 16.7906 18.8707 16.8628 19.0698C17.0009 19.4507 17.1347 19.852 17.3096 20.2234C17.397 20.4091 17.4889 20.5899 17.6526 20.7837C17.8163 20.9775 18.125 21.25 18.5938 21.25C19.4844 21.25 19.9785 20.6252 20.26 20.2649C20.2635 20.2604 20.2638 20.2596 20.2673 20.2551C20.344 20.3245 20.3638 20.3544 20.4675 20.4333C21.026 20.8589 21.9623 21.25 23.4375 21.25C23.5617 21.2518 23.6851 21.2288 23.8004 21.1825C23.9156 21.1362 24.0206 21.0674 24.109 20.9802C24.1975 20.8929 24.2678 20.789 24.3157 20.6744C24.3637 20.5597 24.3884 20.4367 24.3884 20.3125C24.3884 20.1883 24.3637 20.0653 24.3157 19.9506C24.2678 19.836 24.1975 19.7321 24.109 19.6449C24.0206 19.5576 23.9156 19.4888 23.8004 19.4425C23.6851 19.3962 23.5617 19.3732 23.4375 19.375C22.2564 19.375 21.8646 19.1411 21.6028 18.9417C21.4719 18.8419 21.3734 18.7303 21.189 18.5632C21.0045 18.3962 20.625 18.125 20.1562 18.125C19.5586 18.125 19.3155 18.4555 19.1553 18.6365C19.0249 18.7837 18.9397 18.9061 18.8525 19.0222C18.7785 18.8291 18.7119 18.6685 18.6255 18.4302C18.4804 18.0298 18.3269 17.6071 18.1006 17.2107C17.9874 17.0125 17.8576 16.8154 17.6501 16.6272C17.4427 16.4389 17.1103 16.25 16.7188 16.25Z" />
              </svg>
            </div>
            <div className="text-content-text-neutral-2 flex items-center gap-2 text-sm">
              Design Credits
              <Tooltip content={'Hover Me'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                >
                  <path d="M7.33334 4.66671H8.66668V6.00004H7.33334V4.66671ZM7.33334 7.33337H8.66668V11.3334H7.33334V7.33337ZM8.00001 1.33337C4.32001 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00001 1.33337ZM8.00001 13.3334C5.06001 13.3334 2.66668 10.94 2.66668 8.00004C2.66668 5.06004 5.06001 2.66671 8.00001 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 8.00001 13.3334Z" />
                </svg>
              </Tooltip>
            </div>
            <span className="text-lg font-bold">47 of 125</span>
            <div className="bg-background-neutral-raised-5 relative h-3 w-full rounded-full border border-background-brand-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(47 / 125) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(47 / 125) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base blur-md"
              />
            </div>
          </Card>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const BillingSubscription = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:min-w-[960px] md:max-w-[1200px]"
  >
    <Card className="p-12 transition-colors">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Billing</h2>
          <Stack>
            <Button
              className="w-fit border-none px-4 py-2 font-semibold transition-colors focus:outline-hidden"
              variant="filled"
              color="primary"
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2.66666 8.00008L3.60666 8.94008L7.33332 5.22008V13.3334H8.66666V5.22008L12.3867 8.94675L13.3333 8.00008L7.99999 2.66675L2.66666 8.00008Z" />
                </svg>
              }
            >
              Upgrade
            </Button>
            <Button
              className="flex items-center gap-2 px-4 py-2 font-semibold "
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8.00002 2.66675V0.666748L5.33335 3.33341L8.00002 6.00008V4.00008C10.2067 4.00008 12 5.79342 12 8.00008C12 8.67342 11.8334 9.31342 11.5334 9.86675L12.5067 10.8401C13.0267 10.0201 13.3334 9.04675 13.3334 8.00008C13.3334 5.05341 10.9467 2.66675 8.00002 2.66675ZM8.00002 12.0001C5.79335 12.0001 4.00002 10.2067 4.00002 8.00008C4.00002 7.32675 4.16669 6.68675 4.46669 6.13341L3.49335 5.16008C2.97335 5.98008 2.66669 6.95341 2.66669 8.00008C2.66669 10.9467 5.05335 13.3334 8.00002 13.3334V15.3334L10.6667 12.6667L8.00002 10.0001V12.0001Z" />
                </svg>
              }
              variant="outline"
            >
              Change
            </Button>
          </Stack>
        </div>
        <Divider />
        <div className="flex flex-col">
          <span className="text-lg font-bold">Current Subscription</span>
          <span className="text-content-text-neutral-2">
            Your account is billed monthly and the next payment is due{' '}
            <span className="text-content-text-neutral-base font-semibold">
              March 15, 2024
            </span>
          </span>
        </div>
        <div className="border-stroke-neutral-3 flex overflow-hidden rounded-xl border">
          <div className="flex flex-1 flex-col">
            <div className="bg-background-neutral-raised-5 text-content-text-neutral-2 px-6 py-4 text-sm">
              Selected plan
            </div>
            <div className="text-content-text-neutral-2 flex-1 px-6 py-4 text-sm">
              Team
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="bg-background-neutral-raised-5 text-content-text-neutral-2 px-6 py-4 text-sm">
              Price
            </div>
            <div className="text-content-text-neutral-2 flex flex-1 items-center gap-2 px-6 py-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="text-content-text-neutral-base mb-px h-4 w-4"
                fill="currentColor"
              >
                <path d="M8.5 1.33325C7.875 1.33325 7.34294 1.58563 7.0013 1.96997C6.65967 2.35431 6.5 2.84714 6.5 3.33325C6.5 3.68206 6.61446 4.02005 6.78711 4.33325H5.0319C4.19896 4.33325 3.46602 4.90011 3.25716 5.7063L1.61523 12.0396C1.3172 13.1887 2.2029 14.3333 3.38997 14.3333H13.6712C14.8329 14.3333 15.7129 13.236 15.4609 12.1021L14.0534 5.7688C13.8675 4.93288 13.1201 4.33325 12.2637 4.33325H10.2129C10.3855 4.02005 10.5 3.68206 10.5 3.33325C10.5 2.84714 10.3403 2.35431 9.9987 1.96997C9.65706 1.58563 9.125 1.33325 8.5 1.33325ZM8.5 2.33325C8.875 2.33325 9.09294 2.45587 9.2513 2.63403C9.40967 2.81219 9.5 3.06936 9.5 3.33325C9.5 3.59714 9.40967 3.85431 9.2513 4.03247C9.09294 4.21063 8.875 4.33325 8.5 4.33325C8.125 4.33325 7.90706 4.21063 7.7487 4.03247C7.59033 3.85431 7.5 3.59714 7.5 3.33325C7.5 3.06936 7.59033 2.81219 7.7487 2.63403C7.90706 2.45587 8.125 2.33325 8.5 2.33325ZM5.0319 5.33325H8.5H12.2637C12.6572 5.33325 12.9921 5.60151 13.0775 5.9856L14.4844 12.3189C14.6025 12.8504 14.2155 13.3333 13.6712 13.3333H3.38997C2.83238 13.3333 2.44271 12.8306 2.58268 12.2909L4.22526 5.9576C4.32107 5.58779 4.6495 5.33325 5.0319 5.33325ZM8.49219 5.99276C8.35969 5.99483 8.23344 6.0494 8.14115 6.1445C8.04887 6.23959 7.9981 6.36742 8 6.49992V6.74211C7.33469 6.93217 6.83333 7.52276 6.83333 8.24406V8.24471C6.83333 9.11598 7.55058 9.83325 8.42188 9.83325H8.91146C9.24217 9.83325 9.5 10.0911 9.5 10.4218C9.5 10.7506 9.24509 11.0069 8.91602 11.0097L8.30273 11.0149C8.08763 11.0149 7.91417 10.8754 7.85482 10.6868C7.83617 10.6229 7.80496 10.5634 7.76302 10.5117C7.72107 10.4601 7.66924 10.4173 7.61056 10.3859C7.55187 10.3545 7.48752 10.3352 7.42126 10.329C7.35501 10.3228 7.28818 10.3299 7.22471 10.3499C7.16123 10.3699 7.10238 10.4023 7.05161 10.4453C7.00083 10.4883 6.95915 10.5411 6.92901 10.6004C6.89886 10.6597 6.88086 10.7245 6.87606 10.7908C6.87126 10.8572 6.87975 10.9239 6.90104 10.9869C7.05651 11.4809 7.49329 11.798 8 11.9146V12.1666C7.99906 12.2328 8.0113 12.2986 8.03601 12.3601C8.06072 12.4216 8.0974 12.4776 8.14392 12.5247C8.19044 12.5719 8.24588 12.6094 8.30701 12.635C8.36814 12.6605 8.43374 12.6737 8.5 12.6737C8.56626 12.6737 8.63186 12.6605 8.69299 12.635C8.75412 12.6094 8.80956 12.5719 8.85608 12.5247C8.9026 12.4776 8.93928 12.4216 8.96399 12.3601C8.9887 12.2986 9.00094 12.2328 9 12.1666V11.9941C9.82966 11.9453 10.5 11.2616 10.5 10.4218C10.5 9.5505 9.78275 8.83325 8.91146 8.83325H8.42188C8.09117 8.83325 7.83333 8.57542 7.83333 8.24471V8.24406C7.83333 7.91666 8.08595 7.66029 8.41341 7.65552L8.68815 7.65161C8.90446 7.65161 9.07921 7.79284 9.13737 7.98299C9.15609 8.04634 9.18718 8.10536 9.22883 8.15663C9.27049 8.2079 9.3219 8.25041 9.38007 8.28169C9.43825 8.31298 9.50206 8.33244 9.5678 8.33893C9.63354 8.34542 9.69991 8.33881 9.76309 8.31951C9.82626 8.3002 9.88499 8.26856 9.93587 8.22643C9.98674 8.18429 10.0288 8.13249 10.0595 8.07402C10.0903 8.01555 10.1091 7.95157 10.115 7.88577C10.1209 7.81998 10.1136 7.75367 10.0938 7.69067C9.94196 7.19443 9.50598 6.87599 9 6.75578V6.49992C9.00096 6.433 8.98848 6.36656 8.96329 6.30455C8.9381 6.24255 8.90072 6.18623 8.85336 6.13893C8.80601 6.09164 8.74964 6.05433 8.6876 6.02922C8.62556 6.00411 8.55911 5.99171 8.49219 5.99276Z" />
              </svg>
              $60/Month
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="bg-background-neutral-raised-5 text-content-text-neutral-2 px-6 py-4 text-sm">
              Seats
            </div>
            <div className="text-content-text-neutral-2 flex flex-1 items-center gap-2 px-6 py-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="text-content-text-neutral-base mb-px h-4 w-4"
                fill="currentColor"
              >
                <path d="M8 1.33325C6.16497 1.33325 4.66666 2.83156 4.66666 4.66658C4.66666 6.50161 6.16497 7.99992 8 7.99992C9.83502 7.99992 11.3333 6.50161 11.3333 4.66658C11.3333 2.83156 9.83502 1.33325 8 1.33325ZM8 2.33325C9.29459 2.33325 10.3333 3.372 10.3333 4.66658C10.3333 5.96117 9.29459 6.99992 8 6.99992C6.70541 6.99992 5.66666 5.96117 5.66666 4.66658C5.66666 3.372 6.70541 2.33325 8 2.33325ZM3.99284 9.33325C3.26623 9.33325 2.66666 9.93282 2.66666 10.6594V11.1666C2.66666 12.368 3.42642 13.2973 4.43554 13.8541C5.44467 14.4108 6.7227 14.6666 8 14.6666C9.2773 14.6666 10.5553 14.4108 11.5645 13.8541C12.4249 13.3794 13.0724 12.6208 13.2539 11.6666H13.334V10.6594C13.334 9.93282 12.7338 9.33325 12.0072 9.33325H3.99284ZM3.99284 10.3333H12.0072C12.1932 10.3333 12.334 10.4734 12.334 10.6594V10.6666H12.3333V11.1666C12.3333 11.9652 11.8848 12.5358 11.0814 12.9791C10.278 13.4223 9.13936 13.6666 8 13.6666C6.86063 13.6666 5.72199 13.4223 4.91862 12.9791C4.11524 12.5358 3.66666 11.9652 3.66666 11.1666V10.6594C3.66666 10.4734 3.80677 10.3333 3.99284 10.3333Z" />
              </svg>
              65 Seats
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="bg-background-neutral-raised-5 text-content-text-neutral-2 px-6 py-4 text-sm">
              Yearly Cost
            </div>
            <div className="text-content-text-neutral-2 flex flex-1 items-center gap-2 px-6 py-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="text-content-text-neutral-base mb-px h-4 w-4"
                fill="currentColor"
              >
                <path d="M13.1667 6.33325H10.5V2.33325H6.50001V6.33325H3.83334L8.50001 10.9999L13.1667 6.33325ZM7.83334 7.66658V3.66659H9.16668V7.66658H9.94668L8.50001 9.11325L7.05334 7.66658H7.83334ZM3.83334 12.3333H13.1667V13.6666H3.83334V12.3333Z" />
              </svg>
              $780
            </div>
          </div>
        </div>
        <span className="mb-8 mt-4 text-lg font-bold">Seats usage</span>
        <div className="flex w-full gap-4">
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Editors</span>
              <span className="text-sm">11/30 used</span>
            </div>
            <div className="bg-background-neutral-raised-5 relative h-3 w-full rounded-full border border-background-brand-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(11 / 30) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(11 / 30) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-background-brand-base blur-md"
              />
            </div>
            <Button
              variant="text"
              color="primary"
              className="w-fit px-0"
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M11.9548 7.65325C11.9815 7.43992 12.0015 7.22659 12.0015 6.99992C12.0015 6.77325 11.9815 6.55992 11.9548 6.34659L13.3615 5.24659C13.4881 5.14659 13.5215 4.96659 13.4415 4.81992L12.1081 2.51325C12.0481 2.40659 11.9348 2.34659 11.8148 2.34659C11.7748 2.34659 11.7348 2.35325 11.7015 2.36659L10.0415 3.03325C9.69481 2.76659 9.32148 2.54659 8.91481 2.37992L8.66148 0.613252C8.64148 0.453252 8.50148 0.333252 8.33481 0.333252H5.66815C5.50148 0.333252 5.36148 0.453252 5.34148 0.613252L5.08815 2.37992C4.68148 2.54659 4.30815 2.77325 3.96148 3.03325L2.30148 2.36659C2.26148 2.35325 2.22148 2.34659 2.18148 2.34659C2.06815 2.34659 1.95481 2.40659 1.89481 2.51325L0.56148 4.81992C0.474813 4.96659 0.514813 5.14659 0.64148 5.24659L2.04815 6.34659C2.02148 6.55992 2.00148 6.77992 2.00148 6.99992C2.00148 7.21992 2.02148 7.43992 2.04815 7.65325L0.64148 8.75325C0.514813 8.85325 0.48148 9.03325 0.56148 9.17992L1.89481 11.4866C1.95481 11.5933 2.06815 11.6533 2.18815 11.6533C2.22815 11.6533 2.26815 11.6466 2.30148 11.6333L3.96148 10.9666C4.30815 11.2333 4.68148 11.4533 5.08815 11.6199L5.34148 13.3866C5.36148 13.5466 5.50148 13.6666 5.66815 13.6666H8.33481C8.50148 13.6666 8.64148 13.5466 8.66148 13.3866L8.91481 11.6199C9.32148 11.4533 9.69481 11.2266 10.0415 10.9666L11.7015 11.6333C11.7415 11.6466 11.7815 11.6533 11.8215 11.6533C11.9348 11.6533 12.0481 11.5933 12.1081 11.4866L13.4415 9.17992C13.5215 9.03325 13.4881 8.85325 13.3615 8.75325L11.9548 7.65325ZM10.6348 6.51325C10.6615 6.71992 10.6681 6.85992 10.6681 6.99992C10.6681 7.13992 10.6548 7.28659 10.6348 7.48659L10.5415 8.23992L11.1348 8.70659L11.8548 9.26659L11.3881 10.0733L10.5415 9.73325L9.84815 9.45325L9.24815 9.90659C8.96148 10.1199 8.68815 10.2799 8.41481 10.3933L7.70815 10.6799L7.60148 11.4333L7.46815 12.3333H6.53481L6.30148 10.6799L5.59481 10.3933C5.30815 10.2733 5.04148 10.1199 4.77481 9.91992L4.16815 9.45325L3.46148 9.73992L2.61481 10.0799L2.14815 9.27325L2.86815 8.71325L3.46148 8.24659L3.36815 7.49325C3.34815 7.28659 3.33481 7.13325 3.33481 6.99992C3.33481 6.86659 3.34815 6.71325 3.36815 6.51325L3.46148 5.75992L2.86815 5.29325L2.14815 4.73325L2.61481 3.92659L3.46148 4.26659L4.15481 4.54659L4.75481 4.09325C5.04148 3.87992 5.31481 3.71992 5.58815 3.60659L6.29481 3.31992L6.40148 2.56659L6.53481 1.66659H7.46148L7.69481 3.31992L8.40148 3.60659C8.68815 3.72659 8.95481 3.87992 9.22148 4.07992L9.82815 4.54659L10.5348 4.25992L11.3815 3.91992L11.8481 4.72659L11.1348 5.29325L10.5415 5.75992L10.6348 6.51325ZM7.00148 4.33325C5.52815 4.33325 4.33481 5.52659 4.33481 6.99992C4.33481 8.47325 5.52815 9.66659 7.00148 9.66659C8.47481 9.66659 9.66815 8.47325 9.66815 6.99992C9.66815 5.52659 8.47481 4.33325 7.00148 4.33325ZM7.00148 8.33325C6.26815 8.33325 5.66815 7.73325 5.66815 6.99992C5.66815 6.26659 6.26815 5.66659 7.00148 5.66659C7.73481 5.66659 8.33481 6.26659 8.33481 6.99992C8.33481 7.73325 7.73481 8.33325 7.00148 8.33325Z" />
                </svg>
              }
            >
              Manage seats
            </Button>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Contributors</span>
              <span className="text-sm">18/20 used</span>
            </div>
            <div className="bg-background-neutral-raised-5 relative h-3 w-full rounded-full border border-orange-molten-fang-a-950/40">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(18 / 20) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-orange-molten-fang-a-950"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(18 / 20) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-orange-molten-fang-a-950 blur-md"
              />
            </div>
            <Button
              variant="text"
              className="w-fit px-0"
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  className="[svg]:fill-orange-molten-fang-a-950"
                >
                  <path d="M3 8.00008L3.94 8.94008L7.66667 5.22008V13.3334H9V5.22008L12.72 8.94675L13.6667 8.00008L8.33333 2.66675L3 8.00008Z" />
                </svg>
              }
            >
              Upgrade
            </Button>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Viewers</span>
              <span className="text-sm">11/15 used</span>
            </div>
            <div className="bg-background-neutral-raised-5 relative h-3 w-full rounded-full border border-orange-molten-fang-a-950/40">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(11 / 15) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-orange-molten-fang-a-950"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(11 / 15) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute h-full rounded-full bg-linear-to-r from-transparent to-orange-molten-fang-a-950 blur-md"
              />
            </div>
            <Button
              variant="text"
              className="w-fit px-0"
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  className="[svg]:fill-orange-molten-fang-a-950"
                >
                  <path d="M3 8.00008L3.94 8.94008L7.66667 5.22008V13.3334H9V5.22008L12.72 8.94675L13.6667 8.00008L8.33333 2.66675L3 8.00008Z" />
                </svg>
              }
            >
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const BillingInformation = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:min-w-[960px] md:max-w-[1200px]"
  >
    <div className="text-content-text-neutral-base mb-2 flex justify-between gap-2 rounded-xl border border-background-brand-base bg-blue-hyperstream-a-200 p-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              className="mb-0.5"
              fill="currentColor"
            >
              <path d="M3.89583 4.58325C2.51177 4.58325 1.375 5.72002 1.375 7.10409V15.8124C1.375 17.1965 2.51177 18.3333 3.89583 18.3333H18.1042C19.4882 18.3333 20.625 17.1965 20.625 15.8124V7.10409C20.625 5.72002 19.4882 4.58325 18.1042 4.58325H3.89583ZM3.89583 5.95825H18.1042C18.745 5.95825 19.25 6.46323 19.25 7.10409V15.8124C19.25 16.4533 18.745 16.9583 18.1042 16.9583H3.89583C3.25498 16.9583 2.75 16.4533 2.75 15.8124V7.10409C2.75 6.46323 3.25498 5.95825 3.89583 5.95825ZM4.8125 7.79159C4.7214 7.7903 4.63095 7.80713 4.54641 7.8411C4.46187 7.87507 4.38492 7.92551 4.32004 7.98948C4.25516 8.05344 4.20364 8.12967 4.16848 8.21372C4.13332 8.29777 4.11521 8.38797 4.11521 8.47909C4.11521 8.5702 4.13332 8.6604 4.16848 8.74445C4.20364 8.8285 4.25516 8.90473 4.32004 8.9687C4.38492 9.03266 4.46187 9.0831 4.54641 9.11707C4.63095 9.15104 4.7214 9.16787 4.8125 9.16659H11.2292C11.3203 9.16787 11.4107 9.15104 11.4953 9.11707C11.5798 9.0831 11.6567 9.03266 11.7216 8.9687C11.7865 8.90473 11.838 8.8285 11.8732 8.74445C11.9084 8.6604 11.9265 8.5702 11.9265 8.47909C11.9265 8.38797 11.9084 8.29777 11.8732 8.21372C11.838 8.12967 11.7865 8.05344 11.7216 7.98948C11.6567 7.92551 11.5798 7.87507 11.4953 7.8411C11.4107 7.80713 11.3203 7.7903 11.2292 7.79159H4.8125ZM4.8125 10.5416C4.7214 10.5403 4.63095 10.5571 4.54641 10.5911C4.46187 10.6251 4.38492 10.6755 4.32004 10.7395C4.25516 10.8034 4.20364 10.8797 4.16848 10.9637C4.13332 11.0478 4.11521 11.138 4.11521 11.2291C4.11521 11.3202 4.13332 11.4104 4.16848 11.4945C4.20364 11.5785 4.25516 11.6547 4.32004 11.7187C4.38492 11.7827 4.46187 11.8331 4.54641 11.8671C4.63095 11.901 4.7214 11.9179 4.8125 11.9166H8.9375C9.0286 11.9179 9.11905 11.901 9.20359 11.8671C9.28813 11.8331 9.36508 11.7827 9.42996 11.7187C9.49484 11.6547 9.54636 11.5785 9.58152 11.4945C9.61668 11.4104 9.63479 11.3202 9.63479 11.2291C9.63479 11.138 9.61668 11.0478 9.58152 10.9637C9.54636 10.8797 9.49484 10.8034 9.42996 10.7395C9.36508 10.6755 9.28813 10.6251 9.20359 10.5911C9.11905 10.5571 9.0286 10.5403 8.9375 10.5416H4.8125ZM12.2604 11.9166C11.816 11.9166 11.529 12.1784 11.3402 12.4098C11.1514 12.6413 11.0196 12.8993 10.9069 13.1761C10.6815 13.7297 10.5417 14.3417 10.5417 14.8958C10.5404 14.9869 10.5572 15.0773 10.5912 15.1618C10.6252 15.2464 10.6756 15.3233 10.7396 15.3882C10.8035 15.4531 10.8797 15.5046 10.9638 15.5398C11.0479 15.5749 11.1381 15.593 11.2292 15.593C11.3203 15.593 11.4105 15.5749 11.4945 15.5398C11.5786 15.5046 11.6548 15.4531 11.7188 15.3882C11.7827 15.3233 11.8332 15.2464 11.8672 15.1618C11.9011 15.0773 11.918 14.9869 11.9167 14.8958C11.9167 14.612 12.024 14.0781 12.1799 13.6953C12.1924 13.6644 12.2034 13.6571 12.2166 13.6282C12.2676 13.7499 12.3131 13.8384 12.366 13.9845C12.4673 14.2638 12.5655 14.558 12.6937 14.8304C12.7578 14.9666 12.8252 15.0992 12.9452 15.2413C13.0653 15.3834 13.2917 15.5833 13.6354 15.5833C14.2885 15.5833 14.6509 15.1251 14.8573 14.8608C14.8599 14.8575 14.8601 14.8569 14.8627 14.8537C14.9189 14.9046 14.9335 14.9264 15.0095 14.9844C15.4191 15.2964 16.1057 15.5833 17.1875 15.5833C17.2786 15.5845 17.3691 15.5677 17.4536 15.5337C17.5381 15.4998 17.6151 15.4493 17.68 15.3854C17.7448 15.3214 17.7964 15.2452 17.8315 15.1611C17.8667 15.0771 17.8848 14.9869 17.8848 14.8958C17.8848 14.8046 17.8667 14.7144 17.8315 14.6304C17.7964 14.5463 17.7448 14.4701 17.68 14.4061C17.6151 14.3422 17.5381 14.2917 17.4536 14.2578C17.3691 14.2238 17.2786 14.207 17.1875 14.2083C16.3214 14.2083 16.034 14.0367 15.842 13.8905C15.746 13.8173 15.6739 13.7355 15.5386 13.613C15.4033 13.4904 15.125 13.2916 14.7812 13.2916C14.343 13.2916 14.1647 13.534 14.0472 13.6667C13.9516 13.7747 13.8891 13.8644 13.8252 13.9495C13.7709 13.8079 13.722 13.6901 13.6587 13.5154C13.5523 13.2218 13.4397 12.9118 13.2738 12.6211C13.1908 12.4757 13.0955 12.3312 12.9434 12.1932C12.7913 12.0551 12.5475 11.9166 12.2604 11.9166Z" />
            </svg>
            <span className="font-bold">Teams Plan</span>
          </div>
          <span className="text-content-text-neutral-2 text-sm">
            Organization plan - collaborate on projects with your team
          </span>
        </div>
        <Button
          className="w-fit border-none px-4 py-2 font-semibold transition-colors focus:outline-hidden"
          endAdornment={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M7.99999 2.66675V0.666748L5.33332 3.33341L7.99999 6.00008V4.00008C10.2067 4.00008 12 5.79342 12 8.00008C12 8.67342 11.8333 9.31342 11.5333 9.86675L12.5067 10.8401C13.0267 10.0201 13.3333 9.04675 13.3333 8.00008C13.3333 5.05341 10.9467 2.66675 7.99999 2.66675ZM7.99999 12.0001C5.79332 12.0001 3.99999 10.2067 3.99999 8.00008C3.99999 7.32675 4.16666 6.68675 4.46666 6.13341L3.49332 5.16008C2.97332 5.98008 2.66666 6.95341 2.66666 8.00008C2.66666 10.9467 5.05332 13.3334 7.99999 13.3334V15.3334L10.6667 12.6667L7.99999 10.0001V12.0001Z" />
            </svg>
          }
        >
          Change Plan
        </Button>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">$62/mo</span>
        <span className="text-content-text-neutral-2 text-sm">65 Seats</span>
      </div>
    </div>
    <Card className="p-12 transition-colors">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Billing Information</h2>
        <Divider className="mb-4" />
        <div className="flex w-full gap-4">
          <Card contentClassName="flex flex-col gap-4 p-7" className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-bold">Payment Method</span>
              <Button
                className="w-fit border-none px-4 py-2 font-semibold transition-colors focus:outline-hidden"
                color="secondary"
              >
                Update
              </Button>
            </div>
            <div className="flex flex-col">
              <span className="text-content-text-neutral-2 text-sm">
                Card information
              </span>
              <span className="font-bold">Visa ending in 0315</span>
            </div>
            <div className="flex flex-col">
              <span className="text-content-text-neutral-2 text-sm">
                Name on card
              </span>
              <span className="font-bold">Austin McDaniel</span>
            </div>
          </Card>
          <Card contentClassName="flex flex-col gap-4 p-7" className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-bold">Billing Details</span>
              <Button
                className="w-fit border-none px-4 py-2 font-semibold transition-colors focus:outline-hidden"
                color="secondary"
              >
                Update
              </Button>
            </div>
            <div className="flex flex-col">
              <span className="text-content-text-neutral-2 text-sm">
                Next billing date
              </span>
              <span className="font-bold">Mar 15, 2025</span>
            </div>
            <div className="flex flex-col">
              <span className="text-content-text-neutral-2 text-sm">
                Billing address
              </span>
              <span className="font-bold">
                123 Florida Ave., Miami FL, 33125
              </span>
            </div>
          </Card>
        </div>
        <div className="flex w-full">
          <div className="flex flex-1 flex-col">
            <div className="border-stroke-neutral-3 border-b px-4 py-2">
              <span className="text-content-text-neutral-2 text-sm">
                Invoice Date
              </span>
            </div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <span className="font-bold">Mar 15, 2023</span>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <span className="font-bold">Mar 15, 2022</span>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <span className="font-bold">Mar 15, 2021</span>
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="border-stroke-neutral-3 border-b px-4 py-2">
              <span className="text-content-text-neutral-2 text-sm">
                Status
              </span>
            </div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <Chip color="warning" variant="outline">
                Pending
              </Chip>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <Chip color="success" variant="outline">
                Paid
              </Chip>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <Chip color="success" variant="outline">
                Paid
              </Chip>
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="border-stroke-neutral-3 border-b px-4 py-2">
              <span className="text-content-text-neutral-2 text-sm">
                Card Used
              </span>
            </div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2.83333 3.33325C1.82674 3.33325 1 4.15999 1 5.16659V11.4999C1 12.5065 1.82674 13.3333 2.83333 13.3333H13.1667C14.1733 13.3333 15 12.5065 15 11.4999V5.16659C15 4.15999 14.1733 3.33325 13.1667 3.33325H2.83333ZM2.83333 4.33325H13.1667C13.6327 4.33325 14 4.70051 14 5.16659V11.4999C14 11.966 13.6327 12.3333 13.1667 12.3333H2.83333C2.36726 12.3333 2 11.966 2 11.4999V5.16659C2 4.70051 2.36726 4.33325 2.83333 4.33325ZM3.5 5.66659C3.43374 5.66565 3.36796 5.67789 3.30648 5.7026C3.24499 5.7273 3.18903 5.76398 3.14185 5.81051C3.09466 5.85703 3.0572 5.91246 3.03162 5.97359C3.00605 6.03472 2.99288 6.10032 2.99288 6.16659C2.99288 6.23285 3.00605 6.29845 3.03162 6.35958C3.0572 6.42071 3.09466 6.47614 3.14185 6.52267C3.18903 6.56919 3.24499 6.60587 3.30648 6.63057C3.36796 6.65528 3.43374 6.66752 3.5 6.66659H8.16667C8.23292 6.66752 8.2987 6.65528 8.36019 6.63057C8.42167 6.60587 8.47763 6.56919 8.52482 6.52267C8.572 6.47614 8.60947 6.42071 8.63505 6.35958C8.66062 6.29845 8.67379 6.23285 8.67379 6.16659C8.67379 6.10032 8.66062 6.03472 8.63505 5.97359C8.60947 5.91246 8.572 5.85703 8.52482 5.81051C8.47763 5.76398 8.42167 5.7273 8.36019 5.7026C8.2987 5.67789 8.23292 5.66565 8.16667 5.66659H3.5ZM3.5 7.66659C3.43374 7.66565 3.36796 7.67789 3.30648 7.7026C3.24499 7.7273 3.18903 7.76398 3.14185 7.81051C3.09466 7.85703 3.0572 7.91246 3.03162 7.97359C3.00605 8.03472 2.99288 8.10032 2.99288 8.16659C2.99288 8.23285 3.00605 8.29845 3.03162 8.35958C3.0572 8.42071 3.09466 8.47614 3.14185 8.52267C3.18903 8.56919 3.24499 8.60587 3.30648 8.63057C3.36796 8.65528 3.43374 8.66752 3.5 8.66659H6.5C6.56626 8.66752 6.63204 8.65528 6.69352 8.63057C6.75501 8.60587 6.81097 8.56919 6.85815 8.52267C6.90534 8.47614 6.9428 8.42071 6.96838 8.35958C6.99395 8.29845 7.00712 8.23285 7.00712 8.16659C7.00712 8.10032 6.99395 8.03472 6.96838 7.97359C6.9428 7.91246 6.90534 7.85703 6.85815 7.81051C6.81097 7.76398 6.75501 7.7273 6.69352 7.7026C6.63204 7.67789 6.56626 7.66565 6.5 7.66659H3.5ZM8.91667 8.66659C8.59346 8.66659 8.3847 8.85699 8.2474 9.02531C8.11009 9.19363 8.01427 9.3813 7.93229 9.5826C7.76834 9.9852 7.66667 10.4303 7.66667 10.8333C7.66573 10.8995 7.67797 10.9653 7.70268 11.0268C7.72738 11.0883 7.76406 11.1442 7.81059 11.1914C7.85711 11.2386 7.91255 11.2761 7.97367 11.3016C8.0348 11.3272 8.1004 11.3404 8.16667 11.3404C8.23293 11.3404 8.29853 11.3272 8.35966 11.3016C8.42079 11.2761 8.47622 11.2386 8.52275 11.1914C8.56927 11.1442 8.60595 11.0883 8.63066 11.0268C8.65536 10.9653 8.6676 10.8995 8.66667 10.8333C8.66667 10.6269 8.7447 10.2386 8.85807 9.96021C8.86723 9.93771 8.87521 9.93241 8.88477 9.91138C8.92186 9.99989 8.95499 10.0643 8.99349 10.1705C9.06713 10.3736 9.13851 10.5876 9.23177 10.7857C9.2784 10.8848 9.32742 10.9812 9.41471 11.0846C9.50201 11.1879 9.66667 11.3333 9.91667 11.3333C10.3917 11.3333 10.6552 11 10.8053 10.8079C10.8072 10.8055 10.8074 10.805 10.8092 10.8027C10.8501 10.8397 10.8607 10.8556 10.916 10.8977C11.2139 11.1247 11.7132 11.3333 12.5 11.3333C12.5663 11.3342 12.632 11.3219 12.6935 11.2972C12.755 11.2725 12.811 11.2359 12.8582 11.1893C12.9053 11.1428 12.9428 11.0874 12.9684 11.0262C12.994 10.9651 13.0071 10.8995 13.0071 10.8333C13.0071 10.767 12.994 10.7014 12.9684 10.6403C12.9428 10.5791 12.9053 10.5237 12.8582 10.4772C12.811 10.4307 12.755 10.394 12.6935 10.3693C12.632 10.3446 12.5663 10.3323 12.5 10.3333C11.8701 10.3333 11.6611 10.2085 11.5215 10.1021C11.4517 10.0489 11.3992 9.98942 11.3008 9.90031C11.2024 9.8112 11 9.66659 10.75 9.66659C10.4313 9.66659 10.3016 9.84287 10.2161 9.93937C10.1466 10.0179 10.1012 10.0832 10.0547 10.1451C10.0152 10.0421 9.97967 9.95644 9.93359 9.82935C9.85619 9.61582 9.77434 9.3904 9.65365 9.17896C9.5933 9.07323 9.52403 8.96816 9.41341 8.86776C9.30279 8.76736 9.12547 8.66659 8.91667 8.66659Z" />
                </svg>
                <span className="text-content-text-neutral-2 text-sm">
                  Visa ending in 0315
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M2.83333 3.33325C1.82674 3.33325 1 4.15999 1 5.16659V11.4999C1 12.5065 1.82674 13.3333 2.83333 13.3333H13.1667C14.1733 13.3333 15 12.5065 15 11.4999V5.16659C15 4.15999 14.1733 3.33325 13.1667 3.33325H2.83333ZM2.83333 4.33325H13.1667C13.6327 4.33325 14 4.70051 14 5.16659V11.4999C14 11.966 13.6327 12.3333 13.1667 12.3333H2.83333C2.36726 12.3333 2 11.966 2 11.4999V5.16659C2 4.70051 2.36726 4.33325 2.83333 4.33325ZM3.5 5.66659C3.43374 5.66565 3.36796 5.67789 3.30648 5.7026C3.24499 5.7273 3.18903 5.76398 3.14185 5.81051C3.09466 5.85703 3.0572 5.91246 3.03162 5.97359C3.00605 6.03472 2.99288 6.10032 2.99288 6.16659C2.99288 6.23285 3.00605 6.29845 3.03162 6.35958C3.0572 6.42071 3.09466 6.47614 3.14185 6.52267C3.18903 6.56919 3.24499 6.60587 3.30648 6.63057C3.36796 6.65528 3.43374 6.66752 3.5 6.66659H8.16667C8.23292 6.66752 8.2987 6.65528 8.36019 6.63057C8.42167 6.60587 8.47763 6.56919 8.52482 6.52267C8.572 6.47614 8.60947 6.42071 8.63505 6.35958C8.66062 6.29845 8.67379 6.23285 8.67379 6.16659C8.67379 6.10032 8.66062 6.03472 8.63505 5.97359C8.60947 5.91246 8.572 5.85703 8.52482 5.81051C8.47763 5.76398 8.42167 5.7273 8.36019 5.7026C8.2987 5.67789 8.23292 5.66565 8.16667 5.66659H3.5ZM3.5 7.66659C3.43374 7.66565 3.36796 7.67789 3.30648 7.7026C3.24499 7.7273 3.18903 7.76398 3.14185 7.81051C3.09466 7.85703 3.0572 7.91246 3.03162 7.97359C3.00605 8.03472 2.99288 8.10032 2.99288 8.16659C2.99288 8.23285 3.00605 8.29845 3.03162 8.35958C3.0572 8.42071 3.09466 8.47614 3.14185 8.52267C3.18903 8.56919 3.24499 8.60587 3.30648 8.63057C3.36796 8.65528 3.43374 8.66752 3.5 8.66659H6.5C6.56626 8.66752 6.63204 8.65528 6.69352 8.63057C6.75501 8.60587 6.81097 8.56919 6.85815 8.52267C6.90534 8.47614 6.9428 8.42071 6.96838 8.35958C6.99395 8.29845 7.00712 8.23285 7.00712 8.16659C7.00712 8.10032 6.99395 8.03472 6.96838 7.97359C6.9428 7.91246 6.90534 7.85703 6.85815 7.81051C6.81097 7.76398 6.75501 7.7273 6.69352 7.7026C6.63204 7.67789 6.56626 7.66565 6.5 7.66659H3.5ZM8.91667 8.66659C8.59346 8.66659 8.3847 8.85699 8.2474 9.02531C8.11009 9.19363 8.01427 9.3813 7.93229 9.5826C7.76834 9.9852 7.66667 10.4303 7.66667 10.8333C7.66573 10.8995 7.67797 10.9653 7.70268 11.0268C7.72738 11.0883 7.76406 11.1442 7.81059 11.1914C7.85711 11.2386 7.91255 11.2761 7.97367 11.3016C8.0348 11.3272 8.1004 11.3404 8.16667 11.3404C8.23293 11.3404 8.29853 11.3272 8.35966 11.3016C8.42079 11.2761 8.47622 11.2386 8.52275 11.1914C8.56927 11.1442 8.60595 11.0883 8.63066 11.0268C8.65536 10.9653 8.6676 10.8995 8.66667 10.8333C8.66667 10.6269 8.7447 10.2386 8.85807 9.96021C8.86723 9.93771 8.87521 9.93241 8.88477 9.91138C8.92186 9.99989 8.95499 10.0643 8.99349 10.1705C9.06713 10.3736 9.13851 10.5876 9.23177 10.7857C9.2784 10.8848 9.32742 10.9812 9.41471 11.0846C9.50201 11.1879 9.66667 11.3333 9.91667 11.3333C10.3917 11.3333 10.6552 11 10.8053 10.8079C10.8072 10.8055 10.8074 10.805 10.8092 10.8027C10.8501 10.8397 10.8607 10.8556 10.916 10.8977C11.2139 11.1247 11.7132 11.3333 12.5 11.3333C12.5663 11.3342 12.632 11.3219 12.6935 11.2972C12.755 11.2725 12.811 11.2359 12.8582 11.1893C12.9053 11.1428 12.9428 11.0874 12.9684 11.0262C12.994 10.9651 13.0071 10.8995 13.0071 10.8333C13.0071 10.767 12.994 10.7014 12.9684 10.6403C12.9428 10.5791 12.9053 10.5237 12.8582 10.4772C12.811 10.4307 12.755 10.394 12.6935 10.3693C12.632 10.3446 12.5663 10.3323 12.5 10.3333C11.8701 10.3333 11.6611 10.2085 11.5215 10.1021C11.4517 10.0489 11.3992 9.98942 11.3008 9.90031C11.2024 9.8112 11 9.66659 10.75 9.66659C10.4313 9.66659 10.3016 9.84287 10.2161 9.93937C10.1466 10.0179 10.1012 10.0832 10.0547 10.1451C10.0152 10.0421 9.97967 9.95644 9.93359 9.82935C9.85619 9.61582 9.77434 9.3904 9.65365 9.17896C9.5933 9.07323 9.52403 8.96816 9.41341 8.86776C9.30279 8.76736 9.12547 8.66659 8.91667 8.66659Z" />
                  </svg>
                  <span className="text-content-text-neutral-2 text-sm">
                    Visa ending in 0315
                  </span>
                </div>
                <Button variant="ghost" className="p-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M12.6666 6.33325H9.99992V2.33325H5.99992V6.33325H3.33325L7.99992 10.9999L12.6666 6.33325ZM7.33325 7.66658V3.66659H8.66658V7.66658H9.44659L7.99992 9.11325L6.55325 7.66658H7.33325ZM3.33325 12.3333H12.6666V13.6666H3.33325V12.3333Z" />
                  </svg>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-stroke-neutral-3 flex-1 border-b px-4 py-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M2.83333 3.33325C1.82674 3.33325 1 4.15999 1 5.16659V11.4999C1 12.5065 1.82674 13.3333 2.83333 13.3333H13.1667C14.1733 13.3333 15 12.5065 15 11.4999V5.16659C15 4.15999 14.1733 3.33325 13.1667 3.33325H2.83333ZM2.83333 4.33325H13.1667C13.6327 4.33325 14 4.70051 14 5.16659V11.4999C14 11.966 13.6327 12.3333 13.1667 12.3333H2.83333C2.36726 12.3333 2 11.966 2 11.4999V5.16659C2 4.70051 2.36726 4.33325 2.83333 4.33325ZM3.5 5.66659C3.43374 5.66565 3.36796 5.67789 3.30648 5.7026C3.24499 5.7273 3.18903 5.76398 3.14185 5.81051C3.09466 5.85703 3.0572 5.91246 3.03162 5.97359C3.00605 6.03472 2.99288 6.10032 2.99288 6.16659C2.99288 6.23285 3.00605 6.29845 3.03162 6.35958C3.0572 6.42071 3.09466 6.47614 3.14185 6.52267C3.18903 6.56919 3.24499 6.60587 3.30648 6.63057C3.36796 6.65528 3.43374 6.66752 3.5 6.66659H8.16667C8.23292 6.66752 8.2987 6.65528 8.36019 6.63057C8.42167 6.60587 8.47763 6.56919 8.52482 6.52267C8.572 6.47614 8.60947 6.42071 8.63505 6.35958C8.66062 6.29845 8.67379 6.23285 8.67379 6.16659C8.67379 6.10032 8.66062 6.03472 8.63505 5.97359C8.60947 5.91246 8.572 5.85703 8.52482 5.81051C8.47763 5.76398 8.42167 5.7273 8.36019 5.7026C8.2987 5.67789 8.23292 5.66565 8.16667 5.66659H3.5ZM3.5 7.66659C3.43374 7.66565 3.36796 7.67789 3.30648 7.7026C3.24499 7.7273 3.18903 7.76398 3.14185 7.81051C3.09466 7.85703 3.0572 7.91246 3.03162 7.97359C3.00605 8.03472 2.99288 8.10032 2.99288 8.16659C2.99288 8.23285 3.00605 8.29845 3.03162 8.35958C3.0572 8.42071 3.09466 8.47614 3.14185 8.52267C3.18903 8.56919 3.24499 8.60587 3.30648 8.63057C3.36796 8.65528 3.43374 8.66752 3.5 8.66659H6.5C6.56626 8.66752 6.63204 8.65528 6.69352 8.63057C6.75501 8.60587 6.81097 8.56919 6.85815 8.52267C6.90534 8.47614 6.9428 8.42071 6.96838 8.35958C6.99395 8.29845 7.00712 8.23285 7.00712 8.16659C7.00712 8.10032 6.99395 8.03472 6.96838 7.97359C6.9428 7.91246 6.90534 7.85703 6.85815 7.81051C6.81097 7.76398 6.75501 7.7273 6.69352 7.7026C6.63204 7.67789 6.56626 7.66565 6.5 7.66659H3.5ZM8.91667 8.66659C8.59346 8.66659 8.3847 8.85699 8.2474 9.02531C8.11009 9.19363 8.01427 9.3813 7.93229 9.5826C7.76834 9.9852 7.66667 10.4303 7.66667 10.8333C7.66573 10.8995 7.67797 10.9653 7.70268 11.0268C7.72738 11.0883 7.76406 11.1442 7.81059 11.1914C7.85711 11.2386 7.91255 11.2761 7.97367 11.3016C8.0348 11.3272 8.1004 11.3404 8.16667 11.3404C8.23293 11.3404 8.29853 11.3272 8.35966 11.3016C8.42079 11.2761 8.47622 11.2386 8.52275 11.1914C8.56927 11.1442 8.60595 11.0883 8.63066 11.0268C8.65536 10.9653 8.6676 10.8995 8.66667 10.8333C8.66667 10.6269 8.7447 10.2386 8.85807 9.96021C8.86723 9.93771 8.87521 9.93241 8.88477 9.91138C8.92186 9.99989 8.95499 10.0643 8.99349 10.1705C9.06713 10.3736 9.13851 10.5876 9.23177 10.7857C9.2784 10.8848 9.32742 10.9812 9.41471 11.0846C9.50201 11.1879 9.66667 11.3333 9.91667 11.3333C10.3917 11.3333 10.6552 11 10.8053 10.8079C10.8072 10.8055 10.8074 10.805 10.8092 10.8027C10.8501 10.8397 10.8607 10.8556 10.916 10.8977C11.2139 11.1247 11.7132 11.3333 12.5 11.3333C12.5663 11.3342 12.632 11.3219 12.6935 11.2972C12.755 11.2725 12.811 11.2359 12.8582 11.1893C12.9053 11.1428 12.9428 11.0874 12.9684 11.0262C12.994 10.9651 13.0071 10.8995 13.0071 10.8333C13.0071 10.767 12.994 10.7014 12.9684 10.6403C12.9428 10.5791 12.9053 10.5237 12.8582 10.4772C12.811 10.4307 12.755 10.394 12.6935 10.3693C12.632 10.3446 12.5663 10.3323 12.5 10.3333C11.8701 10.3333 11.6611 10.2085 11.5215 10.1021C11.4517 10.0489 11.3992 9.98942 11.3008 9.90031C11.2024 9.8112 11 9.66659 10.75 9.66659C10.4313 9.66659 10.3016 9.84287 10.2161 9.93937C10.1466 10.0179 10.1012 10.0832 10.0547 10.1451C10.0152 10.0421 9.97967 9.95644 9.93359 9.82935C9.85619 9.61582 9.77434 9.3904 9.65365 9.17896C9.5933 9.07323 9.52403 8.96816 9.41341 8.86776C9.30279 8.76736 9.12547 8.66659 8.91667 8.66659Z" />
                  </svg>
                  <span className="text-content-text-neutral-2 text-sm">
                    Visa ending in 0315
                  </span>
                </div>
                <Button variant="ghost" className="p-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M12.6666 6.33325H9.99992V2.33325H5.99992V6.33325H3.33325L7.99992 10.9999L12.6666 6.33325ZM7.33325 7.66658V3.66659H8.66658V7.66658H9.44659L7.99992 9.11325L6.55325 7.66658H7.33325ZM3.33325 12.3333H12.6666V13.6666H3.33325V12.3333Z" />
                  </svg>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);
