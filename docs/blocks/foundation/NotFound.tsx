import React from 'react';
import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements';

export const NotFound = () => (
  <div className="flex flex-row justify-center w-full relative">
    <div className="text-center">
      <div className="absolute top-[-100%] left-0 z-0 w-full text-center text-transparent bg-clip-text text-[400px] opacity-30 bg-gradient-to-r from-waterloo to-charade">
        404
      </div>
      <div className="text-surface-content z-10 relative font-bold !text-5xl">
        We lost this page
      </div>
      <div className="text-surface-content opacity-80 pb-10 z-10 relative">
        The page you are looking for doesnt exist or has been moved.
      </div>
      <Input
        placeholder="Search our site..."
        fullWidth
        className="z-10"
        start={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <g clip-path="url(#a)">
              <path
                fill="#242433"
                d="M10.503 9.503h-.526l-.187-.18a4.314 4.314 0 0 0 1.047-2.82 4.333 4.333 0 1 0-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334Zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
        }
      />
      <Button color="primary" className="mt-10 z-10 mx-auto relative rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus focus:outline-none transition-colors">
        ← Back to Home
      </Button>
    </div>
  </div>
);
