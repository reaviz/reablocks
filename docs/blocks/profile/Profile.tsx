import { List, ListItem } from '../../../src/layout/List';
import { Stack } from '../../../src/layout/Stack';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Block } from '../../../src/layout/Block';
import { Avatar } from '../../../src/elements/Avatar';

export const Profile = () => {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <Stack className="w-full gap-2 p-4" alignItems="start">
      <aside className="md:w-1/3 lg:w-1/4 ">
        <List>
          <ListItem active onClick={() => null}>Profile</ListItem>
          <ListItem onClick={() => null}>Groups</ListItem>
          <ListItem onClick={() => null}>Roles</ListItem>
          <ListItem onClick={() => null}>About</ListItem>
        </List>
      </aside>
      <div className="w-full md:w-2/3 lg:w-3/4">
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Avatar name="Austin McDaniel" size={64} />
          <br />
          <Stack>
            <Block className="w-full">
              <Controller
                name="firstName"
                control={control}
                render={({ field: { value, onBlur, onChange } }) => (
                  <Input
                    name="firstName"
                    disabled={isSubmitting}
                    placeholder="First Name"
                    value={value}
                    fullWidth
                    type="text"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Block>
            <Block className="w-full">
              <Controller
                name="lastName"
                control={control}
                render={({ field: { value, onBlur, onChange } }) => (
                  <Input
                    name="lastName"
                    disabled={isSubmitting}
                    placeholder="Last Name"
                    value={value}
                    fullWidth
                    type="text"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Block>
          </Stack>
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
              name="company"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="company"
                  disabled={isSubmitting}
                  placeholder="Company"
                  value={value}
                  type="text"
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
            className="mb-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </form>
      </div>
    </Stack>
  );
}
