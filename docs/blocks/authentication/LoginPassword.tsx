import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Checkbox } from '../../../src/form/Checkbox';
import { Divider } from '../../../src/layout/Divider';
import { Input } from '../../../src/form/Input';
import { Stack } from '../../../src/layout/Stack';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/reaviz.svg';

export const LoginPassword = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting }
  } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[600px]"
    >
      <Card className="w-full p-12">
        <div className="flex flex-col items-center justify-center pt-2 mb-14">
          <img src={logo} alt="Logo" className="h-11 w-auto mb-2" />
          <h4 className="text-2xl font-sans font-bold mb-0">
            Log In or create account
          </h4>
          <span className="text-base text-panel-secondary-content font-sans">
            Welcome to Reablocks, powered by Good Code
          </span>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block className="mb-5">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="user@goodcode.us"
                  disabled={isSubmitting}
                />
              )}
            />
          </Block>
          <Block>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="enter password"
                  disabled={isSubmitting}
                />
              )}
            />
          </Block>
          <Stack justifyContent="spaceBetween">
            <Controller
              name="remember"
              control={control}
              render={({ field: { value, ...rest } }) => (
                <Checkbox
                  {...rest}
                  className="border-none"
                  size="small"
                  label="Remember me"
                  checked={value}
                  onChange={val => setValue('remember', val)}
                />
              )}
            />
            <a
              href="#"
              className="whitespace-nowrap text-primary hover:text-primary-hover"
            >
              Forgot your password?
            </a>
          </Stack>
          <Divider className="my-7" variant="secondary" />
          <Button
            type="submit"
            variant="filled"
            color="primary"
            disabled={isSubmitting}
            className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#fff"
                    d="M7.833 4.667 6.9 5.6l1.733 1.733h-6.8v1.334h6.8L6.9 10.4l.933.933L11.167 8 7.833 4.667Zm6 8H8.5V14h5.333c.734 0 1.334-.6 1.334-1.333V3.333c0-.733-.6-1.333-1.334-1.333H8.5v1.333h5.333v9.334Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.5 0h16v16H.5z" />
                  </clipPath>
                </defs>
              </svg>
            }
            fullWidth
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
          <div className="mt-5 text-sm text-panel-secondary-content flex items-center justify-center gap-2">
            Don't have an account?
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              Sign up
            </a>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
