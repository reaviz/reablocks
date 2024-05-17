import React from 'react';
import { motion } from 'framer-motion';

import { Radio } from '../../../src/form/Radio';
import { Button } from '../../../src/elements/Button';
import { Card, Divider, Stack } from '../../../src/layout';
import { Input } from '../../../src/form/Input';
import { Avatar } from '../../../src/elements/Avatar';

const LogoIcon = ({ className }) => (
  <svg
    width="260"
    height="341"
    viewBox="0 0 260 341"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M260 341L184.393 212.394C223.901 194.37 250.261 155.399 250.261 113.017C250.261 81.84 239.039 55.0472 217.083 33.1257C195.127 11.2043 168.301 0 136.585 0H0V62.8413H136.585C161.95 62.8413 182.932 85.25 182.932 113.017C182.932 140.784 161.95 163.68 136.585 163.68H81.0277V163.734H0V341H67.329V222.624H118.546L187.314 341H260Z"
      fill="url(#paint0_linear_1_129)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_129"
        x1="294.975"
        y1="233.607"
        x2="-46.0838"
        y2="159.958"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1352FF" />
        <stop offset="0.354721" stop-color="#009BFF" />
        <stop offset="0.62382" stop-color="#105EFF" />
        <stop offset="1" stop-color="#090E43" />
      </linearGradient>
    </defs>
  </svg>
);

export default {
  title: 'Blocks/Administration/Profile'
};

export const Profile = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[800px]"
  >
    <Card className="w-full p-12">
      <Stack>
        <LogoIcon className="h-11 w-auto mb-2 mr-2" />
        <div>
          <h2 className="text-xl font-sans font-bold">Reablocks</h2>
          <p className="opacity-60">github.com/reaviz</p>
        </div>
      </Stack>
      <h1 className="mt-5 text-2xl font-sans font-bold">Profile Settings</h1>
      <p className="opacity-60">
        Customize and edit essential profile details.
      </p>
      <Divider />
      <div className="grid grid-cols-2 gap-4">
        <Stack direction="column" alignItems="start" dense>
          <h3 className="text-1xl font-sans font-bold">Public Profile</h3>
          <p className="opacity-60 text-sm">
            This will be displayed on your profile.
          </p>
        </Stack>
        <Stack>
          <Input
            value="reablocks"
            fullWidth
            endAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
              >
                <path
                  fill="#55BE24"
                  d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.667 5.34 5.34 0 0 1 12.333 7 5.34 5.34 0 0 1 7 12.333Zm3.06-8.28L5.667 8.447 3.94 6.727l-.94.94 2.667 2.666L11 5l-.94-.947Z"
                />
              </svg>
            }
          />
        </Stack>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-4">
        <Stack direction="column" alignItems="start" dense>
          <h3 className="text-1xl font-sans font-bold">Company Logo</h3>
          <p className="opacity-60 text-sm">
            Min 400 x 400 px, PNG or JPEG formats.
          </p>
        </Stack>
        <Stack justifyContent="end">
          <div className="p-2 flex h-full items-center rounded ">
            <Avatar className="h-10 w-10" name="Austin M" size={50} />
          </div>
          <div className="border w-full border-dotted rounded text-sm opacity-75 text-center p-2 border-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              className="mx-auto"
            >
              <path
                fill="#C9C9D6"
                d="M14.063 4.125a5.77 5.77 0 0 0-4.9 2.694 3.87 3.87 0 0 0-.726-.069c-1.946 0-3.59 1.449-3.886 3.326a4.32 4.32 0 0 0-2.676 3.986c0 2.327 1.844 4.258 4.11 4.304.758.015 11.655.015 12.405 0 2.06-.042 3.735-1.804 3.735-3.928 0-1.58-.926-2.968-2.323-3.59a5.819 5.819 0 0 0-5.74-6.722Zm0 1.5a4.317 4.317 0 0 1 4.312 4.313c0 .397-.058.798-.171 1.194a.747.747 0 0 0 .547.937 2.426 2.426 0 0 1 1.874 2.368c0 1.314-1.016 2.403-2.265 2.429-.688.014-11.649.014-12.345 0-1.456-.03-2.64-1.287-2.64-2.803 0-1.265.852-2.38 2.074-2.711a.75.75 0 0 0 .554-.71A2.448 2.448 0 0 1 8.437 8.25c.28 0 .56.05.834.15a.75.75 0 0 0 .93-.371 4.288 4.288 0 0 1 3.861-2.404ZM12.4 9.375a.444.444 0 0 0-.325.166l-1.494 1.831a.369.369 0 0 0-.033.413.427.427 0 0 0 .376.215h.701v3a.75.75 0 0 0 1.5 0v-3h.705c.165 0 .315-.09.384-.23.07-.142.034-.3-.063-.425L12.74 9.513c-.076-.099-.21-.143-.34-.137Z"
              />
            </svg>
            Drag and drop or{' '}
            <Button variant="text" size="small" color="primary" disablePadding>
              Click to upload
            </Button>
          </div>
        </Stack>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-4">
        <Stack direction="column" alignItems="start" dense>
          <h3 className="text-1xl font-sans font-bold">Branding</h3>
          <p className="opacity-60 text-sm">
            Add your logo to reports and emails.
          </p>
        </Stack>
        <Stack direction="column" alignItems="start">
          <Radio
            size="small"
            label={
              <span className="text-sm">
                <strong>Reports:</strong> Include my logo in summary reports.
              </span>
            }
          />
          <Radio
            size="small"
            label={
              <span className="text-sm">
                <strong>Emails:</strong> Include my logo in customer emails.
              </span>
            }
          />
        </Stack>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-4">
        <h3 className="text-1xl font-sans font-bold">Social Profiles</h3>
        <Stack justifyContent="end" direction="column">
          <Input fullWidth value="reaviz" startAdornment="twitter.com/" />
          <Input
            fullWidth
            value="goodcodeus"
            startAdornment="linkedin.com/in/"
          />
          <Input fullWidth value="goodcodeus" startAdornment="dribbble.com/" />
        </Stack>
      </div>
    </Card>
  </motion.div>
);
