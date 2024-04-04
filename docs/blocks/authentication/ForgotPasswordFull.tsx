import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Block } from '../../../src/layout/Block';
import { useForm, Controller } from 'react-hook-form';
import { Divider } from '../../../src/layout';
import { Stack } from '../../../src/layout/Stack';
import { motion } from 'framer-motion';
import logo from '../../assets/reaviz.svg';

export const ForgotPasswordFull = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <Card
      className="w-full grow p-5"
      contentClassName="w-full grid grid-cols-2"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="h-full w-full flex flex-col items-start p-7"
      >
        <img src={logo} alt="Logo" className="h-11" />
        <div className="w-full grow flex flex-col justify-center pr-14">
          <h4 className="text-2xl font-sans font-bold mb-0">
            Forgot Password?
          </h4>
          <span className="text-base text-[#77778C] font-sans">
            Forgot your password? No worries! Simply enter your email address
            below, and we'll send you instructions on how to reset it.
          </span>
          <form
            className="my-7"
            onSubmit={handleSubmit(values => console.log('values', values))}
          >
            <Block labelClassName="text-sm font-medium mb-1" label="Email">
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
            <Stack direction="column">
              <Button
                type="submit"
                fullWidth
                variant="filled"
                color="primary"
                className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus focus:outline-none transition-colors"
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
              <Divider />
              <a href="#" className="text-blue-ribbon text-lg font-semibold">
                Return to login
              </a>
            </Stack>
          </form>
        </div>
      </motion.div>
      <div className="w-full h-full bg-[url('../docs/assets/bg.png')] bg-cover" />
    </Card>
  );
};
