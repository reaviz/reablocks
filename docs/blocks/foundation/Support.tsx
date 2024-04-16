import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Block } from '../../../src/layout/Block';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Textarea } from '../../../src/form';

export const Support = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full md:w-[500px]"
    >
      <Card className="w-full">
        <div className="flex flex-col items-center justify-center pt-2 pb-5 text-center">
          <h1 className="mt-2 mb-0 text-2xl font-sans font-bold">
            Report an issue
          </h1>
          <div className="text-panel-secondary-content text-base">
            Found a bug? Please let us know so we can fix it.
          </div>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block label="Title">
            <Controller
              name="title"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="title"
                  disabled={isSubmitting}
                  value={value}
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block label="Version">
            <Controller
              name="version"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="version"
                  disabled={isSubmitting}
                  value={value}
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block label="Description">
            <Controller
              name="description"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Textarea
                  name="description"
                  minRows={5}
                  disabled={isSubmitting}
                  value={value}
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
            className="mt-5 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Report...' : 'Send Report →'}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};
