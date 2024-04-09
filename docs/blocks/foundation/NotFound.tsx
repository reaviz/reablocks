import React from 'react';
import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements';

export const NotFound = () => (
  <div className="flex flex-row justify-center w-full relative">
    <div className="text-center">
      <div className="absolute top-[-100%] left-0 z-0 w-full text-center text-transparent !bg-clip-text !text-[400px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(36.13,36.13,65.87)_2.03%,rgb(2,2,15)_80.17%)]">
        404
      </div>
      <div className="text-white z-10 relative font-bold !text-5xl">
        We lost this page
      </div>
      <div className="text-white opacity-50 pb-10 z-10 relative">
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
      <Button color="primary" className="mt-10 z-10 relative">
        ← Back to Home
      </Button>
    </div>
  </div>
);