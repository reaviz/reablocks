import { List, ListItem } from '../../../src/layout/List';
import { Stack } from '../../../src/layout/Stack';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';
import { Block } from '../../../src/layout/Block';
import { Avatar } from '../../../src/elements/Avatar';
import { motion } from 'framer-motion';
import { Card, Divider } from '../../../src/layout';
import logo from '../../assets/reaviz.svg';

export const Profile = () => {
  // const { control, handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[600px]"
    >
      <Card className="w-full p-12">
        <Stack>
          <img src={logo} alt="Logo" className="h-11 w-auto mb-2" />
          <div>
            <h2 className="text-xl font-sans font-bold">Good Code</h2>
            <p className="opacity-60">reablocks.io/goodcode</p>
          </div>
        </Stack>
        <h1 className="mt-10 text-2xl font-sans font-bold">
          Profile Settings
        </h1>
        <p className="opacity-60">Customize and edit essential profile details.</p>
        <Divider />
        <Stack>
          <Stack direction="column" alignItems="start" dense>
            <h3 className="text-1xl font-sans font-bold">Public Profile</h3>
            <p className="opacity-60 text-sm">This will be displayed on your profile.</p>
          </Stack>
          <Stack>
            <Input value="Good Code" />
          </Stack>
        </Stack>
        <Divider />
        <Stack>
          <Stack direction="column" alignItems="start" dense>
            <h3 className="text-1xl font-sans font-bold">Company Logo</h3>
            <p className="opacity-60 text-sm">Min 400 x 400 px, PNG or JPEG formats.</p>
          </Stack>
          <Avatar name="Austin M" size="xl" />
        </Stack>
        <Divider />
        <Stack>
          <Stack direction="column" alignItems="start" dense>
            <h3 className="text-1xl font-sans font-bold">Branding</h3>
            <p className="opacity-60 text-sm">Add your logo to reports and emails.</p>
          </Stack>
        </Stack>
        <Divider />
        <Stack>
          <h3 className="text-1xl font-sans font-bold">Social Profiles</h3>
        </Stack>
      </Card>
    </motion.div>
  );
}
