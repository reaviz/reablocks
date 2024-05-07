import { motion } from 'framer-motion';
import React, { FC } from 'react';

import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { Stack } from '../../../src/layout/Stack';

export const BillingSubscription: FC = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[1200px]"
  >
    <Card className="transition-colors p-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Billing</h2>
          <Stack>
            <Button
              className="w-fit font-semibold px-4 py-2 border-none bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
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
              className="font-semibold px-4 py-2 flex items-center gap-2 "
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
          <span className="font-bold text-xl">Current Subscription</span>
          <span className="text-panel-secondary-content">
            Your account is billed monthly and the next payment is due{' '}
            <span className="font-semibold text-panel-content">
              March 15, 2024
            </span>
          </span>
        </div>
        <div className="flex rounded-xl overflow-hidden border border-panel-accent">
          <div className="flex flex-col flex-1">
            <div className="dark:bg-vulcan light:bg-mystic px-6 py-4 text-base text-panel-secondary-content">
              Selected plan
            </div>
            <div className="px-6 py-4 text-base text-panel-secondary-content flex-1">
              Team
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="dark:bg-vulcan light:bg-mystic px-6 py-4 text-base text-panel-secondary-content">
              Price
            </div>
            <div className="px-6 py-4 text-base text-panel-secondary-content flex-1 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="text-panel-content w-4 h-4 mb-px"
                fill="currentColor"
              >
                <path d="M8.5 1.33325C7.875 1.33325 7.34294 1.58563 7.0013 1.96997C6.65967 2.35431 6.5 2.84714 6.5 3.33325C6.5 3.68206 6.61446 4.02005 6.78711 4.33325H5.0319C4.19896 4.33325 3.46602 4.90011 3.25716 5.7063L1.61523 12.0396C1.3172 13.1887 2.2029 14.3333 3.38997 14.3333H13.6712C14.8329 14.3333 15.7129 13.236 15.4609 12.1021L14.0534 5.7688C13.8675 4.93288 13.1201 4.33325 12.2637 4.33325H10.2129C10.3855 4.02005 10.5 3.68206 10.5 3.33325C10.5 2.84714 10.3403 2.35431 9.9987 1.96997C9.65706 1.58563 9.125 1.33325 8.5 1.33325ZM8.5 2.33325C8.875 2.33325 9.09294 2.45587 9.2513 2.63403C9.40967 2.81219 9.5 3.06936 9.5 3.33325C9.5 3.59714 9.40967 3.85431 9.2513 4.03247C9.09294 4.21063 8.875 4.33325 8.5 4.33325C8.125 4.33325 7.90706 4.21063 7.7487 4.03247C7.59033 3.85431 7.5 3.59714 7.5 3.33325C7.5 3.06936 7.59033 2.81219 7.7487 2.63403C7.90706 2.45587 8.125 2.33325 8.5 2.33325ZM5.0319 5.33325H8.5H12.2637C12.6572 5.33325 12.9921 5.60151 13.0775 5.9856L14.4844 12.3189C14.6025 12.8504 14.2155 13.3333 13.6712 13.3333H3.38997C2.83238 13.3333 2.44271 12.8306 2.58268 12.2909L4.22526 5.9576C4.32107 5.58779 4.6495 5.33325 5.0319 5.33325ZM8.49219 5.99276C8.35969 5.99483 8.23344 6.0494 8.14115 6.1445C8.04887 6.23959 7.9981 6.36742 8 6.49992V6.74211C7.33469 6.93217 6.83333 7.52276 6.83333 8.24406V8.24471C6.83333 9.11598 7.55058 9.83325 8.42188 9.83325H8.91146C9.24217 9.83325 9.5 10.0911 9.5 10.4218C9.5 10.7506 9.24509 11.0069 8.91602 11.0097L8.30273 11.0149C8.08763 11.0149 7.91417 10.8754 7.85482 10.6868C7.83617 10.6229 7.80496 10.5634 7.76302 10.5117C7.72107 10.4601 7.66924 10.4173 7.61056 10.3859C7.55187 10.3545 7.48752 10.3352 7.42126 10.329C7.35501 10.3228 7.28818 10.3299 7.22471 10.3499C7.16123 10.3699 7.10238 10.4023 7.05161 10.4453C7.00083 10.4883 6.95915 10.5411 6.92901 10.6004C6.89886 10.6597 6.88086 10.7245 6.87606 10.7908C6.87126 10.8572 6.87975 10.9239 6.90104 10.9869C7.05651 11.4809 7.49329 11.798 8 11.9146V12.1666C7.99906 12.2328 8.0113 12.2986 8.03601 12.3601C8.06072 12.4216 8.0974 12.4776 8.14392 12.5247C8.19044 12.5719 8.24588 12.6094 8.30701 12.635C8.36814 12.6605 8.43374 12.6737 8.5 12.6737C8.56626 12.6737 8.63186 12.6605 8.69299 12.635C8.75412 12.6094 8.80956 12.5719 8.85608 12.5247C8.9026 12.4776 8.93928 12.4216 8.96399 12.3601C8.9887 12.2986 9.00094 12.2328 9 12.1666V11.9941C9.82966 11.9453 10.5 11.2616 10.5 10.4218C10.5 9.5505 9.78275 8.83325 8.91146 8.83325H8.42188C8.09117 8.83325 7.83333 8.57542 7.83333 8.24471V8.24406C7.83333 7.91666 8.08595 7.66029 8.41341 7.65552L8.68815 7.65161C8.90446 7.65161 9.07921 7.79284 9.13737 7.98299C9.15609 8.04634 9.18718 8.10536 9.22883 8.15663C9.27049 8.2079 9.3219 8.25041 9.38007 8.28169C9.43825 8.31298 9.50206 8.33244 9.5678 8.33893C9.63354 8.34542 9.69991 8.33881 9.76309 8.31951C9.82626 8.3002 9.88499 8.26856 9.93587 8.22643C9.98674 8.18429 10.0288 8.13249 10.0595 8.07402C10.0903 8.01555 10.1091 7.95157 10.115 7.88577C10.1209 7.81998 10.1136 7.75367 10.0938 7.69067C9.94196 7.19443 9.50598 6.87599 9 6.75578V6.49992C9.00096 6.433 8.98848 6.36656 8.96329 6.30455C8.9381 6.24255 8.90072 6.18623 8.85336 6.13893C8.80601 6.09164 8.74964 6.05433 8.6876 6.02922C8.62556 6.00411 8.55911 5.99171 8.49219 5.99276Z" />
              </svg>
              $60/Month
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="dark:bg-vulcan light:bg-mystic px-6 py-4 text-base text-panel-secondary-content">
              Seats
            </div>
            <div className="px-6 py-4 text-base text-panel-secondary-content flex-1 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="text-panel-content w-4 h-4 mb-px"
                fill="currentColor"
              >
                <path d="M8 1.33325C6.16497 1.33325 4.66666 2.83156 4.66666 4.66658C4.66666 6.50161 6.16497 7.99992 8 7.99992C9.83502 7.99992 11.3333 6.50161 11.3333 4.66658C11.3333 2.83156 9.83502 1.33325 8 1.33325ZM8 2.33325C9.29459 2.33325 10.3333 3.372 10.3333 4.66658C10.3333 5.96117 9.29459 6.99992 8 6.99992C6.70541 6.99992 5.66666 5.96117 5.66666 4.66658C5.66666 3.372 6.70541 2.33325 8 2.33325ZM3.99284 9.33325C3.26623 9.33325 2.66666 9.93282 2.66666 10.6594V11.1666C2.66666 12.368 3.42642 13.2973 4.43554 13.8541C5.44467 14.4108 6.7227 14.6666 8 14.6666C9.2773 14.6666 10.5553 14.4108 11.5645 13.8541C12.4249 13.3794 13.0724 12.6208 13.2539 11.6666H13.334V10.6594C13.334 9.93282 12.7338 9.33325 12.0072 9.33325H3.99284ZM3.99284 10.3333H12.0072C12.1932 10.3333 12.334 10.4734 12.334 10.6594V10.6666H12.3333V11.1666C12.3333 11.9652 11.8848 12.5358 11.0814 12.9791C10.278 13.4223 9.13936 13.6666 8 13.6666C6.86063 13.6666 5.72199 13.4223 4.91862 12.9791C4.11524 12.5358 3.66666 11.9652 3.66666 11.1666V10.6594C3.66666 10.4734 3.80677 10.3333 3.99284 10.3333Z" />
              </svg>
              65 Seats
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="dark:bg-vulcan light:bg-mystic px-6 py-4 text-base text-panel-secondary-content">
              Yearly Cost
            </div>
            <div className="px-6 py-4 text-base text-panel-secondary-content flex-1 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="text-panel-content w-4 h-4 mb-px"
                fill="currentColor"
              >
                <path d="M13.1667 6.33325H10.5V2.33325H6.50001V6.33325H3.83334L8.50001 10.9999L13.1667 6.33325ZM7.83334 7.66658V3.66659H9.16668V7.66658H9.94668L8.50001 9.11325L7.05334 7.66658H7.83334ZM3.83334 12.3333H13.1667V13.6666H3.83334V12.3333Z" />
              </svg>
              $780
            </div>
          </div>
        </div>
        <span className="font-bold text-xl mb-8 mt-4">Seats usage</span>
        <div className="flex w-full gap-4">
          <div className="flex flex-col flex-1 gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Editors</span>
              <span className="text-base">11/30 used</span>
            </div>
            <div className="relative rounded-full w-full border border-primary/40 h-3 dark:bg-vulcan light:bg-mystic">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(11 / 30) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-blue-400 h-full"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(11 / 30) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-blue-400 h-full blur-md"
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
          <div className="flex flex-col flex-1 gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Contributors</span>
              <span className="text-base">18/20 used</span>
            </div>
            <div className="relative rounded-full w-full border border-orange-500/40 h-3 dark:bg-vulcan light:bg-mystic">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(18 / 20) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-orange-500 h-full"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(18 / 20) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-orange-500 h-full blur-md"
              />
            </div>
            <Button
              variant="text"
              color="default"
              className="w-fit px-0"
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  className="text-orange-500"
                  fill="currentColor"
                >
                  <path d="M3 8.00008L3.94 8.94008L7.66667 5.22008V13.3334H9V5.22008L12.72 8.94675L13.6667 8.00008L8.33333 2.66675L3 8.00008Z" />
                </svg>
              }
            >
              Upgrade
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Viewers</span>
              <span className="text-base">11/15 used</span>
            </div>
            <div className="relative rounded-full w-full border border-orange-500/40 h-3 dark:bg-vulcan light:bg-mystic">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${(11 / 15) * 100}%`, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-orange-500 h-full"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(11 / 15) * 100}%` }}
                transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
                className="absolute rounded-full bg-gradient-to-r from-transparent to-orange-500 h-full blur-md"
              />
            </div>
            <Button
              variant="text"
              color="primary"
              className="w-fit px-0"
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  className="text-orange-500"
                  fill="currentColor"
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
