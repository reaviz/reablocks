import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { Card } from '../../../src/layout/Card';
import { Button } from '../../../src/elements/Button';

export const NothingToDisplay: FC = () => (
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
