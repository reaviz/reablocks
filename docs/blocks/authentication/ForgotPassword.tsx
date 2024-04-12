import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { Input } from '../../../src/form/Input';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import logo from '../../assets/reaviz.svg';

export const ForgotPassword = () => {
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
            Reset your password
          </h4>
          <span className="text-base text-panel-secondary-content font-sans">
            Welcome to Reablocks, powered by Good Code
          </span>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block
            className="mb-7"
            labelClassName="text-sm font-medium mb-1"
            label="Email"
          >
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="email"
                  disabled={isSubmitting}
                  placeholder="user@goodcode.us"
                  value={value}
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block
            className="mb-7"
            labelClassName="text-sm font-medium mb-1"
            label="Password"
          >
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="Enter your password..."
                  value={value}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block
            className="mb-7"
            labelClassName="text-sm font-medium mb-1"
            label="Confirm Password"
          >
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="Confirm your password..."
                  value={value}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Divider variant="secondary" />
          <Button
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.33333 4.66667L6.4 5.6L8.13333 7.33333H1.33333V8.66667H8.13333L6.4 10.4L7.33333 11.3333L10.6667 8L7.33333 4.66667ZM13.3333 12.6667H8V14H13.3333C14.0667 14 14.6667 13.4 14.6667 12.6667V3.33333C14.6667 2.6 14.0667 2 13.3333 2H8V3.33333H13.3333V12.6667Z"
                fill="white"
              />
            </svg>
            {isSubmitting ? 'Resetting...' : 'Reset Password'}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};
