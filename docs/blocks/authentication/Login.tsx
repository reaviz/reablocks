import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout';
import { Input } from '../../../src/form/Input';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/reaviz.svg';

export const Login = () => {
  const {
    control,
    handleSubmit,
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
          <Divider className="my-7" variant="secondary" />
          <Button
            variant="outline"
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M8.50001 1.33325C4.82411 1.33325 1.83334 4.32402 1.83334 7.99992C1.83334 11.6758 4.82411 14.6666 8.50001 14.6666C12.1759 14.6666 15.1667 11.6758 15.1667 7.99992C15.1667 7.68639 15.1385 7.38685 15.0996 7.09953C15.0834 6.97964 15.0242 6.8697 14.9331 6.79009C14.842 6.71049 14.7252 6.66661 14.6042 6.66658H8.66668C8.53407 6.6666 8.4069 6.71928 8.31314 6.81305C8.21937 6.90681 8.16669 7.03398 8.16668 7.16658V9.16658C8.16669 9.29919 8.21937 9.42636 8.31314 9.52012C8.4069 9.61389 8.53407 9.66657 8.66668 9.66658H11.7136C11.104 10.8406 9.91918 11.6666 8.50001 11.6666C6.46886 11.6666 4.83334 10.0311 4.83334 7.99992C4.83334 5.96877 6.46886 4.33325 8.50001 4.33325C9.43118 4.33325 10.2721 4.6829 10.9206 5.25578C11.016 5.33988 11.1398 5.38447 11.267 5.38048C11.3941 5.37649 11.5149 5.32422 11.6048 5.23429L13.0195 3.82023C13.0672 3.77261 13.1048 3.71584 13.13 3.65333C13.1552 3.59083 13.1675 3.52388 13.1661 3.4565C13.1648 3.38913 13.1498 3.32271 13.1222 3.26126C13.0945 3.1998 13.0548 3.14457 13.0052 3.09888C11.8213 2.00641 10.2384 1.33325 8.50001 1.33325ZM8.50001 2.33325C9.79224 2.33325 10.9608 2.78521 11.9115 3.51424L11.1699 4.25513C10.408 3.70909 9.50943 3.33325 8.50001 3.33325C6.88151 3.33325 5.45468 4.16481 4.6172 5.42114L3.81642 4.80851C4.83547 3.314 6.55005 2.33325 8.50001 2.33325ZM3.33009 5.69588L4.15691 6.32804C3.9554 6.84888 3.83334 7.40918 3.83334 7.99992C3.83334 8.59066 3.9554 9.15096 4.15691 9.67179L3.33009 10.304C3.01623 9.59914 2.83334 8.82279 2.83334 7.99992C2.83334 7.17704 3.01623 6.40069 3.33009 5.69588ZM9.16668 7.66658H14.1413C14.1491 7.77735 14.1667 7.8898 14.1667 7.99992C14.1667 9.4142 13.6331 10.6893 12.78 11.6809L11.9994 11.0045C12.4269 10.5069 12.7894 9.95334 12.9779 9.30656C12.9996 9.23206 13.0037 9.15353 12.9898 9.07718C12.9759 9.00083 12.9444 8.92876 12.8979 8.86667C12.8513 8.80458 12.791 8.75418 12.7216 8.71945C12.6522 8.68472 12.5757 8.66662 12.4981 8.66658H9.16668V7.66658ZM4.6172 10.5787C5.45468 11.835 6.88151 12.6666 8.50001 12.6666C9.55209 12.6666 10.5222 12.3145 11.3034 11.7245L12.0593 12.3801C11.0847 13.1726 9.85742 13.6666 8.50001 13.6666C6.55005 13.6666 4.83547 12.6858 3.81642 11.1913L4.6172 10.5787Z" />
              </svg>
            }
            fullWidth
          >
            Sign up with Google
          </Button>
          <div className="mt-5 text-sm text-panel-secondary-content flex items-center justify-center gap-2">
            By signing in, you agree to our
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              terms of service
            </a>
            and
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              privacy policy
            </a>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
