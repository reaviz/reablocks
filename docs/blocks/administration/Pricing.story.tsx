import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { toggleTheme, Toggle } from '../../../src/form/Toggle';
import { radioTheme, Radio } from '../../../src/form/Radio';
import { Button } from '../../../src/elements/Button';
import {
  Card,
  Divider,
  List,
  ListItem,
  MotionGroup,
  MotionItem,
  Stack,
  VerticalSpacer
} from '../../../src/layout';
import { Chip } from '../../../src/elements/Chip';
import { cn } from '../../../src/utils/Theme/helpers';

export default {
  title: 'Blocks/Administration/Pricing'
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M5.86333 10.5833L3.08333 7.80333L2.13667 8.74333L5.86333 12.47L13.8633 4.47L12.9233 3.53L5.86333 10.5833Z"
      fill="#105EFF"
    />
  </svg>
);

const ToggleTheme = {
  ...toggleTheme,
  base: 'flex items-center justify-start cursor-pointer box-border border dark:border-charade dark:bg-[#1E1E2E] light:border-mystic light:bg-[#C9C9D6] hover:bg-primary-hover focus-visible:outline-none focus-visible:border-primary-hover rounded-xl transition-colors',
  checked: 'justify-end !bg-blue-500',
  handle: {
    base: 'rounded-full dark:bg-black light:bg-white',
    sizes: {
      ...toggleTheme.handle.sizes,
      medium: 'w-5 h-5'
    }
  },
  sizes: {
    ...toggleTheme.sizes,
    medium: 'w-12 h-6 py-0.5 px-[1px]'
  }
};

const RadioTheme = {
  ...radioTheme,
  base: 'box-border leading-3',
  radio: {
    ...radioTheme.radio,
    base: 'will-change-[border-color] inline-flex justify-center items-center box-border align-middle rounded-full bg-transparent border light:border-charade cursor-pointer focus-visible:outline-none focus-visible:border-primary-hover',
    checked: 'border-primary'
  }
};

export const Pricing = () => {
  const [selected, setSelected] = useState('free');

  return (
    <MotionGroup className="w-full grid grid-cols-3 gap-2.5">
      <MotionItem>
        <Card
          className={cn('w-full h-[515px] rounded transition-colors', {
            'dark:dark:bg-[#1E1E2E]': selected !== 'free',
            'light:border-primary-active light:bg-athens-gray':
              selected === 'free'
          })}
          contentClassName="w-full h-full"
        >
          <Stack direction="column" alignItems="start" className="h-full">
            <Stack justifyContent="spaceBetween" className="w-full">
              <h6 className="text-lg font-semibold">Free</h6>
              <Chip
                color="primary"
                className="rounded-full px-3 text-sm dark:bg-blue-950 light:bg-blue-100 dark:text-athens-gray light:text-vulcan"
              >
                Current Plan
              </Chip>
            </Stack>
            <span className="dark:text-waterloo light:text-charade">
              For small teams
            </span>
            <Stack>
              <h1 className="text-3xl font-semibold">$0</h1>
              <span className="font-bold dark:text-waterloo light:text-charade">
                /Month
              </span>
            </Stack>
            <Divider className="mt-0" variant="secondary" />
            <Stack direction="column" alignItems="start" className="grow">
              <List>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  10 members
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Integration support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Figma support
                </ListItem>
              </List>
            </Stack>
            <Button
              variant={selected === 'free' ? 'filled' : 'outline'}
              color={selected === 'free' ? 'primary' : 'default'}
              className={cn(
                'px-4 py-2 flex items-center gap-2 self-stretch !text-lg rounded-sm focus:outline-none transition-colors',
                {
                  'bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover':
                    selected === 'free',
                  'dark:border-[#3D3D4D] focus:border-waterloo/75 hover:!border-waterloo':
                    selected !== 'free'
                }
              )}
              onClick={() => setSelected('free')}
              fullWidth
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M8.66667 2.66669L7.72667 3.60669L11.4467 7.33335H3.33334V8.66669H11.4467L7.72667 12.3934L8.66667 13.3334L14 8.00002L8.66667 2.66669Z" />
              </svg>
            </Button>
          </Stack>
        </Card>
      </MotionItem>
      <MotionItem>
        <Card
          className={cn('w-full h-[515px] rounded transition-colors', {
            'dark:bg-[#1E1E2E]': selected !== 'starter',
            'light:border-primary-active light:bg-athens-gray':
              selected === 'starter'
          })}
          contentClassName="w-full h-full"
        >
          <Stack direction="column" alignItems="start" className="h-full">
            <Stack justifyContent="spaceBetween" className="w-full">
              <h6 className="text-lg font-semibold">Starter</h6>
              <Chip
                color="success"
                className="rounded-full px-3 text-sm dark:bg-green-950 light:bg-green-100 dark:text-athens-gray light:text-vulcan"
              >
                Recommended
              </Chip>
            </Stack>
            <span className="dark:text-waterloo light:text-charade">
              For a broad set of teams
            </span>
            <Stack>
              <h1 className="text-3xl font-semibold">$1,000</h1>
              <span className="font-bold dark:text-waterloo light:text-charade">
                /Month
              </span>
            </Stack>
            <Divider className="mt-0" variant="secondary" />
            <Stack direction="column" alignItems="start" className="grow">
              <List>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Unlimited members
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Integration support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Figma support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Storybook support
                </ListItem>
              </List>
            </Stack>
            <Button
              variant={selected === 'starter' ? 'filled' : 'outline'}
              color={selected === 'starter' ? 'primary' : 'default'}
              className={cn(
                'px-4 py-2 flex items-center gap-2 self-stretch !text-lg rounded-sm focus:outline-none transition-colors',
                {
                  'bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover':
                    selected === 'starter',
                  'dark:border-[#3D3D4D] focus:border-waterloo/75 hover:!border-waterloo':
                    selected !== 'starter'
                }
              )}
              onClick={() => setSelected('starter')}
              fullWidth
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M8.66667 2.66669L7.72667 3.60669L11.4467 7.33335H3.33334V8.66669H11.4467L7.72667 12.3934L8.66667 13.3334L14 8.00002L8.66667 2.66669Z" />
              </svg>
            </Button>
          </Stack>
        </Card>
      </MotionItem>
      <MotionItem>
        <Card
          className={cn('w-full h-[515px] rounded transition-colors', {
            'dark:bg-[#1E1E2E]': selected !== 'custom',
            'light:border-primary-active light:bg-athens-gray':
              selected === 'custom'
          })}
          contentClassName="w-full h-full"
        >
          <Stack direction="column" alignItems="start" className="h-full">
            <h6 className="text-lg font-semibold leading-[31px]">Enterprise</h6>
            <span className="dark:text-waterloo light:text-charade">
              For all custom needs
            </span>
            <h1 className="text-3xl font-semibold">Custom</h1>
            <Divider className="mt-0" variant="secondary" />
            <Stack direction="column" alignItems="start" className="grow">
              <List>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Unlimited members
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Integration support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Figma support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Storybook support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Everything else
                </ListItem>
              </List>
            </Stack>
            <Button
              variant={selected === 'custom' ? 'filled' : 'outline'}
              color={selected === 'custom' ? 'primary' : 'default'}
              className={cn(
                'px-4 py-2 flex items-center gap-2 self-stretch !text-lg rounded-sm focus:outline-none transition-colors',
                {
                  'bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover':
                    selected === 'custom',
                  'dark:border-[#3D3D4D] focus:border-waterloo/75 hover:!border-waterloo':
                    selected !== 'custom'
                }
              )}
              onClick={() => setSelected('custom')}
              fullWidth
            >
              Contact Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M13.6666 11.4466L12.8866 10.6666H2.9999V2.66665H13.6666V11.4466ZM13.6666 1.33331H2.9999C2.26656 1.33331 1.66656 1.93331 1.66656 2.66665V10.6666C1.66656 11.4 2.26656 12 2.9999 12H12.3332L14.9999 14.6666V2.66665C14.9999 1.93331 14.3999 1.33331 13.6666 1.33331Z" />
              </svg>
            </Button>
          </Stack>
        </Card>
      </MotionItem>
    </MotionGroup>
  );
};

export const PricingFull = () => {
  const [cycle, setCycle] = useState('Monthly');

  return (
    <Card className="w-full transition-colors" contentClassName="w-full h-full">
      <Stack justifyContent="spaceBetween">
        <Stack>
          <div className="dark:bg-charade/40 light:bg-blue-200/40 rounded-sm p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M2.83333 3.33337C1.82674 3.33337 1 4.16012 1 5.16671V11.5C1 12.5066 1.82674 13.3334 2.83333 13.3334H13.1667C14.1733 13.3334 15 12.5066 15 11.5V5.16671C15 4.16012 14.1733 3.33337 13.1667 3.33337H2.83333ZM2.83333 4.33337H13.1667C13.6327 4.33337 14 4.70063 14 5.16671V11.5C14 11.9661 13.6327 12.3334 13.1667 12.3334H2.83333C2.36726 12.3334 2 11.9661 2 11.5V5.16671C2 4.70063 2.36726 4.33337 2.83333 4.33337ZM3.5 5.66671C3.43374 5.66577 3.36796 5.67801 3.30648 5.70272C3.24499 5.72743 3.18903 5.76411 3.14185 5.81063C3.09466 5.85715 3.0572 5.91259 3.03162 5.97371C3.00605 6.03484 2.99288 6.10044 2.99288 6.16671C2.99288 6.23297 3.00605 6.29857 3.03162 6.3597C3.0572 6.42083 3.09466 6.47626 3.14185 6.52279C3.18903 6.56931 3.24499 6.60599 3.30648 6.6307C3.36796 6.6554 3.43374 6.66764 3.5 6.66671H8.16667C8.23292 6.66764 8.2987 6.6554 8.36019 6.6307C8.42167 6.60599 8.47763 6.56931 8.52482 6.52279C8.572 6.47626 8.60947 6.42083 8.63505 6.3597C8.66062 6.29857 8.67379 6.23297 8.67379 6.16671C8.67379 6.10044 8.66062 6.03484 8.63505 5.97371C8.60947 5.91259 8.572 5.85715 8.52482 5.81063C8.47763 5.76411 8.42167 5.72743 8.36019 5.70272C8.2987 5.67801 8.23292 5.66577 8.16667 5.66671H3.5ZM3.5 7.66671C3.43374 7.66577 3.36796 7.67801 3.30648 7.70272C3.24499 7.72743 3.18903 7.76411 3.14185 7.81063C3.09466 7.85715 3.0572 7.91259 3.03162 7.97371C3.00605 8.03484 2.99288 8.10044 2.99288 8.16671C2.99288 8.23297 3.00605 8.29857 3.03162 8.3597C3.0572 8.42083 3.09466 8.47626 3.14185 8.52279C3.18903 8.56931 3.24499 8.60599 3.30648 8.6307C3.36796 8.6554 3.43374 8.66764 3.5 8.66671H6.5C6.56626 8.66764 6.63204 8.6554 6.69352 8.6307C6.75501 8.60599 6.81097 8.56931 6.85815 8.52279C6.90534 8.47626 6.9428 8.42083 6.96838 8.3597C6.99395 8.29857 7.00712 8.23297 7.00712 8.16671C7.00712 8.10044 6.99395 8.03484 6.96838 7.97371C6.9428 7.91259 6.90534 7.85715 6.85815 7.81063C6.81097 7.76411 6.75501 7.72743 6.69352 7.70272C6.63204 7.67801 6.56626 7.66577 6.5 7.66671H3.5ZM8.91667 8.66671C8.59346 8.66671 8.3847 8.85711 8.2474 9.02543C8.11009 9.19375 8.01427 9.38142 7.93229 9.58272C7.76834 9.98532 7.66667 10.4304 7.66667 10.8334C7.66573 10.8996 7.67797 10.9654 7.70268 11.0269C7.72738 11.0884 7.76406 11.1443 7.81059 11.1915C7.85711 11.2387 7.91255 11.2762 7.97367 11.3018C8.0348 11.3273 8.1004 11.3405 8.16667 11.3405C8.23293 11.3405 8.29853 11.3273 8.35966 11.3018C8.42079 11.2762 8.47622 11.2387 8.52275 11.1915C8.56927 11.1443 8.60595 11.0884 8.63066 11.0269C8.65536 10.9654 8.6676 10.8996 8.66667 10.8334C8.66667 10.627 8.7447 10.2387 8.85807 9.96033C8.86723 9.93783 8.87521 9.93253 8.88477 9.9115C8.92186 10 8.95499 10.0644 8.99349 10.1706C9.06713 10.3738 9.13851 10.5878 9.23177 10.7858C9.2784 10.8849 9.32742 10.9813 9.41471 11.0847C9.50201 11.188 9.66667 11.3334 9.91667 11.3334C10.3917 11.3334 10.6552 11.0001 10.8053 10.808C10.8072 10.8056 10.8074 10.8052 10.8092 10.8028C10.8501 10.8398 10.8607 10.8557 10.916 10.8978C11.2139 11.1248 11.7132 11.3334 12.5 11.3334C12.5663 11.3343 12.632 11.3221 12.6935 11.2974C12.755 11.2727 12.811 11.236 12.8582 11.1895C12.9053 11.1429 12.9428 11.0875 12.9684 11.0264C12.994 10.9652 13.0071 10.8996 13.0071 10.8334C13.0071 10.7671 12.994 10.7015 12.9684 10.6404C12.9428 10.5793 12.9053 10.5238 12.8582 10.4773C12.811 10.4308 12.755 10.3941 12.6935 10.3694C12.632 10.3447 12.5663 10.3324 12.5 10.3334C11.8701 10.3334 11.6611 10.2086 11.5215 10.1023C11.4517 10.0491 11.3992 9.98954 11.3008 9.90043C11.2024 9.81132 11 9.66671 10.75 9.66671C10.4313 9.66671 10.3016 9.84299 10.2161 9.93949C10.1466 10.018 10.1012 10.0833 10.0547 10.1452C10.0152 10.0422 9.97967 9.95656 9.93359 9.82947C9.85619 9.61594 9.77434 9.39052 9.65365 9.17908C9.5933 9.07336 9.52403 8.96828 9.41341 8.86788C9.30279 8.76748 9.12547 8.66671 8.91667 8.66671Z" />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M10.47 4.94L9.53 4L5.53 8L9.53 12L10.47 11.06L7.41667 8L10.47 4.94Z" />
          </svg>
          <a href="#" className="text-primary">
            Back to billing
          </a>
        </Stack>
        <Stack className="dark:bg-vulcan light:bg-mystic rounded p-1" dense>
          {['Monthly', 'Yearly'].map(type => (
            <Button
              key={type}
              size="large"
              className={cn('text-lg', {
                'dark:text-black dark:bg-blue-100': cycle === type,
                'light:text-black light:bg-blue-200/40': cycle !== type
              })}
              onClick={() => setCycle(type)}
            >
              {type}
            </Button>
          ))}
        </Stack>
      </Stack>
      <h4 className="text-[24px] font-bold">Plans</h4>
      <span className="dark:text-waterloo light:text-charade text-base">
        Change your current workspace plan
      </span>
      <MotionGroup className="flex flex-col gap-2.5 mt-7">
        <div className="grid grid-cols-[400px,1fr,1fr,1fr] gap-2.5">
          <MotionItem className="self-end font-bold">Core Features</MotionItem>
          <MotionItem className="flex flex-col">
            <h6 className="text-lg font-bold">Founders Package</h6>
            <h2 className="text-2xl font-bold">
              {cycle === 'Monthly' ? '$1,000' : '$10,000'}
            </h2>
            <span className="dark:text-waterloo light:text-charade text-sm">
              {cycle === 'Monthly' ? 'Per month' : 'Per year'}
            </span>
            <VerticalSpacer space="md" />
            <div className="dark:bg-charade/40 light:bg-blue-200/40 py-2 px-4 rounded-sm flex gap-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M8.50001 1.33337C4.82001 1.33337 1.83334 4.32004 1.83334 8.00004C1.83334 11.68 4.82001 14.6667 8.50001 14.6667C12.18 14.6667 15.1667 11.68 15.1667 8.00004C15.1667 4.32004 12.18 1.33337 8.50001 1.33337ZM8.50001 13.3334C5.56001 13.3334 3.16668 10.94 3.16668 8.00004C3.16668 5.06004 5.56001 2.66671 8.50001 2.66671C11.44 2.66671 13.8333 5.06004 13.8333 8.00004C13.8333 10.94 11.44 13.3334 8.50001 13.3334ZM11.56 5.05337L7.16668 9.44671L5.44001 7.72671L4.50001 8.66671L7.16668 11.3334L12.5 6.00004L11.56 5.05337Z" />
              </svg>
              Current Plan
            </div>
            <Divider />
          </MotionItem>
          <MotionItem className="flex flex-col">
            <h6 className="text-lg font-bold">Startup Package</h6>
            <h2 className="text-2xl font-bold">
              {cycle === 'Monthly' ? '$5,000' : '$50,000'}
            </h2>
            <span className="dark:text-waterloo light:text-charade text-sm">
              {cycle === 'Monthly' ? 'Per month' : 'Per year'}
            </span>
            <VerticalSpacer space="md" />
            <Button
              color="primary"
              className="px-4 py-2 text-lg gap-2 bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M3.16669 7.99996L4.10669 8.93996L7.83335 5.21996V13.3333H9.16669V5.21996L12.8867 8.94663L13.8334 7.99996L8.50002 2.66663L3.16669 7.99996Z"
                  fill="white"
                />
              </svg>
              Upgrade
            </Button>
            <Divider />
          </MotionItem>
          <MotionItem className="flex flex-col">
            <h6 className="text-lg font-bold">Seed Package</h6>
            <h2 className="text-2xl font-bold">Let's talk</h2>
            <span className="dark:text-waterloo light:text-charade text-sm">
              {cycle === 'Monthly' ? 'Per month' : 'Per year'}
            </span>
            <VerticalSpacer space="md" />
            <Button variant="outline" className="text-lg py-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M7.99998 1.33337C4.324 1.33337 1.33331 4.32406 1.33331 8.00004C1.33331 11.676 4.324 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8.00004C14.6666 4.32406 11.676 1.33337 7.99998 1.33337ZM7.99998 2.33337C11.1355 2.33337 13.6666 4.8645 13.6666 8.00004C13.6666 11.1356 11.1355 13.6667 7.99998 13.6667C4.86444 13.6667 2.33331 11.1356 2.33331 8.00004C2.33331 4.8645 4.86444 2.33337 7.99998 2.33337ZM7.99998 3.33337C5.42846 3.33337 3.33331 5.42853 3.33331 8.00004C3.33331 10.5716 5.42846 12.6667 7.99998 12.6667C8.57568 12.6667 9.1294 12.5622 9.63995 12.3705C9.70216 12.348 9.75927 12.3133 9.80799 12.2685C9.85671 12.2238 9.89605 12.1698 9.92376 12.1097C9.95146 12.0496 9.96696 11.9846 9.96937 11.9185C9.97178 11.8524 9.96104 11.7865 9.93778 11.7245C9.91452 11.6626 9.8792 11.6059 9.83387 11.5577C9.78854 11.5095 9.7341 11.4708 9.6737 11.4438C9.6133 11.4168 9.54814 11.4021 9.482 11.4004C9.41586 11.3988 9.35005 11.4103 9.28839 11.4343C8.88828 11.5845 8.45494 11.6667 7.99998 11.6667C5.96883 11.6667 4.33331 10.0312 4.33331 8.00004C4.33331 5.96889 5.96883 4.33337 7.99998 4.33337C10.0311 4.33337 11.6666 5.96889 11.6666 8.00004V8.50004C11.6666 8.96612 11.2994 9.33337 10.8333 9.33337C10.3672 9.33337 9.99998 8.96612 9.99998 8.50004V6.16671C10.001 6.0439 9.9567 5.92504 9.87566 5.83277C9.79462 5.74049 9.68246 5.68127 9.56056 5.66639C9.43865 5.6515 9.31554 5.68199 9.21468 5.75205C9.11381 5.82211 9.04226 5.92684 9.01365 6.04626C8.67619 5.80813 8.27254 5.66671 7.83331 5.66671C6.61604 5.66671 5.66665 6.74253 5.66665 8.00004C5.66665 9.25755 6.61604 10.3334 7.83331 10.3334C8.45023 10.3334 8.99741 10.0561 9.388 9.61983C9.72449 10.0521 10.2477 10.3334 10.8333 10.3334C11.8399 10.3334 12.6666 9.50663 12.6666 8.50004V8.00004C12.6666 5.42853 10.5715 3.33337 7.99998 3.33337ZM7.83331 6.66671C8.45404 6.66671 8.99998 7.23555 8.99998 8.00004C8.99998 8.76453 8.45404 9.33337 7.83331 9.33337C7.21258 9.33337 6.66665 8.76453 6.66665 8.00004C6.66665 7.23555 7.21258 6.66671 7.83331 6.66671Z" />
              </svg>
              Email Sales
            </Button>
            <Divider />
          </MotionItem>
        </div>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center gap-2.5 text-base">
          <div className="justify-self-start">Design Support (Add On)</div>
          <div>
            <Chip
              color="primary"
              className="rounded-full px-3 dark:text-athens-gray light:text-charade dark:bg-blue-950 light:bg-blue-100"
            >
              Unlimited
            </Chip>
          </div>
          <div>
            <Chip
              color="primary"
              className="rounded-full px-3 dark:text-athens-gray light:text-charade dark:bg-blue-950 light:bg-blue-100"
            >
              Unlimited
            </Chip>
          </div>
          <div>
            <Chip
              color="primary"
              className="rounded-full px-3 dark:text-athens-gray light:text-charade dark:bg-blue-950 light:bg-blue-100"
            >
              Unlimited
            </Chip>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="dark:bg-charade dark:via-charade light:bg-mystic light:via-mystic" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base dark:text-waterloo light:text-charade">
          <div className="justify-self-start dark:text-athens-gray light:text-charade">
            Product Research
          </div>
          <div>Logo and brand book</div>
          <div>Competitor analysis Product guidance</div>
          <div>
            <a href="" className="inline-flex items-center gap-2 text-primary">
              See details{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z"
                  fill="#105EFF"
                />
              </svg>
            </a>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="dark:bg-charade dark:via-charade light:bg-mystic light:via-mystic" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base dark:text-waterloo light:text-charade">
          <div className="justify-self-start dark:text-athens-gray light:text-charade">
            Brand Style Guide
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6667 4.27337L11.7267 3.33337L8.00001 7.06004L4.27334 3.33337L3.33334 4.27337L7.06001 8.00004L3.33334 11.7267L4.27334 12.6667L8.00001 8.94004L11.7267 12.6667L12.6667 11.7267L8.94001 8.00004L12.6667 4.27337Z"
                fill="#E00007"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.86332 10.5834L3.08332 7.80336L2.13666 8.74336L5.86332 12.47L13.8633 4.47003L12.9233 3.53003L5.86332 10.5834Z"
                fill="#105EFF"
              />
            </svg>
          </div>
          <div>
            <a href="" className="inline-flex items-center gap-2 text-primary">
              See details{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z"
                  fill="#105EFF"
                />
              </svg>
            </a>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="dark:bg-charade dark:via-charade light:bg-mystic light:via-mystic" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base dark:text-waterloo light:text-charade">
          <div className="justify-self-start dark:text-athens-gray light:text-charade">
            Prototype of Web Application
          </div>
          <div>3 Figma Designs</div>
          <div>Fully interactive prototype</div>
          <div>
            <a href="" className="inline-flex items-center gap-2 text-primary">
              See details{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z"
                  fill="#105EFF"
                />
              </svg>
            </a>
          </div>
        </MotionItem>
        <MotionItem>
          <Divider className="dark:bg-charade dark:via-charade light:bg-mystic light:via-mystic" />
        </MotionItem>
        <MotionItem className="grid grid-cols-[400px,1fr,1fr,1fr] justify-items-center items-center text-center gap-2.5 text-base dark:text-waterloo light:text-charade">
          <div className="justify-self-start dark:text-athens-gray light:text-charade">
            Development of Web Application
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6667 4.27337L11.7267 3.33337L8.00001 7.06004L4.27334 3.33337L3.33334 4.27337L7.06001 8.00004L3.33334 11.7267L4.27334 12.6667L8.00001 8.94004L11.7267 12.6667L12.6667 11.7267L8.94001 8.00004L12.6667 4.27337Z"
                fill="#E00007"
              />
            </svg>
          </div>
          <div>Build out of pages/features in react.js</div>
          <div>Build out of pages/features in react.js</div>
        </MotionItem>
        <MotionItem>
          <Divider className="dark:bg-charade dark:via-charade light:bg-mystic light:via-mystic" />
        </MotionItem>
      </MotionGroup>
    </Card>
  );
};

export const PricingMinimal = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isFree, setIsFree] = useState(true);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[600px]"
    >
      <Card
        className="transition-colors"
        headerClassName="border-b dark:border-waterloo/40 light:border-mystic px-7 pt-7 pb-2"
        header={
          <Stack className="w-full" justifyContent="spaceBetween">
            <div>
              <h2 className="text-2xl font-bold">Change your plan</h2>
              <span className="text-sm dark:text-waterloo light:text-charade">
                Switch to annual to save 16%
              </span>
            </div>
            <Button className="p-3 light:bg-blue-200/40 light:text-charade">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M12.6666 4.27325L11.7266 3.33325L7.99998 7.05992L4.27331 3.33325L3.33331 4.27325L7.05998 7.99992L3.33331 11.7266L4.27331 12.6666L7.99998 8.93992L11.7266 12.6666L12.6666 11.7266L8.93998 7.99992L12.6666 4.27325Z" />
              </svg>
            </Button>
          </Stack>
        }
        disablePadding
      >
        <div className="p-7">
          <Stack>
            <Toggle
              checked={isAnnual}
              onChange={setIsAnnual}
              theme={ToggleTheme}
            />
            <span className="text-sm dark:text-waterloo light:text-charade">
              Annual pricing
            </span>
            <Chip
              size="small"
              color="primary"
              className="rounded-full dark:bg-blue-950 light:bg-blue-100 dark:text-gray-100 light:text-vulcan px-3 py-1"
            >
              Save 16%
            </Chip>
          </Stack>
          <MotionGroup className="grid grid-cols-2 gap-4 mt-4">
            <MotionItem>
              <Card
                className={cn('px-5 py-7', {
                  'border-solid border-transparent rounded dark:[border-image:linear-gradient(to_top_right,#2F6AFF,#0B0B11)_10] light:[border-image:linear-gradient(to_top_right,#105EFF,#F7F7FA)_10] dark:bg-blue-900/40 light:bg-blue-200/40':
                    isFree
                })}
              >
                <Stack>
                  <h6 className="grow text-lg font-bold whitespace-nowrap">
                    FREE account
                  </h6>
                  <Radio
                    size="small"
                    theme={RadioTheme}
                    checked={isFree}
                    onChange={selected => setIsFree(selected)}
                  />
                </Stack>
                <Stack>
                  <h2 className="text-[32px] font-bold">$0</h2>
                  <h6 className="dark:text-waterloo light:text-charade text-lg font-bold">
                    {isAnnual ? '/Year' : '/Month'}
                  </h6>
                </Stack>
                <Divider />
                <List>
                  <ListItem
                    start={<CheckIcon />}
                    className="dark:text-waterloo light:text-charade"
                  >
                    Basic Integration support
                  </ListItem>
                  <ListItem
                    start={<CheckIcon />}
                    className="dark:text-waterloo light:text-charade"
                  >
                    Limited Figma support
                  </ListItem>
                  <ListItem
                    start={<CheckIcon />}
                    className="dark:text-waterloo light:text-charade"
                  >
                    Storybook Support
                  </ListItem>
                </List>
              </Card>
            </MotionItem>
            <MotionItem>
              <Card
                className={cn('px-5 py-7', {
                  'border-solid border-transparent dark:[border-image:linear-gradient(to_top_right,#2F6AFF,#0B0B11)_10] light:[border-image:linear-gradient(to_top_right,#105EFF,#F7F7FA)_10] dark:bg-blue-900/40 light:bg-blue-200/40':
                    !isFree
                })}
              >
                <Stack>
                  <h6 className="grow text-lg font-bold whitespace-nowrap">
                    PRO account
                  </h6>
                  <Radio
                    size="small"
                    theme={RadioTheme}
                    checked={!isFree}
                    onChange={selected => setIsFree(!selected)}
                  />
                </Stack>
                <Stack>
                  <h2 className="text-[32px] font-bold">
                    {isAnnual ? '$222' : '$25'}
                  </h2>
                  <h6 className="dark:text-waterloo light:text-charade text-lg font-bold">
                    {isAnnual ? '/Year' : '/Month'}
                  </h6>
                </Stack>
                <Divider />
                <List>
                  <ListItem
                    start={<CheckIcon />}
                    className="dark:text-waterloo light:text-charade"
                  >
                    Basic Integration support
                  </ListItem>
                  <ListItem
                    start={<CheckIcon />}
                    className="dark:text-waterloo light:text-charade"
                  >
                    Limited Figma support
                  </ListItem>
                  <ListItem
                    start={<CheckIcon />}
                    className="dark:text-waterloo light:text-charade"
                  >
                    Storybook Support
                  </ListItem>
                </List>
              </Card>
            </MotionItem>
          </MotionGroup>
        </div>
        <div className="border-t dark:border-waterloo/40 light:border-mystic p-7">
          <Stack direction="rowReverse">
            <Button
              color="primary"
              className="px-4 py-2 text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M7.99998 1.33325C4.31998 1.33325 1.33331 4.31992 1.33331 7.99992C1.33331 11.6799 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.68 1.33325 7.99998 1.33325ZM7.99998 13.3333C5.05998 13.3333 2.66665 10.9399 2.66665 7.99992C2.66665 5.05992 5.05998 2.66659 7.99998 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 7.99998 13.3333ZM11.06 5.05325L6.66665 9.44659L4.93998 7.72659L3.99998 8.66659L6.66665 11.3333L12 5.99992L11.06 5.05325Z" />
                </svg>
              }
            >
              Save Changes
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2 text-lg"
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M12.6666 4.27325L11.7266 3.33325L7.99998 7.05992L4.27331 3.33325L3.33331 4.27325L7.05998 7.99992L3.33331 11.7266L4.27331 12.6666L7.99998 8.93992L11.7266 12.6666L12.6666 11.7266L8.93998 7.99992L12.6666 4.27325Z" />
                </svg>
              }
            >
              Cancel
            </Button>
            <div className="grow">
              <Button
                variant="text"
                color="primary"
                startAdornment={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8.16666 1.33325C6.57422 1.33325 5.26727 1.78119 4.36458 2.63599C3.46189 3.49079 2.99999 4.72786 2.99999 6.16658V7.41919C2.61992 7.72267 2.33333 8.14348 2.33333 8.66658C2.33333 9.45383 2.90149 10.0899 3.63997 10.2603C3.93881 11.4454 4.43561 12.501 5.13541 13.276C5.90281 14.1258 6.90229 14.6666 8 14.6666C8.06625 14.6675 8.13203 14.6553 8.19352 14.6306C8.255 14.6059 8.31096 14.5692 8.35815 14.5227C8.40533 14.4761 8.4428 14.4207 8.46837 14.3596C8.49395 14.2984 8.50712 14.2328 8.50712 14.1666C8.50712 14.1003 8.49395 14.0347 8.46837 13.9736C8.4428 13.9125 8.40533 13.857 8.35815 13.8105C8.31096 13.764 8.255 13.7273 8.19352 13.7026C8.13203 13.6779 8.06625 13.6656 8 13.6666C7.22737 13.6666 6.5007 13.2954 5.8776 12.6054C5.25449 11.9154 4.7576 10.9095 4.50976 9.72843C4.48614 9.6161 4.42458 9.51532 4.33543 9.443C4.24628 9.37068 4.13497 9.33124 4.02018 9.3313C3.91794 9.3313 3.91176 9.33325 3.99999 9.33325C3.62588 9.33325 3.33333 9.0407 3.33333 8.66658C3.33333 8.39871 3.48716 8.18048 3.71419 8.07283C3.7997 8.03229 3.87195 7.96831 3.92254 7.88833C3.97314 7.80835 3.99999 7.71565 3.99999 7.62101V6.16658C3.99999 4.93598 4.37143 4.00643 5.05208 3.3619C5.73272 2.71736 6.75911 2.33325 8.16666 2.33325C10.2724 2.33325 11.6574 3.29867 12.332 4.7089C12.3386 4.72282 12.3374 4.7274 12.3125 4.73494C11.9437 4.84647 11.0519 4.99992 10 4.99992C8.72916 4.99992 7.88387 4.76312 7.36393 4.54028C6.84398 4.31745 6.68684 4.1464 6.68684 4.1464C6.62749 4.08705 6.55415 4.04359 6.47358 4.02003C6.39302 3.99647 6.30782 3.99358 6.22584 4.01161C6.14386 4.02964 6.06773 4.06802 6.00448 4.1232C5.94124 4.17839 5.8929 4.24861 5.86393 4.32739C5.86393 4.32739 5.7525 4.67388 5.19466 5.10343C5.14259 5.14353 5.09893 5.19349 5.06617 5.25046C5.03341 5.30743 5.01219 5.3703 5.00373 5.43547C4.99527 5.50064 4.99972 5.56684 5.01684 5.63029C5.03396 5.69373 5.06341 5.75319 5.10351 5.80526C5.14361 5.85732 5.19357 5.90098 5.25054 5.93374C5.30751 5.9665 5.37037 5.98772 5.43554 5.99618C5.50072 6.00465 5.56691 6.00019 5.63036 5.98307C5.69381 5.96595 5.75327 5.9365 5.80533 5.8964C6.13255 5.64444 6.33297 5.38738 6.49088 5.16658C6.65718 5.28175 6.65671 5.32554 6.9694 5.45955C7.61612 5.73672 8.60416 5.99992 10 5.99992C10.7153 5.99992 11.3307 5.93919 11.8327 5.85669C11.911 6.09163 12 6.43511 12 6.83325V10.1666C12 11.0011 11.3345 11.6666 10.5 11.6666H9.88671C9.79215 11.4672 9.64298 11.2988 9.45653 11.1808C9.27008 11.0628 9.05398 11.0001 8.83333 10.9999C8.68012 10.9999 8.52841 11.0301 8.38686 11.0887C8.24532 11.1474 8.11671 11.2333 8.00837 11.3416C7.90004 11.45 7.8141 11.5786 7.75547 11.7201C7.69684 11.8617 7.66666 12.0134 7.66666 12.1666C7.66666 12.3198 7.69684 12.4715 7.75547 12.613C7.8141 12.7546 7.90004 12.8832 8.00837 12.9915C8.11671 13.0999 8.24532 13.1858 8.38686 13.2444C8.52841 13.3031 8.68012 13.3333 8.83333 13.3333C9.05387 13.333 9.26983 13.2702 9.45615 13.1522C9.64248 13.0342 9.79154 12.8658 9.88606 12.6666H10.5C11.8186 12.6666 12.9046 11.6308 12.9915 10.3333H13C13.7363 10.3333 14.3333 9.73625 14.3333 8.99992V8.33325C14.3333 7.59692 13.7363 6.99992 13 6.99992V6.83325C13 6.34685 12.9025 5.91515 12.8053 5.60474C13.2558 5.34966 13.4691 4.76893 13.2344 4.27726C12.3996 2.53217 10.5909 1.33325 8.16666 1.33325ZM6.33333 7.99992C6.15652 7.99992 5.98695 8.07016 5.86192 8.19518C5.7369 8.3202 5.66666 8.48977 5.66666 8.66658C5.66666 8.8434 5.7369 9.01297 5.86192 9.13799C5.98695 9.26301 6.15652 9.33325 6.33333 9.33325C6.51014 9.33325 6.67971 9.26301 6.80473 9.13799C6.92976 9.01297 7 8.8434 7 8.66658C7 8.48977 6.92976 8.3202 6.80473 8.19518C6.67971 8.07016 6.51014 7.99992 6.33333 7.99992ZM9.66666 7.99992C9.48985 7.99992 9.32028 8.07016 9.19526 8.19518C9.07023 8.3202 9 8.48977 9 8.66658C9 8.8434 9.07023 9.01297 9.19526 9.13799C9.32028 9.26301 9.48985 9.33325 9.66666 9.33325C9.84347 9.33325 10.013 9.26301 10.1381 9.13799C10.2631 9.01297 10.3333 8.8434 10.3333 8.66658C10.3333 8.48977 10.2631 8.3202 10.1381 8.19518C10.013 8.07016 9.84347 7.99992 9.66666 7.99992Z" />
                  </svg>
                }
                disableMargins
                disablePadding
              >
                Chat with us
              </Button>
            </div>
          </Stack>
        </div>
      </Card>
    </motion.div>
  );
};
