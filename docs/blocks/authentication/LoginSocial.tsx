import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout/Divider';
import { Input } from '../../../src/form/Input';
import { Stack } from '../../../src/layout/Stack';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/reaviz.svg';

export const LoginSocial = () => {
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
            Log In or create account
          </h4>
          <span className="text-base text-panel-secondary-content font-sans">
            Welcome to Reablocks, powered by Good Code
          </span>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block label="Email" className="mb-5">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="user@goodcode.us"
                  disabled={isSubmitting}
                />
              )}
            />
          </Block>
          <Button
            type="submit"
            variant="filled"
            color="primary"
            disabled={isSubmitting}
            className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#fff"
                    d="M7.833 4.667 6.9 5.6l1.733 1.733h-6.8v1.334h6.8L6.9 10.4l.933.933L11.167 8 7.833 4.667Zm6 8H8.5V14h5.333c.734 0 1.334-.6 1.334-1.333V3.333c0-.733-.6-1.333-1.334-1.333H8.5v1.333h5.333v9.334Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.5 0h16v16H.5z" />
                  </clipPath>
                </defs>
              </svg>
            }
            fullWidth
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
          <Stack className="my-7">
            <Divider variant="secondary" />
            <span className="whitespace-nowrap text-sm dark:text-waterloo light:text-charade">
              or with
            </span>
            <Divider variant="secondary" />
          </Stack>
          <div className="flex flex-col w-full gap-4">
            <Button
              variant="outline"
              startAdornment={
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16">
                  <g clip-path="url(#a)">
                    <path
                      fill="currentColor"
                      d="M8.5 1.333A6.674 6.674 0 0 0 1.833 8 6.674 6.674 0 0 0 8.5 14.667 6.674 6.674 0 0 0 15.167 8c0-.314-.028-.613-.067-.9a.5.5 0 0 0-.496-.433H8.667a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3.046c-.609 1.174-1.794 2-3.213 2A3.659 3.659 0 0 1 4.833 8a3.659 3.659 0 0 1 6.088-2.744.5.5 0 0 0 .684-.022L13.02 3.82a.5.5 0 0 0-.015-.721A6.627 6.627 0 0 0 8.5 1.333Zm0 1c1.292 0 2.46.452 3.412 1.181l-.742.741c-.762-.546-1.66-.922-2.67-.922a4.664 4.664 0 0 0-3.883 2.088l-.8-.612A5.654 5.654 0 0 1 8.5 2.333ZM3.33 5.696l.827.632A4.617 4.617 0 0 0 3.833 8c0 .59.122 1.151.324 1.672l-.827.632A5.644 5.644 0 0 1 2.833 8c0-.823.183-1.6.497-2.304Zm5.837 1.97h4.974c.008.111.026.224.026.334 0 1.414-.534 2.69-1.387 3.681l-.78-.676c.427-.498.79-1.052.978-1.698a.5.5 0 0 0-.48-.64H9.167v-1Zm-4.55 2.913A4.664 4.664 0 0 0 8.5 12.667a4.636 4.636 0 0 0 2.803-.942l.756.655c-.974.793-2.202 1.287-3.559 1.287-1.95 0-3.665-.981-4.684-2.476l.801-.612Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.5 0h16v16H.5z" />
                    </clipPath>
                  </defs>
                </svg>
              }
              fullWidth
            >
              Sign in with Google
            </Button>
            <Button
              variant="outline"
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M3.83333 2C2.82674 2 2 2.82674 2 3.83333V12.1667C2 13.1733 2.82674 14 3.83333 14H12.1667C13.1733 14 14 13.1733 14 12.1667V3.83333C14 2.82674 13.1733 2 12.1667 2H3.83333ZM3.83333 3H12.1667C12.6327 3 13 3.36726 13 3.83333V12.1667C13 12.6327 12.6327 13 12.1667 13H10V9.66667H11.2083C11.3763 9.66667 11.5184 9.54102 11.5391 9.37435L11.6641 8.37435C11.6761 8.27968 11.646 8.18463 11.5827 8.11263C11.5197 8.04096 11.429 8 11.3333 8H10V6.83333C10 6.46567 10.299 6.16667 10.6667 6.16667H11.3333C11.5173 6.16667 11.6667 6.01767 11.6667 5.83333V4.70833C11.6667 4.53567 11.5349 4.39164 11.3633 4.3763C11.3436 4.37464 10.8733 4.33333 10.278 4.33333C8.80899 4.33333 8 5.2054 8 6.78906V8H6.66667C6.48267 8 6.33333 8.149 6.33333 8.33333V9.33333C6.33333 9.51767 6.48267 9.66667 6.66667 9.66667H8V13H3.83333C3.36726 13 3 12.6327 3 12.1667V3.83333C3 3.36726 3.36726 3 3.83333 3Z" />
                </svg>
              }
              fullWidth
            >
              Sign up with Facebook
            </Button>
            <Button
              variant="outline"
              startAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="currentColor"
                >
                  <path d="M9.75977 1.01822C9.53638 1.03106 9.31524 1.07809 9.10417 1.15949V1.16015L3.46029 3.33788C2.8832 3.56033 2.5 4.11918 2.5 4.73762V11.8333C2.50016 11.8377 2.50038 11.842 2.50065 11.8463C2.50085 11.8485 2.50107 11.8507 2.5013 11.8529C2.50179 11.867 2.50287 11.8811 2.50456 11.8952C2.50475 11.898 2.50497 11.9008 2.50521 11.9036C2.50738 11.9183 2.51021 11.9328 2.51367 11.9473C2.51727 11.9629 2.52161 11.9783 2.52669 11.9935C2.52796 11.997 2.52926 12.0004 2.5306 12.0039C2.53418 12.014 2.53809 12.024 2.54232 12.0338C2.54602 12.0418 2.54993 12.0496 2.55404 12.0573C2.55795 12.0652 2.56208 12.073 2.56641 12.0807C2.56936 12.0858 2.5724 12.0908 2.57552 12.0957C2.58127 12.1054 2.58735 12.115 2.59375 12.1243C2.59714 12.129 2.60062 12.1335 2.60417 12.138C2.61043 12.1462 2.61694 12.1543 2.6237 12.1621C2.62795 12.167 2.63229 12.1717 2.63672 12.1764C2.64346 12.1836 2.6504 12.1905 2.65755 12.1973C2.66392 12.2031 2.67043 12.2087 2.67708 12.2142C2.68283 12.2193 2.68869 12.2243 2.69466 12.2292C2.70355 12.236 2.71267 12.2425 2.72201 12.2487C2.72545 12.2509 2.72892 12.2531 2.73242 12.2552C2.7451 12.2632 2.75814 12.2705 2.77148 12.2773C2.77257 12.278 2.77365 12.2786 2.77474 12.2793C2.78708 12.2857 2.79967 12.2915 2.8125 12.2969C2.81466 12.2977 2.81683 12.2986 2.81901 12.2995L9.07552 14.834C9.50035 15.0059 9.96882 15.0393 10.4134 14.9284L13.0384 14.2734H13.0391C13.7043 14.1071 14.1758 13.5038 14.1758 12.8177V3.21614C14.1758 2.53516 13.7112 1.93519 13.0521 1.76431V1.76366L10.4284 1.08397H10.4277C10.2086 1.02709 9.98294 1.00539 9.75977 1.01822ZM9.81706 2.01692C9.93714 2.00998 10.0585 2.02142 10.1764 2.05207H10.1771L12.8014 2.73176C13.0243 2.78954 13.1758 2.98578 13.1758 3.21614V12.8177C13.1758 13.0496 13.0216 13.247 12.7962 13.3034L10.1719 13.9577C9.93247 14.0174 9.68034 13.9996 9.45117 13.9069V13.9075L6.41406 12.6771L9.61719 12.9974C9.68666 13.0043 9.75682 12.9966 9.82313 12.9747C9.88944 12.9529 9.95044 12.9174 10.0022 12.8705C10.054 12.8237 10.0953 12.7665 10.1237 12.7027C10.152 12.6388 10.1666 12.5698 10.1667 12.5V3.83332C10.1667 3.75541 10.1485 3.67857 10.1135 3.60894C10.0786 3.5393 10.0278 3.4788 9.96535 3.43226C9.90286 3.38571 9.83037 3.35441 9.75364 3.34085C9.67692 3.32729 9.59809 3.33185 9.52344 3.35416L5.66536 4.5091C5.17361 4.65625 4.83333 5.11376 4.83333 5.62694V10.5039L3.5 11.0749V4.73762C3.5 4.52939 3.62541 4.34635 3.81966 4.27147L3.82031 4.27082L9.46419 2.09309C9.57812 2.04915 9.69697 2.02385 9.81706 2.01692ZM9.16667 4.5052V11.9479L4.97982 11.5293L5.5306 11.293C5.62049 11.2544 5.69708 11.1902 5.75089 11.1085C5.8047 11.0268 5.83336 10.9312 5.83333 10.8333V5.62694C5.83333 5.55098 5.8792 5.48848 5.95182 5.46679H5.95247L9.16667 4.5052Z" />
                </svg>
              }
              fullWidth
            >
              Sign up with Microsoft
            </Button>
          </div>
          <div className="mt-5 text-sm text-panel-secondary-content flex items-center justify-center gap-2">
            By signing in, you agree to our
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              terms of service
            </a>
            and
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              privacy policy
            </a>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
