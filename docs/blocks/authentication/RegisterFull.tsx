import { useState } from 'react';
import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { cn } from '../../../src/utils';
import { Divider } from '../../../src/layout/Divider';
import { Input } from '../../../src/form/Input';
import { Radio, radioTheme } from '../../../src/form/Radio';
import { Select, SelectOption } from '../../../src/form/Select';
import { Stack } from '../../../src/layout/Stack';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/reaviz.svg';

const RadioTheme = {
  ...radioTheme,
  base: 'box-border leading-3',
  radio: {
    ...radioTheme.radio,
    base: 'will-change-[border-color] inline-flex justify-center items-center box-border align-middle rounded-full bg-transparent border light:border-charade cursor-pointer focus-visible:outline-none focus-visible:border-primary-hover',
    checked: 'border-primary'
  }
};

export const RegisterFull = () => {
  const [selection, setSelection] = useState('');
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[11000px]"
    >
      <Card className="w-full p-12">
        <div className="flex flex-col pt-2 mb-5">
          <div>
            <img src={logo} alt="Logo" className="h-11 mb-2" />
          </div>
          <h4 className="text-2xl font-sans font-bold mb-0">
            Welcome to Reablocks
          </h4>
          <p className="text-base text-panel-secondary-content font-sans">
            Excited to have you onboard! Start by creating your account to gain
            access to our platform. Simply provide your email, choose a
            password, and include any necessary information about your company
            to join our community and explore all we have to offer.
          </p>
          <Divider variant="secondary" className="mt-4" />
        </div>
        <form
          className="text-sm"
          onSubmit={handleSubmit(values => console.log('values', values))}
        >
          <div className="grid grid-cols-2 gap-4">
            <Block label="First Name">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="enter first name"
                    disabled={isSubmitting}
                    fullWidth
                  />
                )}
              />
            </Block>
            <Block label="Last Name">
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    placeholder="enter last name"
                    fullWidth
                  />
                )}
              />
            </Block>
          </div>
          <Block label="Email">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  disabled={isSubmitting}
                  placeholder="user@goodcode.us"
                  type="email"
                />
              )}
            />
          </Block>
          <div className="grid grid-cols-2 gap-4">
            <Block label="Company Name">
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Good Code"
                    disabled={isSubmitting}
                    type="text"
                  />
                )}
              />
            </Block>
            <Block label="Company Size">
              <Controller
                name="companySize"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="select company size"
                    disabled={isSubmitting}
                  >
                    <SelectOption value="1-10">1-10</SelectOption>
                    <SelectOption value="11-25">11-25</SelectOption>
                    <SelectOption value="25-50">25-50</SelectOption>
                    <SelectOption value="100-1000">100-1,000</SelectOption>
                    <SelectOption value="1000+">1,000+</SelectOption>
                  </Select>
                )}
              />
            </Block>
          </div>
          <h6 className="text-lg font-bold mb-4">Select a package</h6>
          <div className="grid grid-cols-3 gap-4">
            <Card
              className={cn(
                'p-5 dark:bg-vulcan hover:cursor-pointer dark:hover:bg-charade light:hover:athens-gray light:hover:border-vulcan/40 transition-colors',
                {
                  'border-primary dark:bg-black dark:hover:bg-black light:bg-athens-gray light:hover:border-primary':
                    selection === 'starter'
                }
              )}
              onClick={() => setSelection('starter')}
            >
              <Stack justifyContent="spaceBetween">
                <h6 className="text-lg font-bold">Starter</h6>
                <Radio
                  size="small"
                  checked={selection === 'starter'}
                  theme={RadioTheme}
                />
              </Stack>
              <Stack direction="column" alignItems="start" dense>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Community support
                  </span>
                </Stack>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Integration support
                  </span>
                </Stack>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Figmas support
                  </span>
                </Stack>
                <h6 className="text-lg font-bold mt-2.5">Free</h6>
              </Stack>
            </Card>
            <Card
              className={cn(
                'p-5 dark:bg-vulcan hover:cursor-pointer dark:hover:bg-charade light:hover:athens-gray light:hover:border-vulcan/40 transition-colors',
                {
                  'border-primary dark:bg-black dark:hover:bg-black light:bg-athens-gray light:hover:border-primary':
                    selection === 'premium'
                }
              )}
              onClick={() => setSelection('premium')}
            >
              <Stack justifyContent="spaceBetween">
                <h6 className="text-lg font-bold">Premium</h6>
                <Radio
                  size="small"
                  checked={selection === 'premium'}
                  theme={RadioTheme}
                />
              </Stack>
              <Stack direction="column" alignItems="start" dense>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Community support
                  </span>
                </Stack>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Integration support
                  </span>
                </Stack>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Figmas support
                  </span>
                </Stack>
                <h6 className="text-lg font-bold mt-2.5">$1000/Month</h6>
              </Stack>
            </Card>
            <Card
              className={cn(
                'p-5 dark:bg-vulcan hover:cursor-pointer dark:hover:bg-charade light:hover:athens-gray light:hover:border-vulcan/40 transition-colors',
                {
                  'border-primary dark:bg-black dark:hover:bg-black light:bg-athens-gray light:hover:border-primary':
                    selection === 'enterprise'
                }
              )}
              onClick={() => setSelection('enterprise')}
            >
              <Stack justifyContent="spaceBetween">
                <h6 className="text-lg font-bold">Enterprise</h6>
                <Radio
                  size="small"
                  checked={selection === 'enterprise'}
                  theme={RadioTheme}
                />
              </Stack>
              <Stack direction="column" alignItems="start" dense>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Community support
                  </span>
                </Stack>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Integration support
                  </span>
                </Stack>
                <Stack dense>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="currentColor"
                  >
                    <path d="M5.86332 10.9166L3.08332 8.13661L2.13666 9.07661L5.86332 12.8033L13.8633 4.80328L12.9233 3.86328L5.86332 10.9166Z" />
                  </svg>
                  <span className="dark:text-waterloo light:text-charade">
                    Figmas support
                  </span>
                </Stack>
                <h6 className="text-lg font-bold mt-2.5">Email for Price</h6>
              </Stack>
            </Card>
          </div>
          <Divider variant="secondary" className="mt-4" />
          <Stack justifyContent="spaceBetween">
            <div className="text-panel-secondary-content text-sm flex items-center justify-center gap-2">
              Already have an account?
              <a
                href="#"
                className="text-primary hover:text-primary-hover text-lg"
              >
                Sign in
              </a>
            </div>
            <div>
              <Button
                type="submit"
                variant="filled"
                color="primary"
                className="mt-5 mb-2 px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create Account →'}
              </Button>
            </div>
          </Stack>
        </form>
      </Card>
    </motion.div>
  );
};
