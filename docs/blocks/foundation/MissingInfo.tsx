import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { Card } from '../../../src/layout/Card';
import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';

export const MissingInfo: FC = () => (
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
