import { useState } from 'react';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { MotionGroup, MotionItem } from '../../../src/layout/Motion';
import { Stack } from '../../../src/layout/Stack';
import { List, ListItem } from '../../../src/layout/List';
import { Button } from '../../../src/elements/Button';
import { Chip } from '../../../src/elements/Chip';
import { cn } from '../../../src/utils/Theme/helpers';
import { motion } from 'framer-motion';
import { Radio, radioTheme } from '../../../src/form/Radio';
import { Toggle, toggleTheme } from '../../../src/form/Toggle';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M8 1.33325C4.31999 1.33325 1.33333 4.31992 1.33333 7.99992C1.33333 11.6799 4.31999 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM8 13.3333C5.06 13.3333 2.66666 10.9399 2.66666 7.99992C2.66666 5.05992 5.06 2.66659 8 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8 13.3333ZM11.06 5.05325L6.66666 9.44659L4.93999 7.72659L3.99999 8.66659L6.66666 11.3333L12 5.99992L11.06 5.05325Z"
      fill="#105EFF"
    />
  </svg>
);

const ToggleTheme = {
  ...toggleTheme,
  base: 'flex items-center justify-start cursor-pointer box-border border dark:border-charade dark:bg-[#1E1E2E] light:border-mystic light:bg-[#C9C9D6] hover:bg-primary-hover focus-visible:outline-none focus-visible:border-primary-hover rounded-xl transition-colors',
  checked: 'justify-end bg-blue-500',
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
              className="rounded-full dark:bg-blue-950 light:bg-blue-100 light:text-vulcan px-3 py-1"
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
              className="px-4 py-2 text-lg dark:bg-button-gradient dark:hover:bg-button-gradient-hover dark:focus:bg-button-gradient-focus light:focus:bg-primary-hover focus:outline-none transition-colors"
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
