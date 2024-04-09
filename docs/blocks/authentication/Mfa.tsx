import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Block } from '../../../src/layout/Block';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Divider } from '../../../src/layout';
import logo from '../../assets/reaviz.svg';

export const Mfa = () => {
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
      <Card className="w-full">
        <div className="flex flex-col items-center justify-center pt-2 pb-5 text-center">
          <img src={logo} alt="Logo" className="h-11 w-auto mb-2" />
          <h1 className="mt-2 mb-0 text-2xl font-sans font-bold">
            One Time Password
          </h1>
          <div className="text-panel-secondary-content text-base">
            Please verify your identity using your registered email or phone
            number and follow the prompts to complete the password reset
            process.
          </div>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block>
            <Controller
              name="otp"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="otp"
                  disabled={isSubmitting}
                  value={value}
                  placeholder="Enter your one time password"
                  type="number"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Button
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            className="mt-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </Button>
          <div className="text-center text-panel-secondary-content text-sm mt-5">
            Are you facing any problems with receiving the code?
          </div>
          <Button
            variant="text"
            type="button"
            fullWidth
            color="primary"
            startAdornment={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.1667 5.33335L10.5 8.00002H12.5C12.5 10.2067 10.7067 12 8.50002 12C7.82669 12 7.18669 11.8334 6.63335 11.5334L5.66002 12.5067C6.48002 13.0267 7.45335 13.3334 8.50002 13.3334C11.4467 13.3334 13.8334 10.9467 13.8334 8.00002H15.8334L13.1667 5.33335ZM4.50002 8.00002C4.50002 5.79335 6.29335 4.00002 8.50002 4.00002C9.17335 4.00002 9.81335 4.16669 10.3667 4.46669L11.34 3.49335C10.52 2.97335 9.54669 2.66669 8.50002 2.66669C5.55335 2.66669 3.16669 5.05335 3.16669 8.00002H1.16669L3.83335 10.6667L6.50002 8.00002H4.50002Z" />
              </svg>
            }
          >
            Resend Code
          </Button>
          <Divider variant="gradient" />
          <div className="text-center">
            <span className="text-panel-secondary-content text-sm">
              Remember your password?
            </span>
            <Button variant="text" type="button" color="primary">
              ← Go Back
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
