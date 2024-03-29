import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Block } from '../../../src/layout/Block';
import { useForm, Controller } from 'react-hook-form';
import logo from '../../assets/reaviz.svg';
import { motion } from 'framer-motion';

export const ForgotPassword = () => {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <Card className="w-full">
        <div className="flex items-center justify-center pt-2 pb-5">
          <img src={logo} alt="Logo" className="h-12 w-12" />
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block>
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="email"
                  disabled={isSubmitting}
                  placeholder="Email"
                  value={value}
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="Password"
                  value={value}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="Confirm Password"
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
            className="mt-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Resetting...' : 'Reset Password'}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}
