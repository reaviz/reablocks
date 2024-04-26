import React from 'react';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Chip } from '../../../src/elements/Chip';
import { Divider } from '../../../src/layout/Divider';
import { MotionGroup } from '../../../src/layout/Motion/MotionGroup';
import { MotionItem } from '../../../src/layout/Motion/MotionItem';

import gridPattern from '../../assets/grid.svg';

export const LostPage = () => (
  <div className="flex flex-row justify-center w-full min-h-[800px] relative dark:bg-black-pearl">
    <div className="text-center w-full">
      <img src={gridPattern} className="absolute top-0" />
      <div className="flex flex-col gap-3 w-full h-full justify-center">
        <div>
          <Chip
            color="primary"
            className="rounded-full px-3 dark:text-athens-gray light:text-charade dark:bg-blue-950 light:bg-blue-100 gap-1"
          >
            404 Error
          </Chip>
        </div>
        <div className="text-surface-content z-10 relative font-bold !text-5xl">
          We lost this page
        </div>
        <div className="dark:text-waterloo light:text-charade opacity-80 z-10 relative">
          Let's find a better place for you to go.
        </div>
        <Button
          color="primary"
          className="z-10 mx-auto relative rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors font-semibold"
        >
          ← Back to Home
        </Button>
        <MotionGroup className="mt-[200px] w-full grid grid-cols-3 px-10">
          <MotionItem className="group/item">
            <Card className="relative text-left border-transparent dark:group-hover/item:border-charade light:group-hover/item:border-mystic transition-colors">
              <div className="flex flex-col gap-6 items-start">
                <svg
                  className="fill:secondary-hover group-hover/item:fill-primary transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8.34239 2.5C7.17168 2.5 6.22283 3.44886 6.22283 4.61957V5.67935H5.86957C4.69886 5.67935 3.75 6.62821 3.75 7.79891V16.6304C3.75 17.8011 4.69886 18.75 5.86957 18.75H11.875C13.0457 18.75 13.9946 17.8011 13.9946 16.6304V16.2772H15.0543C16.2251 16.2772 17.1739 15.3283 17.1739 14.1576V8.05834C17.1739 7.4963 16.9504 6.95751 16.5529 6.55974L13.1142 3.12097C12.7164 2.72355 12.1776 2.5 11.6156 2.5H8.34239ZM8.34239 3.91304H10.8152V6.73913C10.8152 7.90984 11.7641 8.8587 12.9348 8.8587H15.7609V14.1576C15.7609 14.548 15.4447 14.8641 15.0543 14.8641H8.34239C7.95204 14.8641 7.63587 14.548 7.63587 14.1576V4.61957C7.63587 4.22921 7.95204 3.91304 8.34239 3.91304ZM12.2283 4.23319L15.44 7.44565H12.9348C12.5444 7.44565 12.2283 7.12948 12.2283 6.73913V4.23319ZM5.86957 7.09239H6.22283V14.5109C6.22283 15.4862 7.01378 16.2772 7.98913 16.2772H12.5815V16.6304C12.5815 17.0208 12.2654 17.337 11.875 17.337H5.86957C5.47921 17.337 5.16304 17.0208 5.16304 16.6304V7.79891C5.16304 7.40856 5.47921 7.09239 5.86957 7.09239ZM9.79338 9.91848C9.44118 9.91848 9.11509 10.1591 9.05857 10.5063C8.98686 10.949 9.32622 11.3315 9.75543 11.3315H13.6034C13.9552 11.3315 14.2816 11.0909 14.3382 10.7437C14.4099 10.301 14.0705 9.91848 13.6413 9.91848H9.79338ZM9.79338 12.3913C9.44118 12.3913 9.11509 12.6319 9.05857 12.9792C8.98686 13.4218 9.32622 13.8043 9.75543 13.8043H13.6034C13.9552 13.8043 14.2816 13.5638 14.3382 13.2165C14.4099 12.7739 14.0705 12.3913 13.6413 12.3913H9.79338Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold">Documentation</span>
                  <span className="text-base dark:text-waterloo light:text-charade">
                    Learn how to integrate our tools.
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-2"
                >
                  Start learning
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z" />
                  </svg>
                </a>
              </div>
              <Divider
                className="absolute left-0 bottom-[0px] w-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                variant="secondary"
                disableMargins
              />
            </Card>
          </MotionItem>
          <MotionItem className="group/item">
            <Card className="relative text-left border-transparent dark:group-hover/item:border-charade light:group-hover/item:border-mystic transition-colors">
              <div className="flex flex-col gap-6 items-start">
                <svg
                  className="fill:secondary-hover group-hover/item:fill-primary transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.16663 15H10.8333V13.3334H9.16663V15ZM9.99996 1.66669C5.39996 1.66669 1.66663 5.40002 1.66663 10C1.66663 14.6 5.39996 18.3334 9.99996 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99996 1.66669ZM9.99996 16.6667C6.32496 16.6667 3.33329 13.675 3.33329 10C3.33329 6.32502 6.32496 3.33335 9.99996 3.33335C13.675 3.33335 16.6666 6.32502 16.6666 10C16.6666 13.675 13.675 16.6667 9.99996 16.6667ZM9.99996 5.00002C8.15829 5.00002 6.66663 6.49169 6.66663 8.33335H8.33329C8.33329 7.41669 9.08329 6.66669 9.99996 6.66669C10.9166 6.66669 11.6666 7.41669 11.6666 8.33335C11.6666 10 9.16663 9.79169 9.16663 12.5H10.8333C10.8333 10.625 13.3333 10.4167 13.3333 8.33335C13.3333 6.49169 11.8416 5.00002 9.99996 5.00002Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold">Guide</span>
                  <span className="text-base dark:text-waterloo light:text-charade">
                    Easy-to-follow installation guides.
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-2"
                >
                  Start learning
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z" />
                  </svg>
                </a>
              </div>
              <Divider
                className="absolute left-0 bottom-[0px] w-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                variant="secondary"
                disableMargins
              />
            </Card>
          </MotionItem>
          <MotionItem className="group/item">
            <Card className="relative text-left border-transparent dark:group-hover/item:border-charade light:group-hover/item:border-mystic transition-colors">
              <div className="flex flex-col gap-6 items-start">
                <svg
                  className="fill:secondary-hover group-hover/item:fill-primary transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.125C5.69219 3.125 2.1875 5.92191 2.1875 9.36035C2.1875 11.5082 3.54574 13.4703 5.77637 14.61C5.1398 15.6831 4.53233 16.5473 4.52515 16.5576C4.38358 16.7589 4.37328 17.0245 4.4989 17.2363C4.61265 17.4273 4.81787 17.5427 5.03662 17.5427C5.06037 17.5427 5.08428 17.5413 5.10803 17.5385C5.18959 17.5291 7.07768 17.2956 9.38049 15.5756C9.59049 15.589 9.79812 15.5957 10 15.5957C14.3078 15.5957 17.8125 12.7988 17.8125 9.36035C17.8125 5.92191 14.3078 3.125 10 3.125ZM10 4.375C13.6184 4.375 16.5625 6.61129 16.5625 9.36035C16.5625 12.1094 13.6184 14.3457 10 14.3457C9.75688 14.3457 9.50281 14.3349 9.245 14.3121C9.08875 14.2978 8.93175 14.344 8.80737 14.4409C7.94862 15.1069 7.15041 15.5385 6.50635 15.816C6.72978 15.456 6.97114 15.0523 7.2052 14.6326C7.2927 14.4766 7.30882 14.2905 7.24976 14.1217C7.19069 13.953 7.06228 13.8178 6.89697 13.75C4.76291 12.8741 3.4375 11.1916 3.4375 9.36035C3.4375 6.61129 6.38156 4.375 10 4.375ZM6.875 8.4375C6.35719 8.4375 5.9375 8.85719 5.9375 9.375C5.9375 9.89281 6.35719 10.3125 6.875 10.3125C7.39281 10.3125 7.8125 9.89281 7.8125 9.375C7.8125 8.85719 7.39281 8.4375 6.875 8.4375ZM10 8.4375C9.48219 8.4375 9.0625 8.85719 9.0625 9.375C9.0625 9.89281 9.48219 10.3125 10 10.3125C10.5178 10.3125 10.9375 9.89281 10.9375 9.375C10.9375 8.85719 10.5178 8.4375 10 8.4375ZM13.125 8.4375C12.6072 8.4375 12.1875 8.85719 12.1875 9.375C12.1875 9.89281 12.6072 10.3125 13.125 10.3125C13.6428 10.3125 14.0625 9.89281 14.0625 9.375C14.0625 8.85719 13.6428 8.4375 13.125 8.4375Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold">Blog</span>
                  <span className="text-base dark:text-waterloo light:text-charade">
                    Read our latest news.
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-2"
                >
                  View latest post
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z" />
                  </svg>
                </a>
              </div>
              <Divider
                className="absolute left-0 bottom-[0px] w-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                variant="secondary"
                disableMargins
              />
            </Card>
          </MotionItem>
        </MotionGroup>
      </div>
    </div>
  </div>
);
