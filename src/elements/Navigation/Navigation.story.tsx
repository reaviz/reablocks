import { NavigationTheme } from '@/elements';
import { NavigationButton } from '@/elements/Navigation/NavigationButton';
import { extendComponentTheme, useComponentTheme } from '@/utils';
import { useId, useState } from 'react';
import { NavigationBar } from './NavigationBar';

export default {
  title: 'Components/Elements/Navigation',
  component: NavigationBar
};

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="24"
    viewBox="0 0 18 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.6183 0L0.600098 11.9049L17.6183 24V13.0064L13.7985 10.545L11.6487 12L15.2263 14.3273V19.3114L4.80132 11.9049L17.6183 2.94899V0Z"
      fill="url(#paint0_linear_15406_151)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.6183 3.87683L6.22632 11.9115L14.4144 17.723V14.7166L10.28 12.0324L17.6183 6.85734V3.87683Z"
      fill="url(#paint1_linear_15406_151)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_15406_151"
        x1="19.3201"
        y1="5.95"
        x2="7.17212"
        y2="20.1628"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#105EFF" />
        <stop offset="0.413357" stop-color="#009BFF" />
        <stop offset="0.735652" stop-color="#105EFF" />
        <stop offset="1" stop-color="#090E43" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_15406_151"
        x1="7.99722"
        y1="15.9999"
        x2="19.0092"
        y2="4.215"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#105EFF" />
        <stop offset="0.413357" stop-color="#009BFF" />
        <stop offset="0.735652" stop-color="#105EFF" />
        <stop offset="1" stop-color="#090E43" />
      </linearGradient>
    </defs>
  </svg>
);

const companyName = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="112"
    height="12"
    viewBox="0 0 112 12"
    fill="none"
  >
    <path
      d="M21.3063 0.109131C24.5605 0.109131 27.1985 2.74658 27.1985 6.00004C27.1985 9.2535 24.5605 11.8909 21.3063 11.8909C18.0521 11.8909 15.4141 9.2535 15.4141 6.00004C15.4141 2.74658 18.0521 0.109131 21.3063 0.109131ZM21.3063 2.00942C19.1019 2.00942 17.3148 3.79608 17.3148 6.00004C17.3148 8.204 19.1019 9.99066 21.3063 9.99066C23.5107 9.99066 25.2978 8.204 25.2978 6.00004C25.2978 3.79608 23.5107 2.00942 21.3063 2.00942ZM36.7021 0.109131C39.9563 0.109131 42.5943 2.74658 42.5943 6.00004C42.5943 9.2535 39.9563 11.8909 36.7021 11.8909C33.4479 11.8909 30.8099 9.2535 30.8099 6.00004C30.8099 2.74658 33.4479 0.109131 36.7021 0.109131ZM36.7021 2.00942C34.4976 2.00942 32.7106 3.79608 32.7106 6.00004C32.7106 8.204 34.4976 9.99066 36.7021 9.99066C38.9065 9.99066 40.6936 8.204 40.6936 6.00004C40.6936 3.79608 38.9065 2.00942 36.7021 2.00942ZM80.0384 0.109131C83.2925 0.109131 85.9306 2.74658 85.9306 6.00004C85.9306 9.2535 83.2925 11.8909 80.0384 11.8909C76.7842 11.8909 74.1462 9.2535 74.1462 6.00004C74.1462 2.74658 76.7842 0.109131 80.0384 0.109131ZM80.0384 2.00942C77.8339 2.00942 76.0469 3.79608 76.0469 6.00004C76.0469 8.204 77.8339 9.99066 80.0384 9.99066C82.2428 9.99066 84.0299 8.204 84.0299 6.00004C84.0299 3.79608 82.2428 2.00942 80.0384 2.00942ZM65.591 0.109131C67.6033 0.109131 69.4435 1.1271 70.524 2.7798L68.9337 3.81973C68.2006 2.69834 66.9552 2.00942 65.591 2.00942C63.3873 2.00942 61.6008 3.79608 61.6008 6.00004C61.6008 8.204 63.3873 9.99066 65.591 9.99066C66.9599 9.99066 68.2091 9.29691 68.941 8.16916L70.5348 9.20378C69.4561 10.8659 67.6103 11.8909 65.591 11.8909C62.3379 11.8909 59.7007 9.2535 59.7007 6.00004C59.7007 2.74658 62.3379 0.109131 65.591 0.109131ZM50.1972 0.29916C53.4432 0.29916 56.0894 2.84301 56.0894 6.00004C56.0894 9.15707 53.4432 11.7009 50.1972 11.7009H46.2057V9.80063H50.1972C52.4098 9.80063 54.1887 8.09053 54.1887 6.00004C54.1887 3.90955 52.4098 2.19945 50.1972 2.19945H46.2057V0.29916H50.1972ZM93.5334 0.29916C96.7794 0.29916 99.4256 2.84301 99.4256 6.00004C99.4256 9.15707 96.7794 11.7009 93.5334 11.7009H89.5419V9.80063H93.5334C95.746 9.80063 97.5249 8.09053 97.5249 6.00004C97.5249 3.90955 95.746 2.19945 93.5334 2.19945H89.5419V0.29916H93.5334ZM5.91052 0.109131C7.94911 0.109131 9.81018 1.15331 10.8843 2.8405L9.28083 3.86087C8.55206 2.71615 7.29246 2.00942 5.91052 2.00942C3.70608 2.00942 1.91902 3.79608 1.91902 6.00004C1.91902 8.204 3.70608 9.99066 5.91052 9.99066C7.61244 9.99066 9.06557 8.92497 9.63965 7.42526H5.69234V5.52505H11.7837L11.8027 6.00004C11.8027 9.2535 9.1647 11.8909 5.91052 11.8909C2.65634 11.8909 0.0183105 9.2535 0.0183105 6.00004C0.0183105 2.74658 2.65634 0.109131 5.91052 0.109131ZM103.037 2.19945H111.4V0.29916H103.037V2.19945ZM103.037 11.7009H111.4V9.80063H103.037V11.7009ZM103.037 6.95019H111.4V5.04989H103.037V6.95019Z"
      fill="#E1E2E3"
    />
  </svg>
);

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M9 1C5.14 1 2 4.14 2 8V16.25C2 16.664 2.336 17 2.75 17C3.955 17 4.583 16.424 5.042 16.003C5.422 15.654 5.607 15.5 6 15.5C6.416 15.5 6.617 15.677 6.996 16.044C7.412 16.447 7.981 17 9 17C10.019 17 10.588 16.448 11.004 16.044C11.383 15.676 11.584 15.5 12 15.5C12.394 15.5 12.579 15.654 12.958 16.003C13.416 16.423 14.044 17 15.25 17C15.664 17 16 16.664 16 16.25V8C16 4.14 12.86 1 9 1ZM8.087 9.264C7.46 9.827 6.519 9.952 5.75 9.508C4.981 9.064 4.618 8.186 4.793 7.362C4.86 7.045 5.243 6.906 5.524 7.069L7.976 8.485C8.257 8.647 8.329 9.048 8.087 9.265V9.264ZM12.25 9.508C11.481 9.952 10.539 9.827 9.913 9.264C9.672 9.047 9.743 8.646 10.024 8.484L12.476 7.068C12.757 6.906 13.14 7.044 13.207 7.361C13.382 8.185 13.019 9.063 12.25 9.507V9.508Z"
      fill="currentColor"
      fill-opacity="0.8"
    />
  </svg>
);

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M5.30176 8.47441C5.52876 7.90241 6.47027 7.90241 6.69727 8.47441L7.49902 10.5008L9.52539 11.3025C9.81225 11.4156 9.99897 11.6929 9.99902 11.9998C9.99902 12.3067 9.81025 12.584 9.52441 12.6971L7.49805 13.4988L6.69629 15.5262C6.58326 15.8121 6.30598 15.9998 5.99902 15.9998C5.69206 15.9998 5.41479 15.8121 5.30176 15.5262L4.5 13.4988L2.47363 12.6971C2.1868 12.584 1.99902 12.3067 1.99902 11.9998C1.99908 11.6929 2.18779 11.4156 2.47363 11.3025L4.5 10.5008L5.30176 8.47441ZM13.0254 11.3416C13.1627 10.9341 13.8364 10.9342 13.9736 11.3416L14.3955 12.6053L15.6582 13.0262H15.6592C15.863 13.0942 16.0009 13.2849 16.001 13.4998C16.001 13.7148 15.8632 13.9064 15.6592 13.9744L14.3965 14.3953L13.9746 15.658C13.9056 15.8619 13.7149 15.9998 13.5 15.9998C13.2851 15.9998 13.0934 15.8619 13.0254 15.658L12.6045 14.3953L11.3408 13.9744C11.1368 13.9064 10.999 13.7148 10.999 13.4998C10.9991 13.2849 11.137 13.0942 11.3408 13.0262L12.6045 12.6053L13.0254 11.3416ZM11.3018 2.47441C11.5288 1.90241 12.4703 1.90241 12.6973 2.47441L13.499 4.50077L15.5254 5.30253C15.8122 5.41556 15.999 5.69292 15.999 5.9998C15.999 6.30669 15.8103 6.58399 15.5244 6.69706L13.498 7.49882L12.6963 9.52616C12.5833 9.8121 12.306 9.9998 11.999 9.9998C11.6921 9.9998 11.4148 9.8121 11.3018 9.52616L10.5 7.49882L8.47363 6.69706C8.1868 6.58399 7.99902 6.30669 7.99902 5.9998C7.99908 5.69292 8.18779 5.41557 8.47363 5.30253L10.5 4.50077L11.3018 2.47441ZM4.02734 2.34159C4.16461 1.93415 4.83831 1.93415 4.97559 2.34159L5.39746 3.60527L6.66016 4.02616C6.86399 4.09422 7.0019 4.28493 7.00195 4.4998C7.00195 4.71479 6.86415 4.9064 6.66016 4.97441L5.39746 5.39531L4.97559 6.658C4.90653 6.8619 4.71591 6.9998 4.50098 6.9998C4.28604 6.9998 4.09442 6.8619 4.02637 6.658L3.60449 5.39531L2.3418 4.97441C2.13781 4.9064 2.00098 4.71479 2.00098 4.4998C2.00103 4.28494 2.13895 4.09422 2.34277 4.02616L3.60645 3.60527L4.02734 2.34159Z"
      fill="currentColor"
      fill-opacity="0.8"
    />
  </svg>
);

const AlertsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M14.25 1.5H3.75C2.233 1.5 1 2.733 1 4.25V11.25C1 12.767 2.233 14 3.75 14H5V16.25C5 16.538 5.165 16.801 5.425 16.926C5.528 16.976 5.639 17 5.75 17C5.917 17 6.083 16.944 6.219 16.835L9.763 14H14.25C15.767 14 17 12.767 17 11.25V4.25C17 2.733 15.767 1.5 14.25 1.5Z"
      fill="currentColor"
      fill-opacity="0.8"
    />
  </svg>
);

const IntelligenceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.939 3.52795L11.794 3.14595C11.609 3.08395 11.484 2.91095 11.484 2.71595C11.484 2.52095 11.609 2.34795 11.794 2.28595L12.939 1.90395L13.321 0.758945C13.444 0.388945 14.057 0.388945 14.181 0.758945L14.563 1.90395L15.708 2.28595C15.893 2.34795 16.018 2.52095 16.018 2.71595C16.018 2.91095 15.893 3.08395 15.708 3.14595L14.563 3.52795L14.181 4.67295C14.119 4.85794 13.946 4.98294 13.751 4.98294C13.556 4.98294 13.383 4.85794 13.321 4.67295L12.939 3.52795ZM6.43899 3.95894C6.32199 3.68094 6.04899 3.49994 5.74799 3.49994H5.56999C5.26799 3.49994 4.99499 3.68094 4.87899 3.95894L1.30899 12.4589C1.14799 12.8409 1.32799 13.2809 1.70999 13.4409C2.09199 13.6019 2.53099 13.4209 2.69199 13.0399L3.33899 11.4989H7.97999L8.62699 13.0399C8.74799 13.3269 9.02599 13.4989 9.31899 13.4989C9.41599 13.4989 9.51399 13.4799 9.60899 13.4399C9.99099 13.2799 10.171 12.8399 10.01 12.4579L6.43899 3.95894ZM3.96799 9.99994L5.65899 5.97494L7.34999 9.99994H3.96899H3.96799ZM16 11.9999H14.5V7.24994C14.5 6.83594 14.164 6.49994 13.75 6.49994H11.75C11.336 6.49994 11 6.83594 11 7.24994C11 7.66394 11.336 7.99994 11.75 7.99994H13V11.9999H11.75C11.336 11.9999 11 12.3359 11 12.7499C11 13.1639 11.336 13.4999 11.75 13.4999H16C16.414 13.4999 16.75 13.1639 16.75 12.7499C16.75 12.3359 16.414 11.9999 16 11.9999Z"
      fill="currentColor"
      fill-opacity="0.8"
    />
  </svg>
);

const ReportsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M4.25 6H8.25V1.25C8.25 0.836 8.586 0.5 9 0.5C9.414 0.5 9.75 0.836 9.75 1.25V6H8.25195V10.9395L6.53223 9.21875C6.23923 8.92576 5.7637 8.92575 5.4707 9.21875C5.17773 9.51175 5.17772 9.98728 5.4707 10.2803L8.4707 13.2803C8.6167 13.4273 8.80898 13.5 9.00098 13.5C9.19297 13.5 9.38525 13.4263 9.53125 13.2803L12.5312 10.2803C12.8243 9.98727 12.8243 9.51175 12.5312 9.21875C12.2382 8.92575 11.7627 8.92575 11.4697 9.21875L9.75 10.9395V6H13.75C15.267 6 16.5 7.233 16.5 8.75V13.75C16.5 15.267 15.267 16.5 13.75 16.5H4.25C2.733 16.5 1.5 15.267 1.5 13.75V8.75C1.5 7.233 2.733 6 4.25 6Z"
      fill="currentColor"
      fill-opacity="0.8"
    />
  </svg>
);

const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1ZM8.791 13.567C8.239 13.567 7.791 13.118 7.791 12.567C7.791 12.016 8.239 11.567 8.791 11.567C9.343 11.567 9.791 12.016 9.791 12.567C9.791 13.118 9.343 13.567 8.791 13.567ZM10.32 9.215C9.863 9.534 9.64 9.706 9.565 10.13C9.502 10.494 9.185 10.75 8.828 10.75C8.785 10.75 8.741 10.747 8.697 10.739C8.289 10.667 8.016 10.279 8.089 9.87C8.275 8.813 8.961 8.334 9.463 7.984C9.99 7.616 10.173 7.462 10.173 6.935C10.173 6.098 9.475 5.877 9.106 5.877C8.692 5.877 7.949 6.007 7.629 6.877C7.486 7.266 7.058 7.465 6.666 7.323C6.277 7.18 6.078 6.749 6.221 6.361C6.677 5.119 7.755 4.377 9.106 4.377C10.35 4.377 11.673 5.273 11.673 6.935C11.673 8.272 10.892 8.817 10.32 9.215Z"
      fill="#E1E2E3"
      fill-opacity="0.8"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M16.5851 7.57902L15.7461 7.16002C15.5891 6.58402 15.3621 6.03802 15.0711 5.53102L15.3681 4.64102C15.4581 4.37102 15.3881 4.07402 15.1871 3.87302L14.1261 2.81202C13.9241 2.61002 13.6261 2.54102 13.3581 2.63102L12.4681 2.92802C11.9611 2.63702 11.4151 2.41102 10.8391 2.25302L10.4191 1.41402C10.2921 1.16002 10.0321 0.999023 9.74809 0.999023H8.24809C7.96409 0.999023 7.70409 1.16002 7.57709 1.41402L7.15709 2.25302C6.58109 2.41002 6.03509 2.63702 5.52809 2.92802L4.63809 2.63102C4.36809 2.54102 4.07209 2.61002 3.87009 2.81202L2.80909 3.87302C2.60809 4.07402 2.53809 4.37102 2.62809 4.64102L2.92509 5.53102C2.63409 6.03802 2.40809 6.58402 2.25009 7.16002L1.41109 7.57902C1.15709 7.70602 0.996094 7.96602 0.996094 8.25002V9.75002C0.996094 10.034 1.15709 10.294 1.41109 10.421L2.25009 10.84C2.40709 11.416 2.63409 11.962 2.92509 12.469L2.62809 13.359C2.53809 13.629 2.60809 13.926 2.80909 14.127L3.87009 15.188C4.01309 15.331 4.20409 15.408 4.40009 15.408C4.48009 15.408 4.56009 15.395 4.63709 15.369L5.52709 15.072C6.03409 15.363 6.58009 15.589 7.15609 15.747L7.57609 16.586C7.70309 16.84 7.96309 17.001 8.24709 17.001H9.74709C10.0311 17.001 10.2911 16.84 10.4181 16.586L10.8381 15.747C11.4141 15.59 11.9601 15.363 12.4671 15.072L13.3571 15.369C13.4351 15.395 13.5151 15.408 13.5941 15.408C13.7901 15.408 13.9811 15.331 14.1241 15.188L15.1851 14.127C15.3861 13.926 15.4561 13.629 15.3661 13.359L15.0691 12.469C15.3601 11.962 15.5861 11.416 15.7441 10.84L16.5831 10.421C16.8371 10.294 16.9981 10.034 16.9981 9.75002V8.25002C16.9981 7.96602 16.8371 7.70602 16.5831 7.57902H16.5851ZM9.00009 14.5C5.96709 14.5 3.50009 12.033 3.50009 9.00002C3.50009 5.96702 5.96709 3.50002 9.00009 3.50002C12.0331 3.50002 14.5001 5.96702 14.5001 9.00002C14.5001 12.033 12.0331 14.5 9.00009 14.5Z"
      fill="#E1E2E3"
      fill-opacity="0.8"
    />
  </svg>
);

export const Text = () => {
  const [active, setActive] = useState<number>(1);
  const id = useId();

  return (
    <NavigationBar
      className="h-[600px]"
      start={
        <div className="flex gap-2 items-center">
          {logo}
          {companyName}
        </div>
      }
      end={
        <div className="flex flex-col gap-2">
          <NavigationButton
            animationLayoutId={id}
            active={active === 6}
            onClick={() => setActive(6)}
          >
            <div className="flex items-center gap-2">
              <HelpIcon />
              <span>Help</span>
            </div>
          </NavigationButton>
          <NavigationButton
            animationLayoutId={id}
            active={active === 7}
            onClick={() => setActive(7)}
          >
            <div className="flex items-center gap-2">
              <SettingsIcon />
              <span>Settings</span>
            </div>
          </NavigationButton>
        </div>
      }
    >
      <NavigationButton
        animationLayoutId={id}
        active={active === 1}
        onClick={() => setActive(1)}
      >
        <div className="flex items-center gap-2">
          <HomeIcon />
          <span>Home</span>
        </div>
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        active={active === 2}
        onClick={() => setActive(2)}
      >
        <div className="flex items-center gap-2">
          <DashboardIcon />
          <span>Dashboard</span>
        </div>
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        active={active === 3}
        onClick={() => setActive(3)}
      >
        <div className="flex items-center gap-2">
          <AlertsIcon />
          <span>Alerts</span>
        </div>
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        active={active === 4}
        onClick={() => setActive(4)}
      >
        <div className="flex items-center gap-2">
          <IntelligenceIcon />
          <span>Intelligence</span>
        </div>
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        disabled
        active={active === 5}
        onClick={() => setActive(5)}
      >
        <div className="flex items-center gap-2">
          <ReportsIcon />
          <span>Reports</span>
        </div>
      </NavigationButton>
    </NavigationBar>
  );
};

export const Icons = () => {
  const [active, setActive] = useState<number>(1);
  const id = useId();

  return (
    <NavigationBar
      className="h-[600px]"
      start={<div className="px-4">{logo}</div>}
      end={
        <div className="flex flex-col gap-2">
          <NavigationButton
            animationLayoutId={id}
            active={active === 6}
            onClick={() => setActive(6)}
          >
            <HelpIcon />
          </NavigationButton>
          <NavigationButton
            animationLayoutId={id}
            active={active === 7}
            onClick={() => setActive(7)}
          >
            <SettingsIcon />
          </NavigationButton>
        </div>
      }
    >
      <NavigationButton
        animationLayoutId={id}
        active={active === 1}
        onClick={() => setActive(1)}
      >
        <HomeIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        active={active === 2}
        onClick={() => setActive(2)}
      >
        <DashboardIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        active={active === 3}
        onClick={() => setActive(3)}
      >
        <AlertsIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        active={active === 4}
        onClick={() => setActive(4)}
      >
        <IntelligenceIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        disabled
        active={active === 5}
        onClick={() => setActive(5)}
      >
        <ReportsIcon />
      </NavigationButton>
    </NavigationBar>
  );
};

export const Horizontal = () => {
  const [active, setActive] = useState<number>(1);
  const id = useId();

  return (
    <NavigationBar
      direction="horizontal"
      className="w-[800px]"
      start={<div className="px-4">{logo}</div>}
      end={
        <div className="flex flex-row gap-2">
          <NavigationButton
            animationLayoutId={id}
            variant="underline"
            active={active === 6}
            onClick={() => setActive(6)}
          >
            <HelpIcon />
          </NavigationButton>
          <NavigationButton
            animationLayoutId={id}
            variant="underline"
            active={active === 7}
            onClick={() => setActive(7)}
          >
            <SettingsIcon />
          </NavigationButton>
        </div>
      }
    >
      <NavigationButton
        animationLayoutId={id}
        variant="underline"
        active={active === 1}
        onClick={() => setActive(1)}
      >
        <HomeIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        variant="underline"
        active={active === 2}
        onClick={() => setActive(2)}
      >
        <DashboardIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        variant="underline"
        active={active === 3}
        onClick={() => setActive(3)}
      >
        <AlertsIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        variant="underline"
        active={active === 4}
        onClick={() => setActive(4)}
      >
        <IntelligenceIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        disabled
        variant="underline"
        active={active === 5}
        onClick={() => setActive(5)}
      >
        <ReportsIcon />
      </NavigationButton>
    </NavigationBar>
  );
};

export const AnimationDisabled = () => {
  const [active, setActive] = useState<number>(1);
  const id = useId();

  return (
    <NavigationBar
      className="h-[600px]"
      start={<div className="px-4">{logo}</div>}
      end={
        <div className="flex flex-col gap-2">
          <NavigationButton
            animationLayoutId={id}
            animated={false}
            active={active === 6}
            onClick={() => setActive(6)}
          >
            <HelpIcon />
          </NavigationButton>
          <NavigationButton
            animationLayoutId={id}
            animated={false}
            active={active === 7}
            onClick={() => setActive(7)}
          >
            <SettingsIcon />
          </NavigationButton>
        </div>
      }
    >
      <NavigationButton
        animationLayoutId={id}
        animated={false}
        active={active === 1}
        onClick={() => setActive(1)}
      >
        <HomeIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        animated={false}
        active={active === 2}
        onClick={() => setActive(2)}
      >
        <DashboardIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        animated={false}
        active={active === 3}
        onClick={() => setActive(3)}
      >
        <AlertsIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        animated
        active={active === 4}
        onClick={() => setActive(4)}
      >
        <IntelligenceIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        animated={false}
        active={active === 5}
        onClick={() => setActive(5)}
      >
        <ReportsIcon />
      </NavigationButton>
    </NavigationBar>
  );
};

export const CustomTheme = () => {
  const [active, setActive] = useState<number>(1);
  const id = useId();
  const navigationTheme: NavigationTheme = useComponentTheme('navigation');

  const customTheme: NavigationTheme = extendComponentTheme(navigationTheme, {
    bar: {
      base: 'flex flex-col p-4 gap-4 rounded-md shadow-[0_4px_20px_0_#e1e2e333_inset] bg-navigation-colors-background-container-base border border-navigation-colors-stroke-container-base'
    },
    button: {
      variant: {
        ghost: {
          selection: `
          absolute z-1 top-0 left-0 w-full h-full rounded-md border
          border-red-infernal-blade-a-700 bg-red-infernal-blade-a-500
          hover:border-red-infernal-blade-a-500 hover:bg-red-infernal-blade-a-500
        `
        }
      }
    }
  });

  return (
    <NavigationBar
      theme={customTheme}
      className="h-[600px]"
      start={<div className="px-4">{logo}</div>}
      end={
        <div className="flex flex-col gap-2">
          <NavigationButton
            animationLayoutId={id}
            theme={customTheme}
            active={active === 6}
            onClick={() => setActive(6)}
          >
            <HelpIcon />
          </NavigationButton>
          <NavigationButton
            animationLayoutId={id}
            theme={customTheme}
            active={active === 7}
            onClick={() => setActive(7)}
          >
            <SettingsIcon />
          </NavigationButton>
        </div>
      }
    >
      <NavigationButton
        animationLayoutId={id}
        theme={customTheme}
        active={active === 1}
        onClick={() => setActive(1)}
      >
        <HomeIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        theme={customTheme}
        active={active === 2}
        onClick={() => setActive(2)}
      >
        <DashboardIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        theme={customTheme}
        active={active === 3}
        onClick={() => setActive(3)}
      >
        <AlertsIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        theme={customTheme}
        active={active === 4}
        onClick={() => setActive(4)}
      >
        <IntelligenceIcon />
      </NavigationButton>
      <NavigationButton
        animationLayoutId={id}
        theme={customTheme}
        active={active === 5}
        onClick={() => setActive(5)}
      >
        <ReportsIcon />
      </NavigationButton>
    </NavigationBar>
  );
};
