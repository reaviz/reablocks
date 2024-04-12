import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Block } from '../../../src/layout/Block';
import { useForm, Controller } from 'react-hook-form';
import logo from '../../assets/reaviz.svg';
import { motion } from 'framer-motion';
import { Divider } from '../../../src/layout';

export const Register = () => {
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
        <div className="flex flex-col items-center justify-center pt-2 mb-5">
          <img src={logo} alt="Logo" className="h-11 w-auto mb-2" />
          <h4 className="text-2xl font-sans font-bold mb-0">Register</h4>
          <p className="text-base text-panel-secondary-content font-sans text-center">
            Welcome! Let's get started by creating your account. Please provide
            your email address and choose a secure password to begin accessing
            our platform's features.
          </p>
        </div>
        <form
          className="text-sm"
          onSubmit={handleSubmit(values => console.log('values', values))}
        >
          <Block label="Name">
            <Controller
              name="name"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="name"
                  disabled={isSubmitting}
                  placeholder="John Doe"
                  value={value}
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block label="Email">
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
          <Block label="Password">
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="something secret"
                  value={value}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block label="Confirm Password">
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="something secret"
                  value={value}
                  type="password"
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
            className="mt-5 mb-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign up →'}
          </Button>
          <div className="mt-5 text-center text-sm text-panel-secondary-content">
            By signing in, you agree to our
            <Button variant="text" color="primary">
              terms of service
            </Button>
            and
            <Button variant="text" color="primary">
              privacy policy
            </Button>
          </div>
          <Divider className="mt-5 mb-5" variant="secondary" />
          <div className="mt-5 text-center text-panel-secondary-content text-sm">
            Already have an account?
            <Button variant="text" color="primary">
              Sign in
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
