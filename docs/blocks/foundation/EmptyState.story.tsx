import React from 'react';
import { motion } from 'framer-motion';
import { Card, Divider } from '../../../src/layout';
import { Button } from '../../../src/elements/Button';
import { Input } from '../../../src/form/Input';

export default {
  title: 'Blocks/Foundation/Empty State'
};

export const NoResults = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full md:w-[800px]"
  >
    <Card className="w-full px-12 md:px-24 py-12">
      <div className="w-full flex-col flex items-center text-center mb-8">
        <span className="text-3xl font-bold">No Results Found</span>
        <span className="text-panel-secondary-content text-base">
          There are no results matching your search criteria. Try adjusting your
          filters or search terms to find what you're looking for.
        </span>
      </div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <a className="flex gap-4 py-4 cursor-pointer hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8.34239 2.5C7.17168 2.5 6.22283 3.44886 6.22283 4.61957V5.67935H5.86957C4.69886 5.67935 3.75 6.62821 3.75 7.79891V16.6304C3.75 17.8011 4.69886 18.75 5.86957 18.75H11.875C13.0457 18.75 13.9946 17.8011 13.9946 16.6304V16.2772H15.0543C16.2251 16.2772 17.1739 15.3283 17.1739 14.1576V8.05834C17.1739 7.4963 16.9504 6.95751 16.5529 6.55974L13.1142 3.12097C12.7164 2.72355 12.1776 2.5 11.6156 2.5H8.34239ZM8.34239 3.91304H10.8152V6.73913C10.8152 7.90984 11.7641 8.8587 12.9348 8.8587H15.7609V14.1576C15.7609 14.548 15.4447 14.8641 15.0543 14.8641H8.34239C7.95204 14.8641 7.63587 14.548 7.63587 14.1576V4.61957C7.63587 4.22921 7.95204 3.91304 8.34239 3.91304ZM12.2283 4.23319L15.44 7.44565H12.9348C12.5444 7.44565 12.2283 7.12948 12.2283 6.73913V4.23319ZM5.86957 7.09239H6.22283V14.5109C6.22283 15.4862 7.01378 16.2772 7.98913 16.2772H12.5815V16.6304C12.5815 17.0208 12.2654 17.337 11.875 17.337H5.86957C5.47921 17.337 5.16304 17.0208 5.16304 16.6304V7.79891C5.16304 7.40856 5.47921 7.09239 5.86957 7.09239ZM9.79338 9.91848C9.44118 9.91848 9.11509 10.1591 9.05857 10.5063C8.98686 10.949 9.32622 11.3315 9.75543 11.3315H13.6034C13.9552 11.3315 14.2816 11.0909 14.3382 10.7437C14.4099 10.301 14.0705 9.91848 13.6413 9.91848H9.79338ZM9.79338 12.3913C9.44118 12.3913 9.11509 12.6319 9.05857 12.9792C8.98686 13.4218 9.32622 13.8043 9.75543 13.8043H13.6034C13.9552 13.8043 14.2816 13.5638 14.3382 13.2165C14.4099 12.7739 14.0705 12.3913 13.6413 12.3913H9.79338Z" />
          </svg>
          <div className="flex flex-col gap-1 flex-1">
            <span className="font-bold">Documentation</span>
            <div>
              <span className="text-base text-panel-secondary-content inline-block">
                Learn how to integrate our tools with your app.
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="m-auto"
          >
            <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
          </svg>
        </a>
        <Divider variant="secondary" />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <a className="flex gap-4 py-4 cursor-pointer hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4.6875 3.4375C3.65344 3.4375 2.8125 4.27844 2.8125 5.3125V14.6875C2.8125 15.7216 3.65344 16.5625 4.6875 16.5625H15.3125C16.3466 16.5625 17.1875 15.7216 17.1875 14.6875V5.3125C17.1875 4.27844 16.3466 3.4375 15.3125 3.4375H4.6875ZM4.0625 7.1875H15.9375V14.6875C15.9375 15.0322 15.6572 15.3125 15.3125 15.3125H4.6875C4.34281 15.3125 4.0625 15.0322 4.0625 14.6875V7.1875ZM6.875 9.0625C6.52969 9.0625 6.25 9.34219 6.25 9.6875C6.25 10.0328 6.52969 10.3125 6.875 10.3125C7.22031 10.3125 7.5 10.0328 7.5 9.6875C7.5 9.34219 7.22031 9.0625 6.875 9.0625ZM9.6875 9.0625C9.3425 9.0625 9.0625 9.3425 9.0625 9.6875C9.0625 10.0325 9.3425 10.3125 9.6875 10.3125H13.125C13.47 10.3125 13.75 10.0325 13.75 9.6875C13.75 9.3425 13.47 9.0625 13.125 9.0625H9.6875ZM6.875 11.875C6.52969 11.875 6.25 12.1547 6.25 12.5C6.25 12.8453 6.52969 13.125 6.875 13.125C7.22031 13.125 7.5 12.8453 7.5 12.5C7.5 12.1547 7.22031 11.875 6.875 11.875ZM9.6875 11.875C9.3425 11.875 9.0625 12.155 9.0625 12.5C9.0625 12.845 9.3425 13.125 9.6875 13.125H13.125C13.47 13.125 13.75 12.845 13.75 12.5C13.75 12.155 13.47 11.875 13.125 11.875H9.6875Z" />
          </svg>
          <div className="flex flex-col gap-1 flex-1">
            <span className="font-bold">API's</span>
            <div className="">
              <span className="text-base text-panel-secondary-content inline-block">
                Explore all API references.
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="m-auto"
          >
            <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
          </svg>
        </a>
        <Divider variant="secondary" />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a className="flex gap-4 py-4 cursor-pointer hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
          >
            <path d="M8.16675 14H9.83341V12.3334H8.16675V14ZM9.00008 0.666687C4.40008 0.666687 0.666748 4.40002 0.666748 9.00002C0.666748 13.6 4.40008 17.3334 9.00008 17.3334C13.6001 17.3334 17.3334 13.6 17.3334 9.00002C17.3334 4.40002 13.6001 0.666687 9.00008 0.666687ZM9.00008 15.6667C5.32508 15.6667 2.33341 12.675 2.33341 9.00002C2.33341 5.32502 5.32508 2.33335 9.00008 2.33335C12.6751 2.33335 15.6667 5.32502 15.6667 9.00002C15.6667 12.675 12.6751 15.6667 9.00008 15.6667ZM9.00008 4.00002C7.15841 4.00002 5.66675 5.49169 5.66675 7.33335H7.33341C7.33341 6.41669 8.08341 5.66669 9.00008 5.66669C9.91675 5.66669 10.6667 6.41669 10.6667 7.33335C10.6667 9.00002 8.16675 8.79169 8.16675 11.5H9.83341C9.83341 9.62502 12.3334 9.41669 12.3334 7.33335C12.3334 5.49169 10.8417 4.00002 9.00008 4.00002Z" />
          </svg>
          <div className="flex flex-col gap-1 flex-1">
            <span className="font-bold">Guide</span>
            <div className="">
              <span className="text-base text-panel-secondary-content inline-block">
                Easy-to-follow installation guides.
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="m-auto"
          >
            <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
          </svg>
        </a>
        <Divider variant="secondary" />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a className="flex gap-4 py-4 cursor-pointer hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 3.125C5.69219 3.125 2.1875 5.92191 2.1875 9.36035C2.1875 11.5082 3.54574 13.4703 5.77637 14.61C5.1398 15.6831 4.53233 16.5473 4.52515 16.5576C4.38358 16.7589 4.37328 17.0245 4.4989 17.2363C4.61265 17.4273 4.81787 17.5427 5.03662 17.5427C5.06037 17.5427 5.08428 17.5413 5.10803 17.5385C5.18959 17.5291 7.07768 17.2956 9.38049 15.5756C9.59049 15.589 9.79812 15.5957 10 15.5957C14.3078 15.5957 17.8125 12.7988 17.8125 9.36035C17.8125 5.92191 14.3078 3.125 10 3.125ZM10 4.375C13.6184 4.375 16.5625 6.61129 16.5625 9.36035C16.5625 12.1094 13.6184 14.3457 10 14.3457C9.75688 14.3457 9.50281 14.3349 9.245 14.3121C9.08875 14.2978 8.93175 14.344 8.80737 14.4409C7.94862 15.1069 7.15041 15.5385 6.50635 15.816C6.72978 15.456 6.97114 15.0523 7.2052 14.6326C7.2927 14.4766 7.30882 14.2905 7.24976 14.1217C7.19069 13.953 7.06228 13.8178 6.89697 13.75C4.76291 12.8741 3.4375 11.1916 3.4375 9.36035C3.4375 6.61129 6.38156 4.375 10 4.375ZM6.875 8.4375C6.35719 8.4375 5.9375 8.85719 5.9375 9.375C5.9375 9.89281 6.35719 10.3125 6.875 10.3125C7.39281 10.3125 7.8125 9.89281 7.8125 9.375C7.8125 8.85719 7.39281 8.4375 6.875 8.4375ZM10 8.4375C9.48219 8.4375 9.0625 8.85719 9.0625 9.375C9.0625 9.89281 9.48219 10.3125 10 10.3125C10.5178 10.3125 10.9375 9.89281 10.9375 9.375C10.9375 8.85719 10.5178 8.4375 10 8.4375ZM13.125 8.4375C12.6072 8.4375 12.1875 8.85719 12.1875 9.375C12.1875 9.89281 12.6072 10.3125 13.125 10.3125C13.6428 10.3125 14.0625 9.89281 14.0625 9.375C14.0625 8.85719 13.6428 8.4375 13.125 8.4375Z" />
          </svg>
          <div className="flex flex-col gap-1 flex-1">
            <span className="font-bold">Blog</span>
            <div className="">
              <span className="text-base text-panel-secondary-content inline-block">
                Read our latest news.
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="m-auto"
          >
            <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
          </svg>
        </a>
      </motion.div>
    </Card>
  </motion.div>
);

export const MissingInfo = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full md:w-[690px]"
  >
    <Card
      className="w-full px-12 md:px-24 py-12 md:py-28"
      contentClassName="flex flex-col gap-2 items-center text-center"
    >
      <span className="text-3xl font-bold">Missing Info</span>
      <span className="text-panel-secondary-content text-base">
        Oops! It seems like something is missing. Try adjusting your search
        criteria or check back later.
      </span>
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
        fullWidth
        containerClassname="max-w-[400px]"
        placeholder="Search our site..."
      />
      <Button
        className="mt-6 w-fit font-semibold px-4 py-2 border-none bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
        startAdornment={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M13.8333 7.83332H5.71996L9.44663 4.10666L8.49996 3.16666L3.16663 8.49999L8.49996 13.8333L9.43996 12.8933L5.71996 9.16666H13.8333V7.83332Z"
              fill="white"
            />
          </svg>
        }
      >
        Back
      </Button>
    </Card>
  </motion.div>
);

export const NothingToDisplay = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full md:w-[620px]"
  >
    <Card
      className="w-full p-14"
      contentClassName="flex flex-col gap-2 items-center text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M19.4533 10.6666L16 14.12L12.5466 10.6666L10.6666 12.5466L14.12 16L10.6666 19.4533L12.5466 21.3333L16 17.88L19.4533 21.3333L21.3333 19.4533L17.88 16L21.3333 12.5466L19.4533 10.6666ZM16 2.66663C8.62663 2.66663 2.66663 8.62663 2.66663 16C2.66663 23.3733 8.62663 29.3333 16 29.3333C23.3733 29.3333 29.3333 23.3733 29.3333 16C29.3333 8.62663 23.3733 2.66663 16 2.66663ZM16 26.6666C10.12 26.6666 5.33329 21.88 5.33329 16C5.33329 10.12 10.12 5.33329 16 5.33329C21.88 5.33329 26.6666 10.12 26.6666 16C26.6666 21.88 21.88 26.6666 16 26.6666Z" />
      </svg>
      <span className="text-xl font-bold">Nothing to display</span>
      <span className="text-panel-secondary-content text-base">
        We couldn't find any data to show here. Try refining your search or come
        back later to see if there's anything new.
      </span>
      <Button
        className="mt-6 w-fit font-semibold px-4 py-2 border-none bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
        startAdornment={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M7.99996 2.66663V0.666626L5.33329 3.33329L7.99996 5.99996V3.99996C10.2066 3.99996 12 5.79329 12 7.99996C12 8.67329 11.8333 9.31329 11.5333 9.86663L12.5066 10.84C13.0266 10.02 13.3333 9.04663 13.3333 7.99996C13.3333 5.05329 10.9466 2.66663 7.99996 2.66663ZM7.99996 12C5.79329 12 3.99996 10.2066 3.99996 7.99996C3.99996 7.32663 4.16663 6.68663 4.46663 6.13329L3.49329 5.15996C2.97329 5.97996 2.66663 6.95329 2.66663 7.99996C2.66663 10.9466 5.05329 13.3333 7.99996 13.3333V15.3333L10.6666 12.6666L7.99996 9.99996V12Z" />
          </svg>
        }
      >
        Reset filters
      </Button>
    </Card>
  </motion.div>
);
