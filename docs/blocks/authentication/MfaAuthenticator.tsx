import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout';
import { Input } from '../../../src/form/Input';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';

import qrDark from '../../assets/qr-code-dark.svg';
import qrLight from '../../assets/qr-code-light.svg';

export const MfaAuthenticator = () => {
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
        <div className="flex flex-col pt-2 pb-5">
          <h1 className="mb-0 text-2xl font-sans font-bold">
            Set up your two-factor authentication.
          </h1>
          <div className="text-panel-secondary-content">
            Scan this code with your Google authenticator app to continue this
            process.
          </div>
          <div className="self-center mt-4 mb-6">
            <img src={qrDark} className="light:hidden" />
            <img src={qrLight} className="dark:hidden" />
          </div>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block label="Verification code">
            <Controller
              name="pin"
              control={control}
              render={({ field: { value, ...rest } }) => (
                <div className="grid grid-cols-7 items-center gap-4 mt-2">
                  {['', '', '', '', '', ''].map((value, idx) => (
                    <>
                      {idx === 3 && <Divider variant="secondary" />}
                      <Input
                        {...rest}
                        disabled={isSubmitting}
                        value={value}
                        className="text-center min-w-0"
                      />
                    </>
                  ))}
                </div>
              )}
            />
          </Block>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg hover:border-secondary-hover focus:border-secondary-hover focus:outline-none transition-colors"
              disabled={isSubmitting}
              fullWidth
            >
              Discard
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="filled"
              color="primary"
              className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Confirming...' : 'Confirm'}
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
