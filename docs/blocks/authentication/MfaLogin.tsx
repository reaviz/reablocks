import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Input } from '../../../src/form/Input';
import { Stack } from '../../../src/layout/Stack';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';

import logo from '../../assets/reaviz.svg';

export const MfaLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full md:w-[600px]"
    >
      <Card className="w-full p-[50px]">
        <Stack justifyContent="spaceBetween">
          <img src={logo} className="h-[30px]" />
          <a href="#" className="text-lg text-primary font-semibold">
            New to Reablocks?
          </a>
        </Stack>
        <div className="flex flex-col items-center justify-center pb-5 mt-[190px] text-center">
          <div className="p-3 bg-primary rounded mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M3.49998 2C2.30665 2 1.33331 2.97333 1.33331 4.16667V7.83333C1.33331 9.02667 2.30665 10 3.49998 10H7.66665C7.81665 9.64 8.01324 9.30333 8.25323 9H3.49998C2.85665 9 2.33331 8.47667 2.33331 7.83333V4.16667C2.33331 3.52333 2.85665 3 3.49998 3H12.5C13.1433 3 13.6666 3.52333 13.6666 4.16667V7.82357C13.9966 7.99357 14.3035 8.20971 14.5768 8.45638C14.6335 8.25971 14.6666 8.05 14.6666 7.83333V4.16667C14.6666 2.97333 13.6933 2 12.5 2H3.49998ZM4.99998 5.33333C4.82317 5.33333 4.6536 5.40357 4.52858 5.5286C4.40355 5.65362 4.33331 5.82319 4.33331 6C4.33331 6.17681 4.40355 6.34638 4.52858 6.4714C4.6536 6.59643 4.82317 6.66667 4.99998 6.66667C5.17679 6.66667 5.34636 6.59643 5.47138 6.4714C5.59641 6.34638 5.66665 6.17681 5.66665 6C5.66665 5.82319 5.59641 5.65362 5.47138 5.5286C5.34636 5.40357 5.17679 5.33333 4.99998 5.33333ZM7.99998 5.33333C7.82317 5.33333 7.6536 5.40357 7.52858 5.5286C7.40355 5.65362 7.33331 5.82319 7.33331 6C7.33331 6.17681 7.40355 6.34638 7.52858 6.4714C7.6536 6.59643 7.82317 6.66667 7.99998 6.66667C8.17679 6.66667 8.34636 6.59643 8.47138 6.4714C8.59641 6.34638 8.66665 6.17681 8.66665 6C8.66665 5.82319 8.59641 5.65362 8.47138 5.5286C8.34636 5.40357 8.17679 5.33333 7.99998 5.33333ZM11 5.33333C10.8232 5.33333 10.6536 5.40357 10.5286 5.5286C10.4036 5.65362 10.3333 5.82319 10.3333 6C10.3333 6.17681 10.4036 6.34638 10.5286 6.4714C10.6536 6.59643 10.8232 6.66667 11 6.66667C11.1768 6.66667 11.3464 6.59643 11.4714 6.4714C11.5964 6.34638 11.6666 6.17681 11.6666 6C11.6666 5.82319 11.5964 5.65362 11.4714 5.5286C11.3464 5.40357 11.1768 5.33333 11 5.33333ZM11.6666 8C9.64165 8 7.99998 9.64167 7.99998 11.6667C7.99998 13.6917 9.64165 15.3333 11.6666 15.3333C13.6916 15.3333 15.3333 13.6917 15.3333 11.6667C15.3333 9.64167 13.6916 8 11.6666 8ZM11.6666 9.33333C12.308 9.33333 12.903 9.60163 13.3333 10.043V9.66667C13.3333 9.48267 13.4823 9.33333 13.6666 9.33333C13.851 9.33333 14 9.48267 14 9.66667V11C14 11.184 13.851 11.3333 13.6666 11.3333H12.3333C12.149 11.3333 12 11.184 12 11C12 10.816 12.149 10.6667 12.3333 10.6667H12.987C12.6786 10.2573 12.1963 10 11.6666 10C10.7476 10 9.99998 10.7477 9.99998 11.6667C9.99998 12.5857 10.7476 13.3333 11.6666 13.3333C12.37 13.3333 13.001 12.887 13.2363 12.2227C13.2976 12.049 13.4878 11.9579 13.6614 12.0195C13.8351 12.0812 13.9262 12.2713 13.8646 12.4447C13.5356 13.375 12.652 14 11.6666 14C10.3803 14 9.33331 12.9533 9.33331 11.6667C9.33331 10.38 10.3803 9.33333 11.6666 9.33333Z" />
            </svg>
          </div>
          <h1 className="mt-2 mb-0 text-2xl font-sans font-bold">
            Enter your code
          </h1>
          <div className="text-panel-secondary-content text-base">
            We sent a code to{' '}
            <a href="#" className="text-primary">
              austin@goodcode.us
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block>
            <Controller
              name="pin"
              control={control}
              render={({ field: { value, ...rest } }) => (
                <div className="grid grid-cols-4 gap-4">
                  {['1', '6', '', ''].map((value, idx) => (
                    <Input
                      {...rest}
                      disabled={isSubmitting}
                      value={value}
                      className="text-center min-w-0"
                    />
                  ))}
                </div>
              )}
            />
          </Block>
          <Stack justifyContent="spaceBetween" className="mb-[190px]">
            <div className="text-center text-panel-secondary-content text-base">
              Didn't receive a email?
            </div>
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg inline-flex items-center gap-2"
            >
              Click to resend
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.1667 5.33335L10.5 8.00002H12.5C12.5 10.2067 10.7067 12 8.50002 12C7.82669 12 7.18669 11.8334 6.63335 11.5334L5.66002 12.5067C6.48002 13.0267 7.45335 13.3334 8.50002 13.3334C11.4467 13.3334 13.8334 10.9467 13.8334 8.00002H15.8334L13.1667 5.33335ZM4.50002 8.00002C4.50002 5.79335 6.29335 4.00002 8.50002 4.00002C9.17335 4.00002 9.81335 4.16669 10.3667 4.46669L11.34 3.49335C10.52 2.97335 9.54669 2.66669 8.50002 2.66669C5.55335 2.66669 3.16669 5.05335 3.16669 8.00002H1.16669L3.83335 10.6667L6.50002 8.00002H4.50002Z" />
              </svg>
            </a>
          </Stack>
          <Button
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="currentColor"
            >
              <path d="M6.97003 4L6.03003 4.94L9.08336 8L6.03003 11.06L6.97003 12L10.97 8L6.97003 4Z" />
            </svg>
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};
