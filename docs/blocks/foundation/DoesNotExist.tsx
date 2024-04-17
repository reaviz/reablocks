import React from 'react';
import { Button } from '../../../src/elements/Button';
import { Chip } from '../../../src/elements/Chip';
import { Divider } from '../../../src/layout/Divider';
import { MotionGroup } from '../../../src/layout/Motion/MotionGroup';
import { MotionItem } from '../../../src/layout/Motion/MotionItem';
import { PageTitle } from '../../../src/typography';
import { Stack } from '../../../src/layout/Stack';

export const DoesNotExist = () => (
  <div className="w-full -mt-2.5 dark:bg-black-pearl">
    <MotionGroup className="bg-[radial-gradient(50%_6.33%_at_50%_0%,rgba(16,94,255,0.71)_0%,rgba(248,248,251,0)_85.19%)] pb-[50px]">
      <Divider variant="secondary" />
      <MotionItem className="flex flex-col items-center p-12">
        <svg
          className="mb-14"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="30"
          viewBox="0 0 22 30"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.2727 0L0 14.8811L21.2727 30V16.2581L16.498 13.1812L13.8108 15L18.2828 17.9091V24.1393L5.25153 14.8811L21.2727 3.68624V0Z"
            fill="url(#paint0_linear_2208_924)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.2727 4.84595L7.03271 14.8893L17.2678 22.1536V18.3957L12.0999 15.0404L21.2727 8.57158V4.84595Z"
            fill="url(#paint1_linear_2208_924)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2208_924"
              x1="23.4"
              y1="7.4375"
              x2="8.21502"
              y2="25.2035"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#105EFF" />
              <stop offset="0.413357" stop-color="#009BFF" />
              <stop offset="0.735652" stop-color="#105EFF" />
              <stop offset="1" stop-color="#090E43" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2208_924"
              x1="9.24634"
              y1="19.9998"
              x2="23.0113"
              y2="5.26866"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#105EFF" />
              <stop offset="0.413357" stop-color="#009BFF" />
              <stop offset="0.735652" stop-color="#105EFF" />
              <stop offset="1" stop-color="#090E43" />
            </linearGradient>
          </defs>
        </svg>
        <Chip
          color="primary"
          className="rounded-full px-3 dark:text-athens-gray light:text-charade dark:bg-blue-950 light:bg-blue-100 gap-1"
          start={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M16 9.38004C16 7.62004 14.6333 6.19337 12.9 6.07337C12.4467 3.77337 10.4267 2.0467 8 2.0467C7.11333 2.0467 6.28667 2.2867 5.56667 2.69337L6.56 3.6867C7.00667 3.49337 7.48667 3.38004 8 3.38004C10.0267 3.38004 11.6667 5.02004 11.6667 7.0467V7.38004H12.6667C13.7733 7.38004 14.6667 8.27337 14.6667 9.38004C14.6667 10.04 14.3467 10.6134 13.86 10.98L14.8 11.92C15.5267 11.3067 16 10.4067 16 9.38004ZM2.94 1.95337L2 2.89337L3.84667 4.74004H3.56667C1.56 4.95337 0 6.65337 0 8.71337C0 10.92 1.79333 12.7134 4 12.7134H11.82L13.1533 14.0467L14.0933 13.1067L2.94 1.95337ZM4 11.38C2.52667 11.38 1.33333 10.1867 1.33333 8.71337C1.33333 7.24004 2.52667 6.0467 4 6.0467H5.15333L10.4867 11.38H4Z"
                fill="#105EFF"
              />
            </svg>
          }
        >
          404
        </Chip>
        <PageTitle className="font-bold my-3 dark:text-athens-gray">
          This page does not exist
        </PageTitle>
        <span className="dark:text-waterloo light:text-charade">
          Sorry, we couldn't find the page you're looking for.
        </span>
      </MotionItem>
      <div className="flex flex-col items-center w-[600px] pb-[50px] m-auto">
        <MotionItem className="flex gap-2.5 w-full p-6 border border-transparent dark:hover:[border-image:linear-gradient(to_top_left,#242433,#02020F)_10] light:hover:[border-image:linear-gradient(to_top_left,#E6E6F0,#FFFFFF)_10] hover:cursor-pointer transition-colors rounded group/item">
          <svg
            className="group-hover/item:fill-primary-active dark:fill-mystic transition-colors"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8.34239 2.5C7.17168 2.5 6.22283 3.44886 6.22283 4.61957V5.67935H5.86957C4.69886 5.67935 3.75 6.62821 3.75 7.79891V16.6304C3.75 17.8011 4.69886 18.75 5.86957 18.75H11.875C13.0457 18.75 13.9946 17.8011 13.9946 16.6304V16.2772H15.0543C16.2251 16.2772 17.1739 15.3283 17.1739 14.1576V8.05834C17.1739 7.4963 16.9504 6.95751 16.5529 6.55974L13.1142 3.12097C12.7164 2.72355 12.1776 2.5 11.6156 2.5H8.34239ZM8.34239 3.91304H10.8152V6.73913C10.8152 7.90984 11.7641 8.8587 12.9348 8.8587H15.7609V14.1576C15.7609 14.548 15.4447 14.8641 15.0543 14.8641H8.34239C7.95204 14.8641 7.63587 14.548 7.63587 14.1576V4.61957C7.63587 4.22921 7.95204 3.91304 8.34239 3.91304ZM12.2283 4.23319L15.44 7.44565H12.9348C12.5444 7.44565 12.2283 7.12948 12.2283 6.73913V4.23319ZM5.86957 7.09239H6.22283V14.5109C6.22283 15.4862 7.01378 16.2772 7.98913 16.2772H12.5815V16.6304C12.5815 17.0208 12.2654 17.337 11.875 17.337H5.86957C5.47921 17.337 5.16304 17.0208 5.16304 16.6304V7.79891C5.16304 7.40856 5.47921 7.09239 5.86957 7.09239ZM9.79338 9.91848C9.44118 9.91848 9.11509 10.1591 9.05857 10.5063C8.98686 10.949 9.32622 11.3315 9.75543 11.3315H13.6034C13.9552 11.3315 14.2816 11.0909 14.3382 10.7437C14.4099 10.301 14.0705 9.91848 13.6413 9.91848H9.79338ZM9.79338 12.3913C9.44118 12.3913 9.11509 12.6319 9.05857 12.9792C8.98686 13.4218 9.32622 13.8043 9.75543 13.8043H13.6034C13.9552 13.8043 14.2816 13.5638 14.3382 13.2165C14.4099 12.7739 14.0705 12.3913 13.6413 12.3913H9.79338Z" />
          </svg>
          <Stack direction="column" alignItems="start" dense>
            <span className="font-bold">Documentation</span>
            <span className="dark:text-waterloo light:text-charade">
              Learn how to integrate our tools with your app.
            </span>
          </Stack>
          <div className="grow self-center flex justify-end">
            <svg
              className="dark:fill-mystic"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
            </svg>
          </div>
        </MotionItem>
        <MotionItem className="w-full">
          <Divider variant="secondary" disableMargins />
        </MotionItem>
        <MotionItem className="flex gap-2.5 w-full p-6 border border-transparent dark:hover:[border-image:linear-gradient(to_top_left,#242433,#02020F)_10] light:hover:[border-image:linear-gradient(to_top_left,#E6E6F0,#FFFFFF)_10] hover:cursor-pointer transition-colors rounded group/item">
          <svg
            className="group-hover/item:fill-primary-active dark:fill-mystic transition-colors"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4.6875 3.4375C3.65344 3.4375 2.8125 4.27844 2.8125 5.3125V14.6875C2.8125 15.7216 3.65344 16.5625 4.6875 16.5625H15.3125C16.3466 16.5625 17.1875 15.7216 17.1875 14.6875V5.3125C17.1875 4.27844 16.3466 3.4375 15.3125 3.4375H4.6875ZM4.0625 7.1875H15.9375V14.6875C15.9375 15.0322 15.6572 15.3125 15.3125 15.3125H4.6875C4.34281 15.3125 4.0625 15.0322 4.0625 14.6875V7.1875ZM6.875 9.0625C6.52969 9.0625 6.25 9.34219 6.25 9.6875C6.25 10.0328 6.52969 10.3125 6.875 10.3125C7.22031 10.3125 7.5 10.0328 7.5 9.6875C7.5 9.34219 7.22031 9.0625 6.875 9.0625ZM9.6875 9.0625C9.3425 9.0625 9.0625 9.3425 9.0625 9.6875C9.0625 10.0325 9.3425 10.3125 9.6875 10.3125H13.125C13.47 10.3125 13.75 10.0325 13.75 9.6875C13.75 9.3425 13.47 9.0625 13.125 9.0625H9.6875ZM6.875 11.875C6.52969 11.875 6.25 12.1547 6.25 12.5C6.25 12.8453 6.52969 13.125 6.875 13.125C7.22031 13.125 7.5 12.8453 7.5 12.5C7.5 12.1547 7.22031 11.875 6.875 11.875ZM9.6875 11.875C9.3425 11.875 9.0625 12.155 9.0625 12.5C9.0625 12.845 9.3425 13.125 9.6875 13.125H13.125C13.47 13.125 13.75 12.845 13.75 12.5C13.75 12.155 13.47 11.875 13.125 11.875H9.6875Z" />
          </svg>
          <Stack direction="column" alignItems="start" dense>
            <span className="font-bold">APIs</span>
            <span className="dark:text-waterloo light:text-charade">
              Explore all API references
            </span>
          </Stack>
          <div className="grow self-center flex justify-end">
            <svg
              className="dark:fill-mystic"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
            </svg>
          </div>
        </MotionItem>
        <MotionItem className="w-full">
          <Divider variant="secondary" disableMargins />
        </MotionItem>
        <MotionItem className="flex gap-2.5 w-full p-6 border border-transparent dark:hover:[border-image:linear-gradient(to_top_left,#242433,#02020F)_10] light:hover:[border-image:linear-gradient(to_top_left,#E6E6F0,#FFFFFF)_10] hover:cursor-pointer transition-colors rounded group/item">
          <svg
            className="group-hover/item:fill-primary-active dark:fill-mystic transition-colors"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.16663 15H10.8333V13.3334H9.16663V15ZM9.99996 1.66669C5.39996 1.66669 1.66663 5.40002 1.66663 10C1.66663 14.6 5.39996 18.3334 9.99996 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99996 1.66669ZM9.99996 16.6667C6.32496 16.6667 3.33329 13.675 3.33329 10C3.33329 6.32502 6.32496 3.33335 9.99996 3.33335C13.675 3.33335 16.6666 6.32502 16.6666 10C16.6666 13.675 13.675 16.6667 9.99996 16.6667ZM9.99996 5.00002C8.15829 5.00002 6.66663 6.49169 6.66663 8.33335H8.33329C8.33329 7.41669 9.08329 6.66669 9.99996 6.66669C10.9166 6.66669 11.6666 7.41669 11.6666 8.33335C11.6666 10 9.16663 9.79169 9.16663 12.5H10.8333C10.8333 10.625 13.3333 10.4167 13.3333 8.33335C13.3333 6.49169 11.8416 5.00002 9.99996 5.00002Z" />
          </svg>
          <Stack direction="column" alignItems="start" dense>
            <span className="font-bold">Guide</span>
            <span className="dark:text-waterloo light:text-charade">
              Easy-to-follow installation guides.
            </span>
          </Stack>
          <div className="grow self-center flex justify-end">
            <svg
              className="dark:fill-mystic"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
            </svg>
          </div>
        </MotionItem>
        <MotionItem className="w-full">
          <Divider variant="secondary" disableMargins />
        </MotionItem>
        <MotionItem className="flex gap-2.5 w-full p-6 border border-transparent dark:hover:[border-image:linear-gradient(to_top_left,#242433,#02020F)_10] light:hover:[border-image:linear-gradient(to_top_left,#E6E6F0,#FFFFFF)_10] hover:cursor-pointer transition-colors rounded group/item">
          <svg
            className="group-hover/item:fill-primary-active dark:fill-mystic transition-colors"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 3.125C5.69219 3.125 2.1875 5.92191 2.1875 9.36035C2.1875 11.5082 3.54574 13.4703 5.77637 14.61C5.1398 15.6831 4.53233 16.5473 4.52515 16.5576C4.38358 16.7589 4.37328 17.0245 4.4989 17.2363C4.61265 17.4273 4.81787 17.5427 5.03662 17.5427C5.06037 17.5427 5.08428 17.5413 5.10803 17.5385C5.18959 17.5291 7.07768 17.2956 9.38049 15.5756C9.59049 15.589 9.79812 15.5957 10 15.5957C14.3078 15.5957 17.8125 12.7988 17.8125 9.36035C17.8125 5.92191 14.3078 3.125 10 3.125ZM10 4.375C13.6184 4.375 16.5625 6.61129 16.5625 9.36035C16.5625 12.1094 13.6184 14.3457 10 14.3457C9.75688 14.3457 9.50281 14.3349 9.245 14.3121C9.08875 14.2978 8.93175 14.344 8.80737 14.4409C7.94862 15.1069 7.15041 15.5385 6.50635 15.816C6.72978 15.456 6.97114 15.0523 7.2052 14.6326C7.2927 14.4766 7.30882 14.2905 7.24976 14.1217C7.19069 13.953 7.06228 13.8178 6.89697 13.75C4.76291 12.8741 3.4375 11.1916 3.4375 9.36035C3.4375 6.61129 6.38156 4.375 10 4.375ZM6.875 8.4375C6.35719 8.4375 5.9375 8.85719 5.9375 9.375C5.9375 9.89281 6.35719 10.3125 6.875 10.3125C7.39281 10.3125 7.8125 9.89281 7.8125 9.375C7.8125 8.85719 7.39281 8.4375 6.875 8.4375ZM10 8.4375C9.48219 8.4375 9.0625 8.85719 9.0625 9.375C9.0625 9.89281 9.48219 10.3125 10 10.3125C10.5178 10.3125 10.9375 9.89281 10.9375 9.375C10.9375 8.85719 10.5178 8.4375 10 8.4375ZM13.125 8.4375C12.6072 8.4375 12.1875 8.85719 12.1875 9.375C12.1875 9.89281 12.6072 10.3125 13.125 10.3125C13.6428 10.3125 14.0625 9.89281 14.0625 9.375C14.0625 8.85719 13.6428 8.4375 13.125 8.4375Z" />
          </svg>
          <Stack direction="column" alignItems="start" dense>
            <span className="font-bold">Blog</span>
            <span className="dark:text-waterloo light:text-charade">
              Read our latest news.
            </span>
          </Stack>
          <div className="grow self-center flex justify-end">
            <svg
              className="dark:fill-mystic"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
            </svg>
          </div>
        </MotionItem>
      </div>
      <MotionItem>
        <Button
          color="primary"
          className="z-10 mx-auto relative rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors font-semibold"
        >
          ← Back to Home
        </Button>
      </MotionItem>
    </MotionGroup>
  </div>
);
