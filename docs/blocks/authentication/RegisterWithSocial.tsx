import { useState } from 'react';
import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { Input } from '../../../src/form/Input';
import { Stack } from '../../../src/layout/Stack';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/reaviz.svg';

export const RegisterWithSocial = () => {
  const [showPassword, setShowPassword] = useState(false);
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
        <div className="flex flex-col items-center justify-center pt-2">
          <img src={logo} alt="Logo" className="h-11 w-auto mb-2" />
          <h4 className="text-2xl font-sans font-bold mb-0">
            Welcome to Reablocks
          </h4>
          <div className="grid grid-cols-2 w-full gap-4 mt-5">
            <Button variant="outline" size="large" fullWidth>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 1.33325C4.3241 1.33325 1.33334 4.32402 1.33334 7.99992C1.33334 11.6758 4.3241 14.6666 8 14.6666C11.6759 14.6666 14.6667 11.6758 14.6667 7.99992C14.6667 7.68639 14.6385 7.38685 14.5996 7.09953C14.5834 6.97964 14.5242 6.8697 14.4331 6.79009C14.342 6.71049 14.2252 6.66661 14.1042 6.66658H8.16667C8.03406 6.6666 7.9069 6.71928 7.81313 6.81305C7.71937 6.90681 7.66668 7.03398 7.66667 7.16658V9.16658C7.66668 9.29919 7.71937 9.42636 7.81313 9.52012C7.9069 9.61389 8.03406 9.66657 8.16667 9.66658H11.2135C10.604 10.8406 9.41917 11.6666 8 11.6666C5.96885 11.6666 4.33334 10.0311 4.33334 7.99992C4.33334 5.96877 5.96885 4.33325 8 4.33325C8.93117 4.33325 9.77204 4.6829 10.4206 5.25578C10.516 5.33988 10.6398 5.38447 10.767 5.38048C10.8941 5.37649 11.0149 5.32422 11.1048 5.23429L12.5195 3.82023C12.5672 3.77261 12.6048 3.71584 12.63 3.65333C12.6552 3.59083 12.6674 3.52388 12.6661 3.4565C12.6648 3.38913 12.6498 3.32271 12.6222 3.26126C12.5945 3.1998 12.5547 3.14457 12.5052 3.09888C11.3213 2.00641 9.7384 1.33325 8 1.33325ZM8 2.33325C9.29223 2.33325 10.4608 2.78521 11.4115 3.51424L10.6699 4.25513C9.90801 3.70909 9.00943 3.33325 8 3.33325C6.3815 3.33325 4.95467 4.16481 4.11719 5.42114L3.31641 4.80851C4.33547 3.314 6.05004 2.33325 8 2.33325ZM2.83008 5.69588L3.6569 6.32804C3.45539 6.84888 3.33334 7.40918 3.33334 7.99992C3.33334 8.59066 3.45539 9.15096 3.6569 9.67179L2.83008 10.304C2.51623 9.59914 2.33334 8.82279 2.33334 7.99992C2.33334 7.17704 2.51623 6.40069 2.83008 5.69588ZM8.66667 7.66658H13.6413C13.6491 7.77735 13.6667 7.8898 13.6667 7.99992C13.6667 9.4142 13.1331 10.6893 12.28 11.6809L11.4994 11.0045C11.9269 10.5069 12.2894 9.95334 12.4779 9.30656C12.4996 9.23206 12.5037 9.15353 12.4898 9.07718C12.4759 9.00083 12.4444 8.92876 12.3979 8.86667C12.3513 8.80458 12.291 8.75418 12.2216 8.71945C12.1522 8.68472 12.0756 8.66662 11.998 8.66658H8.66667V7.66658ZM4.11719 10.5787C4.95467 11.835 6.3815 12.6666 8 12.6666C9.05208 12.6666 10.0221 12.3145 10.8034 11.7245L11.5592 12.3801C10.5847 13.1726 9.35741 13.6666 8 13.6666C6.05004 13.6666 4.33547 12.6858 3.31641 11.1913L4.11719 10.5787Z" />
              </svg>
            </Button>
            <Button variant="outline" size="large" fullWidth>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M4.16667 2C2.97602 2 2 2.97602 2 4.16667V11.8333C2 13.024 2.97602 14 4.16667 14H11.8333C13.024 14 14 13.024 14 11.8333V4.16667C14 2.97602 13.024 2 11.8333 2H4.16667ZM4.16667 3H11.8333C12.4834 3 13 3.51665 13 4.16667V11.8333C13 12.4834 12.4834 13 11.8333 13H4.16667C3.51665 13 3 12.4834 3 11.8333V4.16667C3 3.51665 3.51665 3 4.16667 3ZM4.60938 4.66667L7.18815 8.35221L4.60742 11.3333H5.28841L7.48958 8.78385L9.27344 11.3333H11.4193L8.67513 7.41146L11.0456 4.66667H10.3789L8.37435 6.98112L6.75521 4.66667H4.60938ZM5.64518 5.23177H6.49935L10.3835 10.7682H9.5293L5.64518 5.23177Z" />
              </svg>
            </Button>
          </div>
          <Stack className="w-full my-7">
            <Divider variant="secondary" />
            or
            <Divider variant="secondary" />
          </Stack>
        </div>
        <form
          className="text-sm"
          onSubmit={handleSubmit(values => console.log('values', values))}
        >
          <Block className="mb-7">
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="email"
                  disabled={isSubmitting}
                  placeholder="jon@goodcode.us"
                  value={value}
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block className="mb-7">
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="enter password"
                  value={value}
                  type={showPassword ? 'text' : 'password'}
                  onChange={onChange}
                  onBlur={onBlur}
                  endAdornment={
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M7.99999 4.33333C10.5267 4.33333 12.78 5.75333 13.88 8C12.78 10.2467 10.5267 11.6667 7.99999 11.6667C5.47332 11.6667 3.21999 10.2467 2.11999 8C3.21999 5.75333 5.47332 4.33333 7.99999 4.33333ZM7.99999 3C4.66666 3 1.81999 5.07333 0.666656 8C1.81999 10.9267 4.66666 13 7.99999 13C11.3333 13 14.18 10.9267 15.3333 8C14.18 5.07333 11.3333 3 7.99999 3ZM7.99999 6.33333C8.91999 6.33333 9.66666 7.08 9.66666 8C9.66666 8.92 8.91999 9.66667 7.99999 9.66667C7.07999 9.66667 6.33332 8.92 6.33332 8C6.33332 7.08 7.07999 6.33333 7.99999 6.33333ZM7.99999 5C6.34666 5 4.99999 6.34667 4.99999 8C4.99999 9.65333 6.34666 11 7.99999 11C9.65332 11 11 9.65333 11 8C11 6.34667 9.65332 5 7.99999 5Z" />
                      </svg>
                    </Button>
                  }
                />
              )}
            />
          </Block>
          <Block className="mb-1">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="confirmPassword"
                  disabled={isSubmitting}
                  placeholder="re-enter password"
                  value={value}
                  type={showPassword ? 'text' : 'password'}
                  onChange={onChange}
                  onBlur={onBlur}
                  endAdornment={
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M7.99999 4.33333C10.5267 4.33333 12.78 5.75333 13.88 8C12.78 10.2467 10.5267 11.6667 7.99999 11.6667C5.47332 11.6667 3.21999 10.2467 2.11999 8C3.21999 5.75333 5.47332 4.33333 7.99999 4.33333ZM7.99999 3C4.66666 3 1.81999 5.07333 0.666656 8C1.81999 10.9267 4.66666 13 7.99999 13C11.3333 13 14.18 10.9267 15.3333 8C14.18 5.07333 11.3333 3 7.99999 3ZM7.99999 6.33333C8.91999 6.33333 9.66666 7.08 9.66666 8C9.66666 8.92 8.91999 9.66667 7.99999 9.66667C7.07999 9.66667 6.33332 8.92 6.33332 8C6.33332 7.08 7.07999 6.33333 7.99999 6.33333ZM7.99999 5C6.34666 5 4.99999 6.34667 4.99999 8C4.99999 9.65333 6.34666 11 7.99999 11C9.65332 11 11 9.65333 11 8C11 6.34667 9.65332 5 7.99999 5Z" />
                      </svg>
                    </Button>
                  }
                />
              )}
            />
          </Block>
          <div className="text-right">
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              Forgot Password?
            </a>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            className="mt-7 mb-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign up →'}
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
          <Divider className="mt-5 mb-5" variant="secondary" />
          <div className="mt-5 text-panel-secondary-content text-sm flex items-center justify-center gap-2">
            Already have an account?
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              Sign in
            </a>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
