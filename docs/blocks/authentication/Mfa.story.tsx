import React from 'react';
import { motion } from 'motion/react';

import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider, Stack } from '../../../src/layout';
import { Input } from '../../../src/form/Input';
import { useForm, Controller } from 'react-hook-form';

export default {
  title: 'Blocks/Authentication/MFA'
};

const LogoIcon = ({ className }: { className?: string }) => (
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
        <stop stopColor="#1352FF" />
        <stop offset="0.354721" stopColor="#009BFF" />
        <stop offset="0.62382" stopColor="#105EFF" />
        <stop offset="1" stopColor="#090E43" />
      </linearGradient>
    </defs>
  </svg>
);

const QRLightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    className={className}
  >
    <g clipPath="url(#clip0_1447_18003)">
      <path d="M200 0H0V200H200V0Z" fill="white" />
      <mask
        id="mask0_1447_18003"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="13"
        y="13"
        width="174"
        height="174"
      >
        <path d="M19 67H13V73H19V67Z" fill="white" />
        <path d="M19 79H13V85H19V79Z" fill="white" />
        <path d="M19 85H13V91H19V85Z" fill="white" />
        <path d="M19 91H13V97H19V91Z" fill="white" />
        <path d="M19 97H13V103H19V97Z" fill="white" />
        <path d="M19 103H13V109H19V103Z" fill="white" />
        <path d="M19 109H13V115H19V109Z" fill="white" />
        <path d="M19 115H13V121H19V115Z" fill="white" />
        <path d="M19 121H13V127H19V121Z" fill="white" />
        <path d="M25 61H19V67H25V61Z" fill="white" />
        <path d="M25 67H19V73H25V67Z" fill="white" />
        <path d="M25 73H19V79H25V73Z" fill="white" />
        <path d="M25 79H19V85H25V79Z" fill="white" />
        <path d="M25 115H19V121H25V115Z" fill="white" />
        <path d="M25 127H19V133H25V127Z" fill="white" />
        <path d="M31 67H25V73H31V67Z" fill="white" />
        <path d="M31 79H25V85H31V79Z" fill="white" />
        <path d="M31 133H25V139H31V133Z" fill="white" />
        <path d="M37 61H31V67H37V61Z" fill="white" />
        <path d="M37 67H31V73H37V67Z" fill="white" />
        <path d="M37 79H31V85H37V79Z" fill="white" />
        <path d="M37 85H31V91H37V85Z" fill="white" />
        <path d="M37 91H31V97H37V91Z" fill="white" />
        <path d="M37 97H31V103H37V97Z" fill="white" />
        <path d="M37 109H31V115H37V109Z" fill="white" />
        <path d="M37 115H31V121H37V115Z" fill="white" />
        <path d="M37 121H31V127H37V121Z" fill="white" />
        <path d="M37 127H31V133H37V127Z" fill="white" />
        <path d="M43 61H37V67H43V61Z" fill="white" />
        <path d="M43 67H37V73H43V67Z" fill="white" />
        <path d="M43 85H37V91H43V85Z" fill="white" />
        <path d="M43 97H37V103H43V97Z" fill="white" />
        <path d="M43 109H37V115H43V109Z" fill="white" />
        <path d="M43 121H37V127H43V121Z" fill="white" />
        <path d="M43 127H37V133H43V127Z" fill="white" />
        <path d="M49 73H43V79H49V73Z" fill="white" />
        <path d="M49 79H43V85H49V79Z" fill="white" />
        <path d="M49 103H43V109H49V103Z" fill="white" />
        <path d="M49 109H43V115H49V109Z" fill="white" />
        <path d="M49 115H43V121H49V115Z" fill="white" />
        <path d="M49 133H43V139H49V133Z" fill="white" />
        <path d="M55 61H49V67H55V61Z" fill="white" />
        <path d="M55 73H49V79H55V73Z" fill="white" />
        <path d="M55 85H49V91H55V85Z" fill="white" />
        <path d="M55 97H49V103H55V97Z" fill="white" />
        <path d="M55 109H49V115H55V109Z" fill="white" />
        <path d="M55 121H49V127H55V121Z" fill="white" />
        <path d="M55 133H49V139H55V133Z" fill="white" />
        <path d="M61 61H55V67H61V61Z" fill="white" />
        <path d="M61 67H55V73H61V67Z" fill="white" />
        <path d="M61 85H55V91H61V85Z" fill="white" />
        <path d="M67 19H61V25H67V19Z" fill="white" />
        <path d="M67 31H61V37H67V31Z" fill="white" />
        <path d="M67 37H61V43H67V37Z" fill="white" />
        <path d="M67 43H61V49H67V43Z" fill="white" />
        <path d="M67 49H61V55H67V49Z" fill="white" />
        <path d="M67 61H61V67H67V61Z" fill="white" />
        <path d="M67 73H61V79H67V73Z" fill="white" />
        <path d="M67 97H61V103H67V97Z" fill="white" />
        <path d="M67 109H61V115H67V109Z" fill="white" />
        <path d="M67 115H61V121H67V115Z" fill="white" />
        <path d="M67 121H61V127H67V121Z" fill="white" />
        <path d="M67 127H61V133H67V127Z" fill="white" />
        <path d="M67 139H61V145H67V139Z" fill="white" />
        <path d="M67 145H61V151H67V145Z" fill="white" />
        <path d="M67 157H61V163H67V157Z" fill="white" />
        <path d="M67 163H61V169H67V163Z" fill="white" />
        <path d="M67 175H61V181H67V175Z" fill="white" />
        <path d="M73 31H67V37H73V31Z" fill="white" />
        <path d="M73 43H67V49H73V43Z" fill="white" />
        <path d="M73 61H67V67H73V61Z" fill="white" />
        <path d="M73 73H67V79H73V73Z" fill="white" />
        <path d="M73 79H67V85H73V79Z" fill="white" />
        <path d="M73 97H67V103H73V97Z" fill="white" />
        <path d="M73 103H67V109H73V103Z" fill="white" />
        <path d="M73 115H67V121H73V115Z" fill="white" />
        <path d="M73 121H67V127H73V121Z" fill="white" />
        <path d="M73 127H67V133H73V127Z" fill="white" />
        <path d="M73 151H67V157H73V151Z" fill="white" />
        <path d="M73 157H67V163H73V157Z" fill="white" />
        <path d="M73 175H67V181H73V175Z" fill="white" />
        <path d="M79 19H73V25H79V19Z" fill="white" />
        <path d="M79 31H73V37H79V31Z" fill="white" />
        <path d="M79 37H73V43H79V37Z" fill="white" />
        <path d="M79 43H73V49H79V43Z" fill="white" />
        <path d="M79 49H73V55H79V49Z" fill="white" />
        <path d="M79 73H73V79H79V73Z" fill="white" />
        <path d="M79 91H73V97H79V91Z" fill="white" />
        <path d="M79 109H73V115H79V109Z" fill="white" />
        <path d="M79 139H73V145H79V139Z" fill="white" />
        <path d="M79 145H73V151H79V145Z" fill="white" />
        <path d="M79 157H73V163H79V157Z" fill="white" />
        <path d="M79 163H73V169H79V163Z" fill="white" />
        <path d="M79 169H73V175H79V169Z" fill="white" />
        <path d="M85 19H79V25H85V19Z" fill="white" />
        <path d="M85 25H79V31H85V25Z" fill="white" />
        <path d="M85 31H79V37H85V31Z" fill="white" />
        <path d="M85 37H79V43H85V37Z" fill="white" />
        <path d="M85 55H79V61H85V55Z" fill="white" />
        <path d="M85 61H79V67H85V61Z" fill="white" />
        <path d="M85 67H79V73H85V67Z" fill="white" />
        <path d="M85 85H79V91H85V85Z" fill="white" />
        <path d="M85 91H79V97H85V91Z" fill="white" />
        <path d="M85 115H79V121H85V115Z" fill="white" />
        <path d="M85 121H79V127H85V121Z" fill="white" />
        <path d="M85 127H79V133H85V127Z" fill="white" />
        <path d="M85 151H79V157H85V151Z" fill="white" />
        <path d="M85 163H79V169H85V163Z" fill="white" />
        <path d="M85 181H79V187H85V181Z" fill="white" />
        <path d="M91 13H85V19H91V13Z" fill="white" />
        <path d="M91 25H85V31H91V25Z" fill="white" />
        <path d="M91 31H85V37H91V31Z" fill="white" />
        <path d="M91 37H85V43H91V37Z" fill="white" />
        <path d="M91 43H85V49H91V43Z" fill="white" />
        <path d="M91 49H85V55H91V49Z" fill="white" />
        <path d="M91 55H85V61H91V55Z" fill="white" />
        <path d="M91 85H85V91H91V85Z" fill="white" />
        <path d="M91 97H85V103H91V97Z" fill="white" />
        <path d="M91 103H85V109H91V103Z" fill="white" />
        <path d="M91 109H85V115H91V109Z" fill="white" />
        <path d="M91 127H85V133H91V127Z" fill="white" />
        <path d="M91 139H85V145H91V139Z" fill="white" />
        <path d="M91 145H85V151H91V145Z" fill="white" />
        <path d="M91 163H85V169H91V163Z" fill="white" />
        <path d="M91 175H85V181H91V175Z" fill="white" />
        <path d="M97 19H91V25H97V19Z" fill="white" />
        <path d="M97 25H91V31H97V25Z" fill="white" />
        <path d="M97 31H91V37H97V31Z" fill="white" />
        <path d="M97 37H91V43H97V37Z" fill="white" />
        <path d="M97 43H91V49H97V43Z" fill="white" />
        <path d="M97 55H91V61H97V55Z" fill="white" />
        <path d="M97 67H91V73H97V67Z" fill="white" />
        <path d="M97 73H91V79H97V73Z" fill="white" />
        <path d="M97 79H91V85H97V79Z" fill="white" />
        <path d="M97 85H91V91H97V85Z" fill="white" />
        <path d="M97 91H91V97H97V91Z" fill="white" />
        <path d="M97 109H91V115H97V109Z" fill="white" />
        <path d="M97 115H91V121H97V115Z" fill="white" />
        <path d="M97 145H91V151H97V145Z" fill="white" />
        <path d="M97 157H91V163H97V157Z" fill="white" />
        <path d="M97 169H91V175H97V169Z" fill="white" />
        <path d="M97 181H91V187H97V181Z" fill="white" />
        <path d="M103 19H97V25H103V19Z" fill="white" />
        <path d="M103 25H97V31H103V25Z" fill="white" />
        <path d="M103 31H97V37H103V31Z" fill="white" />
        <path d="M103 37H97V43H103V37Z" fill="white" />
        <path d="M103 43H97V49H103V43Z" fill="white" />
        <path d="M103 49H97V55H103V49Z" fill="white" />
        <path d="M103 67H97V73H103V67Z" fill="white" />
        <path d="M103 73H97V79H103V73Z" fill="white" />
        <path d="M103 103H97V109H103V103Z" fill="white" />
        <path d="M103 115H97V121H103V115Z" fill="white" />
        <path d="M103 127H97V133H103V127Z" fill="white" />
        <path d="M103 133H97V139H103V133Z" fill="white" />
        <path d="M103 145H97V151H103V145Z" fill="white" />
        <path d="M103 151H97V157H103V151Z" fill="white" />
        <path d="M103 163H97V169H103V163Z" fill="white" />
        <path d="M103 181H97V187H103V181Z" fill="white" />
        <path d="M109 13H103V19H109V13Z" fill="white" />
        <path d="M109 19H103V25H109V19Z" fill="white" />
        <path d="M109 37H103V43H109V37Z" fill="white" />
        <path d="M109 43H103V49H109V43Z" fill="white" />
        <path d="M109 55H103V61H109V55Z" fill="white" />
        <path d="M109 73H103V79H109V73Z" fill="white" />
        <path d="M109 91H103V97H109V91Z" fill="white" />
        <path d="M109 127H103V133H109V127Z" fill="white" />
        <path d="M109 139H103V145H109V139Z" fill="white" />
        <path d="M109 157H103V163H109V157Z" fill="white" />
        <path d="M109 163H103V169H109V163Z" fill="white" />
        <path d="M109 169H103V175H109V169Z" fill="white" />
        <path d="M109 175H103V181H109V175Z" fill="white" />
        <path d="M109 181H103V187H109V181Z" fill="white" />
        <path d="M115 13H109V19H115V13Z" fill="white" />
        <path d="M115 25H109V31H115V25Z" fill="white" />
        <path d="M115 49H109V55H115V49Z" fill="white" />
        <path d="M115 55H109V61H115V55Z" fill="white" />
        <path d="M115 67H109V73H115V67Z" fill="white" />
        <path d="M115 85H109V91H115V85Z" fill="white" />
        <path d="M115 91H109V97H115V91Z" fill="white" />
        <path d="M115 115H109V121H115V115Z" fill="white" />
        <path d="M115 121H109V127H115V121Z" fill="white" />
        <path d="M115 133H109V139H115V133Z" fill="white" />
        <path d="M115 151H109V157H115V151Z" fill="white" />
        <path d="M115 163H109V169H115V163Z" fill="white" />
        <path d="M121 13H115V19H121V13Z" fill="white" />
        <path d="M121 25H115V31H121V25Z" fill="white" />
        <path d="M121 31H115V37H121V31Z" fill="white" />
        <path d="M121 61H115V67H121V61Z" fill="white" />
        <path d="M121 67H115V73H121V67Z" fill="white" />
        <path d="M121 85H115V91H121V85Z" fill="white" />
        <path d="M121 91H115V97H121V91Z" fill="white" />
        <path d="M121 115H115V121H121V115Z" fill="white" />
        <path d="M121 121H115V127H121V121Z" fill="white" />
        <path d="M121 127H115V133H121V127Z" fill="white" />
        <path d="M121 133H115V139H121V133Z" fill="white" />
        <path d="M121 157H115V163H121V157Z" fill="white" />
        <path d="M121 163H115V169H121V163Z" fill="white" />
        <path d="M127 13H121V19H127V13Z" fill="white" />
        <path d="M127 19H121V25H127V19Z" fill="white" />
        <path d="M127 31H121V37H127V31Z" fill="white" />
        <path d="M127 43H121V49H127V43Z" fill="white" />
        <path d="M127 49H121V55H127V49Z" fill="white" />
        <path d="M127 67H121V73H127V67Z" fill="white" />
        <path d="M127 91H121V97H127V91Z" fill="white" />
        <path d="M127 97H121V103H127V97Z" fill="white" />
        <path d="M127 109H121V115H127V109Z" fill="white" />
        <path d="M127 115H121V121H127V115Z" fill="white" />
        <path d="M127 121H121V127H127V121Z" fill="white" />
        <path d="M127 127H121V133H127V127Z" fill="white" />
        <path d="M127 133H121V139H127V133Z" fill="white" />
        <path d="M127 163H121V169H127V163Z" fill="white" />
        <path d="M127 169H121V175H127V169Z" fill="white" />
        <path d="M127 181H121V187H127V181Z" fill="white" />
        <path d="M133 13H127V19H133V13Z" fill="white" />
        <path d="M133 19H127V25H133V19Z" fill="white" />
        <path d="M133 31H127V37H133V31Z" fill="white" />
        <path d="M133 55H127V61H133V55Z" fill="white" />
        <path d="M133 61H127V67H133V61Z" fill="white" />
        <path d="M133 73H127V79H133V73Z" fill="white" />
        <path d="M133 79H127V85H133V79Z" fill="white" />
        <path d="M133 103H127V109H133V103Z" fill="white" />
        <path d="M133 109H127V115H133V109Z" fill="white" />
        <path d="M133 121H127V127H133V121Z" fill="white" />
        <path d="M133 139H127V145H133V139Z" fill="white" />
        <path d="M133 145H127V151H133V145Z" fill="white" />
        <path d="M133 157H127V163H133V157Z" fill="white" />
        <path d="M133 169H127V175H133V169Z" fill="white" />
        <path d="M133 175H127V181H133V175Z" fill="white" />
        <path d="M139 13H133V19H139V13Z" fill="white" />
        <path d="M139 19H133V25H139V19Z" fill="white" />
        <path d="M139 37H133V43H139V37Z" fill="white" />
        <path d="M139 43H133V49H139V43Z" fill="white" />
        <path d="M139 49H133V55H139V49Z" fill="white" />
        <path d="M139 55H133V61H139V55Z" fill="white" />
        <path d="M139 61H133V67H139V61Z" fill="white" />
        <path d="M139 115H133V121H139V115Z" fill="white" />
        <path d="M139 133H133V139H139V133Z" fill="white" />
        <path d="M139 139H133V145H139V139Z" fill="white" />
        <path d="M139 145H133V151H139V145Z" fill="white" />
        <path d="M139 151H133V157H139V151Z" fill="white" />
        <path d="M139 157H133V163H139V157Z" fill="white" />
        <path d="M139 163H133V169H139V163Z" fill="white" />
        <path d="M139 169H133V175H139V169Z" fill="white" />
        <path d="M145 61H139V67H145V61Z" fill="white" />
        <path d="M145 67H139V73H145V67Z" fill="white" />
        <path d="M145 73H139V79H145V73Z" fill="white" />
        <path d="M145 79H139V85H145V79Z" fill="white" />
        <path d="M145 97H139V103H145V97Z" fill="white" />
        <path d="M145 103H139V109H145V103Z" fill="white" />
        <path d="M145 115H139V121H145V115Z" fill="white" />
        <path d="M145 121H139V127H145V121Z" fill="white" />
        <path d="M145 127H139V133H145V127Z" fill="white" />
        <path d="M145 133H139V139H145V133Z" fill="white" />
        <path d="M145 157H139V163H145V157Z" fill="white" />
        <path d="M145 163H139V169H145V163Z" fill="white" />
        <path d="M145 169H139V175H145V169Z" fill="white" />
        <path d="M145 175H139V181H145V175Z" fill="white" />
        <path d="M151 67H145V73H151V67Z" fill="white" />
        <path d="M151 73H145V79H151V73Z" fill="white" />
        <path d="M151 85H145V91H151V85Z" fill="white" />
        <path d="M151 97H145V103H151V97Z" fill="white" />
        <path d="M151 103H145V109H151V103Z" fill="white" />
        <path d="M151 109H145V115H151V109Z" fill="white" />
        <path d="M151 127H145V133H151V127Z" fill="white" />
        <path d="M151 133H145V139H151V133Z" fill="white" />
        <path d="M151 145H145V151H151V145Z" fill="white" />
        <path d="M151 157H145V163H151V157Z" fill="white" />
        <path d="M151 169H145V175H151V169Z" fill="white" />
        <path d="M157 61H151V67H157V61Z" fill="white" />
        <path d="M157 73H151V79H157V73Z" fill="white" />
        <path d="M157 97H151V103H157V97Z" fill="white" />
        <path d="M157 121H151V127H157V121Z" fill="white" />
        <path d="M157 127H151V133H157V127Z" fill="white" />
        <path d="M157 133H151V139H157V133Z" fill="white" />
        <path d="M157 157H151V163H157V157Z" fill="white" />
        <path d="M157 163H151V169H157V163Z" fill="white" />
        <path d="M157 175H151V181H157V175Z" fill="white" />
        <path d="M163 61H157V67H163V61Z" fill="white" />
        <path d="M163 67H157V73H163V67Z" fill="white" />
        <path d="M163 73H157V79H163V73Z" fill="white" />
        <path d="M163 79H157V85H163V79Z" fill="white" />
        <path d="M163 91H157V97H163V91Z" fill="white" />
        <path d="M163 103H157V109H163V103Z" fill="white" />
        <path d="M163 115H157V121H163V115Z" fill="white" />
        <path d="M163 127H157V133H163V127Z" fill="white" />
        <path d="M163 133H157V139H163V133Z" fill="white" />
        <path d="M163 139H157V145H163V139Z" fill="white" />
        <path d="M163 145H157V151H163V145Z" fill="white" />
        <path d="M163 151H157V157H163V151Z" fill="white" />
        <path d="M163 157H157V163H163V157Z" fill="white" />
        <path d="M163 175H157V181H163V175Z" fill="white" />
        <path d="M163 181H157V187H163V181Z" fill="white" />
        <path d="M169 61H163V67H169V61Z" fill="white" />
        <path d="M169 67H163V73H169V67Z" fill="white" />
        <path d="M169 79H163V85H169V79Z" fill="white" />
        <path d="M169 85H163V91H169V85Z" fill="white" />
        <path d="M169 115H163V121H169V115Z" fill="white" />
        <path d="M169 121H163V127H169V121Z" fill="white" />
        <path d="M169 151H163V157H169V151Z" fill="white" />
        <path d="M169 169H163V175H169V169Z" fill="white" />
        <path d="M169 175H163V181H169V175Z" fill="white" />
        <path d="M175 97H169V103H175V97Z" fill="white" />
        <path d="M175 103H169V109H175V103Z" fill="white" />
        <path d="M175 133H169V139H175V133Z" fill="white" />
        <path d="M175 139H169V145H175V139Z" fill="white" />
        <path d="M175 151H169V157H175V151Z" fill="white" />
        <path d="M175 157H169V163H175V157Z" fill="white" />
        <path d="M175 175H169V181H175V175Z" fill="white" />
        <path d="M175 181H169V187H175V181Z" fill="white" />
        <path d="M181 61H175V67H181V61Z" fill="white" />
        <path d="M181 67H175V73H181V67Z" fill="white" />
        <path d="M181 79H175V85H181V79Z" fill="white" />
        <path d="M181 85H175V91H181V85Z" fill="white" />
        <path d="M181 97H175V103H181V97Z" fill="white" />
        <path d="M181 109H175V115H181V109Z" fill="white" />
        <path d="M181 121H175V127H181V121Z" fill="white" />
        <path d="M181 139H175V145H181V139Z" fill="white" />
        <path d="M181 157H175V163H181V157Z" fill="white" />
        <path d="M181 163H175V169H181V163Z" fill="white" />
        <path d="M181 169H175V175H181V169Z" fill="white" />
        <path d="M181 181H175V187H181V181Z" fill="white" />
        <path d="M187 67H181V73H187V67Z" fill="white" />
        <path d="M187 97H181V103H187V97Z" fill="white" />
        <path d="M187 103H181V109H187V103Z" fill="white" />
        <path d="M187 109H181V115H187V109Z" fill="white" />
        <path d="M187 133H181V139H187V133Z" fill="white" />
        <path d="M187 139H181V145H187V139Z" fill="white" />
        <path d="M187 145H181V151H187V145Z" fill="white" />
        <path d="M187 151H181V157H187V151Z" fill="white" />
        <path d="M187 157H181V163H187V157Z" fill="white" />
        <path d="M187 163H181V169H187V163Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1447_18003)">
        <path d="M200 0H0V200H200V0Z" fill="black" />
      </g>
      <mask
        id="mask1_1447_18003"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="13"
        y="13"
        width="42"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 13V55H55V13H13ZM19 19H49V49H19V19Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_1447_18003)">
        <path d="M55 13H13V55H55V13Z" fill="black" />
      </g>
      <mask
        id="mask2_1447_18003"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="25"
        y="25"
        width="18"
        height="18"
      >
        <path d="M43 25H25V43H43V25Z" fill="white" />
      </mask>
      <g mask="url(#mask2_1447_18003)">
        <path d="M43 25H25V43H43V25Z" fill="black" />
      </g>
      <mask
        id="mask3_1447_18003"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="145"
        y="13"
        width="42"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M187 13L145 13V55H187V13ZM181 19V49H151V19H181Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask3_1447_18003)">
        <path d="M187 13H145V55H187V13Z" fill="black" />
      </g>
      <mask
        id="mask4_1447_18003"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="157"
        y="25"
        width="18"
        height="18"
      >
        <path d="M175 43V25H157V43H175Z" fill="white" />
      </mask>
      <g mask="url(#mask4_1447_18003)">
        <path d="M175 25H157V43H175V25Z" fill="black" />
      </g>
      <mask
        id="mask5_1447_18003"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="13"
        y="145"
        width="42"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 187H55V145H13L13 187ZM19 181V151H49V181H19Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask5_1447_18003)">
        <path d="M55 145H13V187H55V145Z" fill="black" />
      </g>
      <mask
        id="mask6_1447_18003"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="25"
        y="157"
        width="18"
        height="18"
      >
        <path d="M25 157V175H43V157H25Z" fill="white" />
      </mask>
      <g mask="url(#mask6_1447_18003)">
        <path d="M43 157H25V175H43V157Z" fill="black" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1447_18003">
        <rect width="200" height="200" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const QRDarkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    className={className}
  >
    <g clipPath="url(#clip0_1447_17515)">
      <path d="M200 0H0V200H200V0Z" fill="black" />
      <mask
        id="mask0_1447_17515"
        maskUnits="userSpaceOnUse"
        x="13"
        y="13"
        width="174"
        height="174"
      >
        <path d="M19 67H13V73H19V67Z" fill="white" />
        <path d="M19 79H13V85H19V79Z" fill="white" />
        <path d="M19 85H13V91H19V85Z" fill="white" />
        <path d="M19 91H13V97H19V91Z" fill="white" />
        <path d="M19 97H13V103H19V97Z" fill="white" />
        <path d="M19 103H13V109H19V103Z" fill="white" />
        <path d="M19 109H13V115H19V109Z" fill="white" />
        <path d="M19 115H13V121H19V115Z" fill="white" />
        <path d="M19 121H13V127H19V121Z" fill="white" />
        <path d="M25 61H19V67H25V61Z" fill="white" />
        <path d="M25 67H19V73H25V67Z" fill="white" />
        <path d="M25 73H19V79H25V73Z" fill="white" />
        <path d="M25 79H19V85H25V79Z" fill="white" />
        <path d="M25 115H19V121H25V115Z" fill="white" />
        <path d="M25 127H19V133H25V127Z" fill="white" />
        <path d="M31 67H25V73H31V67Z" fill="white" />
        <path d="M31 79H25V85H31V79Z" fill="white" />
        <path d="M31 133H25V139H31V133Z" fill="white" />
        <path d="M37 61H31V67H37V61Z" fill="white" />
        <path d="M37 67H31V73H37V67Z" fill="white" />
        <path d="M37 79H31V85H37V79Z" fill="white" />
        <path d="M37 85H31V91H37V85Z" fill="white" />
        <path d="M37 91H31V97H37V91Z" fill="white" />
        <path d="M37 97H31V103H37V97Z" fill="white" />
        <path d="M37 109H31V115H37V109Z" fill="white" />
        <path d="M37 115H31V121H37V115Z" fill="white" />
        <path d="M37 121H31V127H37V121Z" fill="white" />
        <path d="M37 127H31V133H37V127Z" fill="white" />
        <path d="M43 61H37V67H43V61Z" fill="white" />
        <path d="M43 67H37V73H43V67Z" fill="white" />
        <path d="M43 85H37V91H43V85Z" fill="white" />
        <path d="M43 97H37V103H43V97Z" fill="white" />
        <path d="M43 109H37V115H43V109Z" fill="white" />
        <path d="M43 121H37V127H43V121Z" fill="white" />
        <path d="M43 127H37V133H43V127Z" fill="white" />
        <path d="M49 73H43V79H49V73Z" fill="white" />
        <path d="M49 79H43V85H49V79Z" fill="white" />
        <path d="M49 103H43V109H49V103Z" fill="white" />
        <path d="M49 109H43V115H49V109Z" fill="white" />
        <path d="M49 115H43V121H49V115Z" fill="white" />
        <path d="M49 133H43V139H49V133Z" fill="white" />
        <path d="M55 61H49V67H55V61Z" fill="white" />
        <path d="M55 73H49V79H55V73Z" fill="white" />
        <path d="M55 85H49V91H55V85Z" fill="white" />
        <path d="M55 97H49V103H55V97Z" fill="white" />
        <path d="M55 109H49V115H55V109Z" fill="white" />
        <path d="M55 121H49V127H55V121Z" fill="white" />
        <path d="M55 133H49V139H55V133Z" fill="white" />
        <path d="M61 61H55V67H61V61Z" fill="white" />
        <path d="M61 67H55V73H61V67Z" fill="white" />
        <path d="M61 85H55V91H61V85Z" fill="white" />
        <path d="M67 19H61V25H67V19Z" fill="white" />
        <path d="M67 31H61V37H67V31Z" fill="white" />
        <path d="M67 37H61V43H67V37Z" fill="white" />
        <path d="M67 43H61V49H67V43Z" fill="white" />
        <path d="M67 49H61V55H67V49Z" fill="white" />
        <path d="M67 61H61V67H67V61Z" fill="white" />
        <path d="M67 73H61V79H67V73Z" fill="white" />
        <path d="M67 97H61V103H67V97Z" fill="white" />
        <path d="M67 109H61V115H67V109Z" fill="white" />
        <path d="M67 115H61V121H67V115Z" fill="white" />
        <path d="M67 121H61V127H67V121Z" fill="white" />
        <path d="M67 127H61V133H67V127Z" fill="white" />
        <path d="M67 139H61V145H67V139Z" fill="white" />
        <path d="M67 145H61V151H67V145Z" fill="white" />
        <path d="M67 157H61V163H67V157Z" fill="white" />
        <path d="M67 163H61V169H67V163Z" fill="white" />
        <path d="M67 175H61V181H67V175Z" fill="white" />
        <path d="M73 31H67V37H73V31Z" fill="white" />
        <path d="M73 43H67V49H73V43Z" fill="white" />
        <path d="M73 61H67V67H73V61Z" fill="white" />
        <path d="M73 73H67V79H73V73Z" fill="white" />
        <path d="M73 79H67V85H73V79Z" fill="white" />
        <path d="M73 97H67V103H73V97Z" fill="white" />
        <path d="M73 103H67V109H73V103Z" fill="white" />
        <path d="M73 115H67V121H73V115Z" fill="white" />
        <path d="M73 121H67V127H73V121Z" fill="white" />
        <path d="M73 127H67V133H73V127Z" fill="white" />
        <path d="M73 151H67V157H73V151Z" fill="white" />
        <path d="M73 157H67V163H73V157Z" fill="white" />
        <path d="M73 175H67V181H73V175Z" fill="white" />
        <path d="M79 19H73V25H79V19Z" fill="white" />
        <path d="M79 31H73V37H79V31Z" fill="white" />
        <path d="M79 37H73V43H79V37Z" fill="white" />
        <path d="M79 43H73V49H79V43Z" fill="white" />
        <path d="M79 49H73V55H79V49Z" fill="white" />
        <path d="M79 73H73V79H79V73Z" fill="white" />
        <path d="M79 91H73V97H79V91Z" fill="white" />
        <path d="M79 109H73V115H79V109Z" fill="white" />
        <path d="M79 139H73V145H79V139Z" fill="white" />
        <path d="M79 145H73V151H79V145Z" fill="white" />
        <path d="M79 157H73V163H79V157Z" fill="white" />
        <path d="M79 163H73V169H79V163Z" fill="white" />
        <path d="M79 169H73V175H79V169Z" fill="white" />
        <path d="M85 19H79V25H85V19Z" fill="white" />
        <path d="M85 25H79V31H85V25Z" fill="white" />
        <path d="M85 31H79V37H85V31Z" fill="white" />
        <path d="M85 37H79V43H85V37Z" fill="white" />
        <path d="M85 55H79V61H85V55Z" fill="white" />
        <path d="M85 61H79V67H85V61Z" fill="white" />
        <path d="M85 67H79V73H85V67Z" fill="white" />
        <path d="M85 85H79V91H85V85Z" fill="white" />
        <path d="M85 91H79V97H85V91Z" fill="white" />
        <path d="M85 115H79V121H85V115Z" fill="white" />
        <path d="M85 121H79V127H85V121Z" fill="white" />
        <path d="M85 127H79V133H85V127Z" fill="white" />
        <path d="M85 151H79V157H85V151Z" fill="white" />
        <path d="M85 163H79V169H85V163Z" fill="white" />
        <path d="M85 181H79V187H85V181Z" fill="white" />
        <path d="M91 13H85V19H91V13Z" fill="white" />
        <path d="M91 25H85V31H91V25Z" fill="white" />
        <path d="M91 31H85V37H91V31Z" fill="white" />
        <path d="M91 37H85V43H91V37Z" fill="white" />
        <path d="M91 43H85V49H91V43Z" fill="white" />
        <path d="M91 49H85V55H91V49Z" fill="white" />
        <path d="M91 55H85V61H91V55Z" fill="white" />
        <path d="M91 85H85V91H91V85Z" fill="white" />
        <path d="M91 97H85V103H91V97Z" fill="white" />
        <path d="M91 103H85V109H91V103Z" fill="white" />
        <path d="M91 109H85V115H91V109Z" fill="white" />
        <path d="M91 127H85V133H91V127Z" fill="white" />
        <path d="M91 139H85V145H91V139Z" fill="white" />
        <path d="M91 145H85V151H91V145Z" fill="white" />
        <path d="M91 163H85V169H91V163Z" fill="white" />
        <path d="M91 175H85V181H91V175Z" fill="white" />
        <path d="M97 19H91V25H97V19Z" fill="white" />
        <path d="M97 25H91V31H97V25Z" fill="white" />
        <path d="M97 31H91V37H97V31Z" fill="white" />
        <path d="M97 37H91V43H97V37Z" fill="white" />
        <path d="M97 43H91V49H97V43Z" fill="white" />
        <path d="M97 55H91V61H97V55Z" fill="white" />
        <path d="M97 67H91V73H97V67Z" fill="white" />
        <path d="M97 73H91V79H97V73Z" fill="white" />
        <path d="M97 79H91V85H97V79Z" fill="white" />
        <path d="M97 85H91V91H97V85Z" fill="white" />
        <path d="M97 91H91V97H97V91Z" fill="white" />
        <path d="M97 109H91V115H97V109Z" fill="white" />
        <path d="M97 115H91V121H97V115Z" fill="white" />
        <path d="M97 145H91V151H97V145Z" fill="white" />
        <path d="M97 157H91V163H97V157Z" fill="white" />
        <path d="M97 169H91V175H97V169Z" fill="white" />
        <path d="M97 181H91V187H97V181Z" fill="white" />
        <path d="M103 19H97V25H103V19Z" fill="white" />
        <path d="M103 25H97V31H103V25Z" fill="white" />
        <path d="M103 31H97V37H103V31Z" fill="white" />
        <path d="M103 37H97V43H103V37Z" fill="white" />
        <path d="M103 43H97V49H103V43Z" fill="white" />
        <path d="M103 49H97V55H103V49Z" fill="white" />
        <path d="M103 67H97V73H103V67Z" fill="white" />
        <path d="M103 73H97V79H103V73Z" fill="white" />
        <path d="M103 103H97V109H103V103Z" fill="white" />
        <path d="M103 115H97V121H103V115Z" fill="white" />
        <path d="M103 127H97V133H103V127Z" fill="white" />
        <path d="M103 133H97V139H103V133Z" fill="white" />
        <path d="M103 145H97V151H103V145Z" fill="white" />
        <path d="M103 151H97V157H103V151Z" fill="white" />
        <path d="M103 163H97V169H103V163Z" fill="white" />
        <path d="M103 181H97V187H103V181Z" fill="white" />
        <path d="M109 13H103V19H109V13Z" fill="white" />
        <path d="M109 19H103V25H109V19Z" fill="white" />
        <path d="M109 37H103V43H109V37Z" fill="white" />
        <path d="M109 43H103V49H109V43Z" fill="white" />
        <path d="M109 55H103V61H109V55Z" fill="white" />
        <path d="M109 73H103V79H109V73Z" fill="white" />
        <path d="M109 91H103V97H109V91Z" fill="white" />
        <path d="M109 127H103V133H109V127Z" fill="white" />
        <path d="M109 139H103V145H109V139Z" fill="white" />
        <path d="M109 157H103V163H109V157Z" fill="white" />
        <path d="M109 163H103V169H109V163Z" fill="white" />
        <path d="M109 169H103V175H109V169Z" fill="white" />
        <path d="M109 175H103V181H109V175Z" fill="white" />
        <path d="M109 181H103V187H109V181Z" fill="white" />
        <path d="M115 13H109V19H115V13Z" fill="white" />
        <path d="M115 25H109V31H115V25Z" fill="white" />
        <path d="M115 49H109V55H115V49Z" fill="white" />
        <path d="M115 55H109V61H115V55Z" fill="white" />
        <path d="M115 67H109V73H115V67Z" fill="white" />
        <path d="M115 85H109V91H115V85Z" fill="white" />
        <path d="M115 91H109V97H115V91Z" fill="white" />
        <path d="M115 115H109V121H115V115Z" fill="white" />
        <path d="M115 121H109V127H115V121Z" fill="white" />
        <path d="M115 133H109V139H115V133Z" fill="white" />
        <path d="M115 151H109V157H115V151Z" fill="white" />
        <path d="M115 163H109V169H115V163Z" fill="white" />
        <path d="M121 13H115V19H121V13Z" fill="white" />
        <path d="M121 25H115V31H121V25Z" fill="white" />
        <path d="M121 31H115V37H121V31Z" fill="white" />
        <path d="M121 61H115V67H121V61Z" fill="white" />
        <path d="M121 67H115V73H121V67Z" fill="white" />
        <path d="M121 85H115V91H121V85Z" fill="white" />
        <path d="M121 91H115V97H121V91Z" fill="white" />
        <path d="M121 115H115V121H121V115Z" fill="white" />
        <path d="M121 121H115V127H121V121Z" fill="white" />
        <path d="M121 127H115V133H121V127Z" fill="white" />
        <path d="M121 133H115V139H121V133Z" fill="white" />
        <path d="M121 157H115V163H121V157Z" fill="white" />
        <path d="M121 163H115V169H121V163Z" fill="white" />
        <path d="M127 13H121V19H127V13Z" fill="white" />
        <path d="M127 19H121V25H127V19Z" fill="white" />
        <path d="M127 31H121V37H127V31Z" fill="white" />
        <path d="M127 43H121V49H127V43Z" fill="white" />
        <path d="M127 49H121V55H127V49Z" fill="white" />
        <path d="M127 67H121V73H127V67Z" fill="white" />
        <path d="M127 91H121V97H127V91Z" fill="white" />
        <path d="M127 97H121V103H127V97Z" fill="white" />
        <path d="M127 109H121V115H127V109Z" fill="white" />
        <path d="M127 115H121V121H127V115Z" fill="white" />
        <path d="M127 121H121V127H127V121Z" fill="white" />
        <path d="M127 127H121V133H127V127Z" fill="white" />
        <path d="M127 133H121V139H127V133Z" fill="white" />
        <path d="M127 163H121V169H127V163Z" fill="white" />
        <path d="M127 169H121V175H127V169Z" fill="white" />
        <path d="M127 181H121V187H127V181Z" fill="white" />
        <path d="M133 13H127V19H133V13Z" fill="white" />
        <path d="M133 19H127V25H133V19Z" fill="white" />
        <path d="M133 31H127V37H133V31Z" fill="white" />
        <path d="M133 55H127V61H133V55Z" fill="white" />
        <path d="M133 61H127V67H133V61Z" fill="white" />
        <path d="M133 73H127V79H133V73Z" fill="white" />
        <path d="M133 79H127V85H133V79Z" fill="white" />
        <path d="M133 103H127V109H133V103Z" fill="white" />
        <path d="M133 109H127V115H133V109Z" fill="white" />
        <path d="M133 121H127V127H133V121Z" fill="white" />
        <path d="M133 139H127V145H133V139Z" fill="white" />
        <path d="M133 145H127V151H133V145Z" fill="white" />
        <path d="M133 157H127V163H133V157Z" fill="white" />
        <path d="M133 169H127V175H133V169Z" fill="white" />
        <path d="M133 175H127V181H133V175Z" fill="white" />
        <path d="M139 13H133V19H139V13Z" fill="white" />
        <path d="M139 19H133V25H139V19Z" fill="white" />
        <path d="M139 37H133V43H139V37Z" fill="white" />
        <path d="M139 43H133V49H139V43Z" fill="white" />
        <path d="M139 49H133V55H139V49Z" fill="white" />
        <path d="M139 55H133V61H139V55Z" fill="white" />
        <path d="M139 61H133V67H139V61Z" fill="white" />
        <path d="M139 115H133V121H139V115Z" fill="white" />
        <path d="M139 133H133V139H139V133Z" fill="white" />
        <path d="M139 139H133V145H139V139Z" fill="white" />
        <path d="M139 145H133V151H139V145Z" fill="white" />
        <path d="M139 151H133V157H139V151Z" fill="white" />
        <path d="M139 157H133V163H139V157Z" fill="white" />
        <path d="M139 163H133V169H139V163Z" fill="white" />
        <path d="M139 169H133V175H139V169Z" fill="white" />
        <path d="M145 61H139V67H145V61Z" fill="white" />
        <path d="M145 67H139V73H145V67Z" fill="white" />
        <path d="M145 73H139V79H145V73Z" fill="white" />
        <path d="M145 79H139V85H145V79Z" fill="white" />
        <path d="M145 97H139V103H145V97Z" fill="white" />
        <path d="M145 103H139V109H145V103Z" fill="white" />
        <path d="M145 115H139V121H145V115Z" fill="white" />
        <path d="M145 121H139V127H145V121Z" fill="white" />
        <path d="M145 127H139V133H145V127Z" fill="white" />
        <path d="M145 133H139V139H145V133Z" fill="white" />
        <path d="M145 157H139V163H145V157Z" fill="white" />
        <path d="M145 163H139V169H145V163Z" fill="white" />
        <path d="M145 169H139V175H145V169Z" fill="white" />
        <path d="M145 175H139V181H145V175Z" fill="white" />
        <path d="M151 67H145V73H151V67Z" fill="white" />
        <path d="M151 73H145V79H151V73Z" fill="white" />
        <path d="M151 85H145V91H151V85Z" fill="white" />
        <path d="M151 97H145V103H151V97Z" fill="white" />
        <path d="M151 103H145V109H151V103Z" fill="white" />
        <path d="M151 109H145V115H151V109Z" fill="white" />
        <path d="M151 127H145V133H151V127Z" fill="white" />
        <path d="M151 133H145V139H151V133Z" fill="white" />
        <path d="M151 145H145V151H151V145Z" fill="white" />
        <path d="M151 157H145V163H151V157Z" fill="white" />
        <path d="M151 169H145V175H151V169Z" fill="white" />
        <path d="M157 61H151V67H157V61Z" fill="white" />
        <path d="M157 73H151V79H157V73Z" fill="white" />
        <path d="M157 97H151V103H157V97Z" fill="white" />
        <path d="M157 121H151V127H157V121Z" fill="white" />
        <path d="M157 127H151V133H157V127Z" fill="white" />
        <path d="M157 133H151V139H157V133Z" fill="white" />
        <path d="M157 157H151V163H157V157Z" fill="white" />
        <path d="M157 163H151V169H157V163Z" fill="white" />
        <path d="M157 175H151V181H157V175Z" fill="white" />
        <path d="M163 61H157V67H163V61Z" fill="white" />
        <path d="M163 67H157V73H163V67Z" fill="white" />
        <path d="M163 73H157V79H163V73Z" fill="white" />
        <path d="M163 79H157V85H163V79Z" fill="white" />
        <path d="M163 91H157V97H163V91Z" fill="white" />
        <path d="M163 103H157V109H163V103Z" fill="white" />
        <path d="M163 115H157V121H163V115Z" fill="white" />
        <path d="M163 127H157V133H163V127Z" fill="white" />
        <path d="M163 133H157V139H163V133Z" fill="white" />
        <path d="M163 139H157V145H163V139Z" fill="white" />
        <path d="M163 145H157V151H163V145Z" fill="white" />
        <path d="M163 151H157V157H163V151Z" fill="white" />
        <path d="M163 157H157V163H163V157Z" fill="white" />
        <path d="M163 175H157V181H163V175Z" fill="white" />
        <path d="M163 181H157V187H163V181Z" fill="white" />
        <path d="M169 61H163V67H169V61Z" fill="white" />
        <path d="M169 67H163V73H169V67Z" fill="white" />
        <path d="M169 79H163V85H169V79Z" fill="white" />
        <path d="M169 85H163V91H169V85Z" fill="white" />
        <path d="M169 115H163V121H169V115Z" fill="white" />
        <path d="M169 121H163V127H169V121Z" fill="white" />
        <path d="M169 151H163V157H169V151Z" fill="white" />
        <path d="M169 169H163V175H169V169Z" fill="white" />
        <path d="M169 175H163V181H169V175Z" fill="white" />
        <path d="M175 97H169V103H175V97Z" fill="white" />
        <path d="M175 103H169V109H175V103Z" fill="white" />
        <path d="M175 133H169V139H175V133Z" fill="white" />
        <path d="M175 139H169V145H175V139Z" fill="white" />
        <path d="M175 151H169V157H175V151Z" fill="white" />
        <path d="M175 157H169V163H175V157Z" fill="white" />
        <path d="M175 175H169V181H175V175Z" fill="white" />
        <path d="M175 181H169V187H175V181Z" fill="white" />
        <path d="M181 61H175V67H181V61Z" fill="white" />
        <path d="M181 67H175V73H181V67Z" fill="white" />
        <path d="M181 79H175V85H181V79Z" fill="white" />
        <path d="M181 85H175V91H181V85Z" fill="white" />
        <path d="M181 97H175V103H181V97Z" fill="white" />
        <path d="M181 109H175V115H181V109Z" fill="white" />
        <path d="M181 121H175V127H181V121Z" fill="white" />
        <path d="M181 139H175V145H181V139Z" fill="white" />
        <path d="M181 157H175V163H181V157Z" fill="white" />
        <path d="M181 163H175V169H181V163Z" fill="white" />
        <path d="M181 169H175V175H181V169Z" fill="white" />
        <path d="M181 181H175V187H181V181Z" fill="white" />
        <path d="M187 67H181V73H187V67Z" fill="white" />
        <path d="M187 97H181V103H187V97Z" fill="white" />
        <path d="M187 103H181V109H187V103Z" fill="white" />
        <path d="M187 109H181V115H187V109Z" fill="white" />
        <path d="M187 133H181V139H187V133Z" fill="white" />
        <path d="M187 139H181V145H187V139Z" fill="white" />
        <path d="M187 145H181V151H187V145Z" fill="white" />
        <path d="M187 151H181V157H187V151Z" fill="white" />
        <path d="M187 157H181V163H187V157Z" fill="white" />
        <path d="M187 163H181V169H187V163Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1447_17515)">
        <path d="M200 0H0V200H200V0Z" fill="white" />
      </g>
      <mask
        id="mask1_1447_17515"
        maskUnits="userSpaceOnUse"
        x="13"
        y="13"
        width="42"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 13V55H55V13H13ZM19 19H49V49H19V19Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_1447_17515)">
        <path d="M55 13H13V55H55V13Z" fill="white" />
      </g>
      <mask
        id="mask2_1447_17515"
        maskUnits="userSpaceOnUse"
        x="25"
        y="25"
        width="18"
        height="18"
      >
        <path d="M43 25H25V43H43V25Z" fill="white" />
      </mask>
      <g mask="url(#mask2_1447_17515)">
        <path d="M43 25H25V43H43V25Z" fill="white" />
      </g>
      <mask
        id="mask3_1447_17515"
        maskUnits="userSpaceOnUse"
        x="145"
        y="13"
        width="42"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M187 13L145 13V55H187V13ZM181 19V49H151V19H181Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask3_1447_17515)">
        <path d="M187 13H145V55H187V13Z" fill="white" />
      </g>
      <mask
        id="mask4_1447_17515"
        maskUnits="userSpaceOnUse"
        x="157"
        y="25"
        width="18"
        height="18"
      >
        <path d="M175 43V25H157V43H175Z" fill="white" />
      </mask>
      <g mask="url(#mask4_1447_17515)">
        <path d="M175 25H157V43H175V25Z" fill="white" />
      </g>
      <mask
        id="mask5_1447_17515"
        maskUnits="userSpaceOnUse"
        x="13"
        y="145"
        width="42"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 187H55V145H13L13 187ZM19 181V151H49V181H19Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask5_1447_17515)">
        <path d="M55 145H13V187H55V145Z" fill="white" />
      </g>
      <mask
        id="mask6_1447_17515"
        maskUnits="userSpaceOnUse"
        x="25"
        y="157"
        width="18"
        height="18"
      >
        <path d="M25 157V175H43V157H25Z" fill="white" />
      </mask>
      <g mask="url(#mask6_1447_17515)">
        <path d="M43 157H25V175H43V157Z" fill="white" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1447_17515">
        <rect width="200" height="200" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

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
      <Card className="w-full p-7">
        <div className="flex flex-col items-center justify-center pt-2 pb-5 text-center">
          <div className="p-3 border border-stroke-neutral-3 rounded-sm mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M3.49998 2C2.30665 2 1.33331 2.97333 1.33331 4.16667V7.83333C1.33331 9.02667 2.30665 10 3.49998 10H7.66665C7.81665 9.64 8.01324 9.30333 8.25323 9H3.49998C2.85665 9 2.33331 8.47667 2.33331 7.83333V4.16667C2.33331 3.52333 2.85665 3 3.49998 3H12.5C13.1433 3 13.6666 3.52333 13.6666 4.16667V7.82357C13.9966 7.99357 14.3035 8.20971 14.5768 8.45638C14.6335 8.25971 14.6666 8.05 14.6666 7.83333V4.16667C14.6666 2.97333 13.6933 2 12.5 2H3.49998ZM4.99998 5.33333C4.82317 5.33333 4.6536 5.40357 4.52858 5.5286C4.40355 5.65362 4.33331 5.82319 4.33331 6C4.33331 6.17681 4.40355 6.34638 4.52858 6.4714C4.6536 6.59643 4.82317 6.66667 4.99998 6.66667C5.17679 6.66667 5.34636 6.59643 5.47138 6.4714C5.59641 6.34638 5.66665 6.17681 5.66665 6C5.66665 5.82319 5.59641 5.65362 5.47138 5.5286C5.34636 5.40357 5.17679 5.33333 4.99998 5.33333ZM7.99998 5.33333C7.82317 5.33333 7.6536 5.40357 7.52858 5.5286C7.40355 5.65362 7.33331 5.82319 7.33331 6C7.33331 6.17681 7.40355 6.34638 7.52858 6.4714C7.6536 6.59643 7.82317 6.66667 7.99998 6.66667C8.17679 6.66667 8.34636 6.59643 8.47138 6.4714C8.59641 6.34638 8.66665 6.17681 8.66665 6C8.66665 5.82319 8.59641 5.65362 8.47138 5.5286C8.34636 5.40357 8.17679 5.33333 7.99998 5.33333ZM11 5.33333C10.8232 5.33333 10.6536 5.40357 10.5286 5.5286C10.4036 5.65362 10.3333 5.82319 10.3333 6C10.3333 6.17681 10.4036 6.34638 10.5286 6.4714C10.6536 6.59643 10.8232 6.66667 11 6.66667C11.1768 6.66667 11.3464 6.59643 11.4714 6.4714C11.5964 6.34638 11.6666 6.17681 11.6666 6C11.6666 5.82319 11.5964 5.65362 11.4714 5.5286C11.3464 5.40357 11.1768 5.33333 11 5.33333ZM11.6666 8C9.64165 8 7.99998 9.64167 7.99998 11.6667C7.99998 13.6917 9.64165 15.3333 11.6666 15.3333C13.6916 15.3333 15.3333 13.6917 15.3333 11.6667C15.3333 9.64167 13.6916 8 11.6666 8ZM11.6666 9.33333C12.308 9.33333 12.903 9.60163 13.3333 10.043V9.66667C13.3333 9.48267 13.4823 9.33333 13.6666 9.33333C13.851 9.33333 14 9.48267 14 9.66667V11C14 11.184 13.851 11.3333 13.6666 11.3333H12.3333C12.149 11.3333 12 11.184 12 11C12 10.816 12.149 10.6667 12.3333 10.6667H12.987C12.6786 10.2573 12.1963 10 11.6666 10C10.7476 10 9.99998 10.7477 9.99998 11.6667C9.99998 12.5857 10.7476 13.3333 11.6666 13.3333C12.37 13.3333 13.001 12.887 13.2363 12.2227C13.2976 12.049 13.4878 11.9579 13.6614 12.0195C13.8351 12.0812 13.9262 12.2713 13.8646 12.4447C13.5356 13.375 12.652 14 11.6666 14C10.3803 14 9.33331 12.9533 9.33331 11.6667C9.33331 10.38 10.3803 9.33333 11.6666 9.33333Z" />
            </svg>
          </div>
          <h1 className="mt-2 mb-0 text-xl font-sans font-bold">
            One Time Password
          </h1>
          <div className="text-content-text-neutral-2 text-sm">
            Please verify your identity using your registered email or phone
            number and follow the prompts to complete the password reset
            process.
          </div>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block>
            <Controller
              name="pin"
              control={control}
              render={({ field: { value, ...rest } }) => (
                <div className="grid grid-cols-4 gap-4">
                  {['1', '6', '', ''].map((value, idx) => (
                    <Input
                      {...rest}
                      key={idx}
                      disabled={isSubmitting}
                      value={value}
                      className="text-center min-w-0"
                    />
                  ))}
                </div>
              )}
            />
          </Block>
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            className="mt-7"
            disabled={isSubmitting}
            startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8.00002 2.66669V0.666687L5.33335 3.33335L8.00002 6.00002V4.00002C10.2067 4.00002 12 5.79335 12 8.00002C12 8.67335 11.8334 9.31335 11.5334 9.86669L12.5067 10.84C13.0267 10.02 13.3334 9.04669 13.3334 8.00002C13.3334 5.05335 10.9467 2.66669 8.00002 2.66669ZM8.00002 12C5.79335 12 4.00002 10.2067 4.00002 8.00002C4.00002 7.32669 4.16669 6.68669 4.46669 6.13335L3.49335 5.16002C2.97335 5.98002 2.66669 6.95335 2.66669 8.00002C2.66669 10.9467 5.05335 13.3334 8.00002 13.3334V15.3334L10.6667 12.6667L8.00002 10V12Z" />
              </svg>
            }
          >
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </Button>
          <div className="text-center text-content-text-neutral-2 text-xs mt-5">
            Are you facing any problems with receiving the code?
          </div>
          <div className="mt-2.5 mb-5 text-content-text-neutral-2 text-xs flex items-center justify-center gap-5">
            <Button size="large" variant="text" endAdornment={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.1667 5.33335L10.5 8.00002H12.5C12.5 10.2067 10.7067 12 8.50002 12C7.82669 12 7.18669 11.8334 6.63335 11.5334L5.66002 12.5067C6.48002 13.0267 7.45335 13.3334 8.50002 13.3334C11.4467 13.3334 13.8334 10.9467 13.8334 8.00002H15.8334L13.1667 5.33335ZM4.50002 8.00002C4.50002 5.79335 6.29335 4.00002 8.50002 4.00002C9.17335 4.00002 9.81335 4.16669 10.3667 4.46669L11.34 3.49335C10.52 2.97335 9.54669 2.66669 8.50002 2.66669C5.55335 2.66669 3.16669 5.05335 3.16669 8.00002H1.16669L3.83335 10.6667L6.50002 8.00002H4.50002Z" />
              </svg>
            }>
              Resend Code
            </Button>
          </div>
          <Divider />
          <div className="mt-5 text-content-text-neutral-2 text-xs flex items-center justify-center gap-5">
            <span className="text-content-text-neutral-2 text-xs">
              Remember your password?
            </span>
            <Button size="large" variant="text" startAdornment={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M13.8334 7.33335H5.72002L9.44669 3.60669L8.50002 2.66669L3.16669 8.00002L8.50002 13.3334L9.44002 12.3934L5.72002 8.66669H13.8334V7.33335Z" />
              </svg>
            }>
              Go Back
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};

export const MfaLogin = () => {
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
        <Stack justifyContent="spaceBetween">
          <LogoIcon className="h-[30px] w-auto" />
          <Button size="large" variant="text">
            New to Reablocks?
          </Button>
        </Stack>
        <div className="flex flex-col items-center justify-center pb-5 mt-[190px] text-center">
          <div className="p-3 bg-background-brand-base rounded-sm mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M3.49998 2C2.30665 2 1.33331 2.97333 1.33331 4.16667V7.83333C1.33331 9.02667 2.30665 10 3.49998 10H7.66665C7.81665 9.64 8.01324 9.30333 8.25323 9H3.49998C2.85665 9 2.33331 8.47667 2.33331 7.83333V4.16667C2.33331 3.52333 2.85665 3 3.49998 3H12.5C13.1433 3 13.6666 3.52333 13.6666 4.16667V7.82357C13.9966 7.99357 14.3035 8.20971 14.5768 8.45638C14.6335 8.25971 14.6666 8.05 14.6666 7.83333V4.16667C14.6666 2.97333 13.6933 2 12.5 2H3.49998ZM4.99998 5.33333C4.82317 5.33333 4.6536 5.40357 4.52858 5.5286C4.40355 5.65362 4.33331 5.82319 4.33331 6C4.33331 6.17681 4.40355 6.34638 4.52858 6.4714C4.6536 6.59643 4.82317 6.66667 4.99998 6.66667C5.17679 6.66667 5.34636 6.59643 5.47138 6.4714C5.59641 6.34638 5.66665 6.17681 5.66665 6C5.66665 5.82319 5.59641 5.65362 5.47138 5.5286C5.34636 5.40357 5.17679 5.33333 4.99998 5.33333ZM7.99998 5.33333C7.82317 5.33333 7.6536 5.40357 7.52858 5.5286C7.40355 5.65362 7.33331 5.82319 7.33331 6C7.33331 6.17681 7.40355 6.34638 7.52858 6.4714C7.6536 6.59643 7.82317 6.66667 7.99998 6.66667C8.17679 6.66667 8.34636 6.59643 8.47138 6.4714C8.59641 6.34638 8.66665 6.17681 8.66665 6C8.66665 5.82319 8.59641 5.65362 8.47138 5.5286C8.34636 5.40357 8.17679 5.33333 7.99998 5.33333ZM11 5.33333C10.8232 5.33333 10.6536 5.40357 10.5286 5.5286C10.4036 5.65362 10.3333 5.82319 10.3333 6C10.3333 6.17681 10.4036 6.34638 10.5286 6.4714C10.6536 6.59643 10.8232 6.66667 11 6.66667C11.1768 6.66667 11.3464 6.59643 11.4714 6.4714C11.5964 6.34638 11.6666 6.17681 11.6666 6C11.6666 5.82319 11.5964 5.65362 11.4714 5.5286C11.3464 5.40357 11.1768 5.33333 11 5.33333ZM11.6666 8C9.64165 8 7.99998 9.64167 7.99998 11.6667C7.99998 13.6917 9.64165 15.3333 11.6666 15.3333C13.6916 15.3333 15.3333 13.6917 15.3333 11.6667C15.3333 9.64167 13.6916 8 11.6666 8ZM11.6666 9.33333C12.308 9.33333 12.903 9.60163 13.3333 10.043V9.66667C13.3333 9.48267 13.4823 9.33333 13.6666 9.33333C13.851 9.33333 14 9.48267 14 9.66667V11C14 11.184 13.851 11.3333 13.6666 11.3333H12.3333C12.149 11.3333 12 11.184 12 11C12 10.816 12.149 10.6667 12.3333 10.6667H12.987C12.6786 10.2573 12.1963 10 11.6666 10C10.7476 10 9.99998 10.7477 9.99998 11.6667C9.99998 12.5857 10.7476 13.3333 11.6666 13.3333C12.37 13.3333 13.001 12.887 13.2363 12.2227C13.2976 12.049 13.4878 11.9579 13.6614 12.0195C13.8351 12.0812 13.9262 12.2713 13.8646 12.4447C13.5356 13.375 12.652 14 11.6666 14C10.3803 14 9.33331 12.9533 9.33331 11.6667C9.33331 10.38 10.3803 9.33333 11.6666 9.33333Z" />
            </svg>
          </div>
          <h1 className="mt-2 mb-0 text-xl font-sans font-bold">
            Enter your code
          </h1>
          <div className="text-content-text-neutral-2 text-sm">
            We sent a code to{' '}
            <a href="#" className="text-primary">
              austin@goodcode.us
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Block>
            <Controller
              name="pin"
              control={control}
              render={({ field: { value, ...rest } }) => (
                <div className="grid grid-cols-4 gap-4">
                  {['1', '6', '', ''].map((value, idx) => (
                    <Input
                      {...rest}
                      key={idx}
                      disabled={isSubmitting}
                      value={value}
                      className="text-center min-w-0"
                    />
                  ))}
                </div>
              )}
            />
          </Block>
          <Stack justifyContent="spaceBetween" className="mt-2 mb-[190px]">
            <div className="text-center text-content-text-neutral-2 text-sm">
              Didn't receive a email?
            </div>
            <Button variant="text" className="p-0" endAdornment={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.1667 5.33335L10.5 8.00002H12.5C12.5 10.2067 10.7067 12 8.50002 12C7.82669 12 7.18669 11.8334 6.63335 11.5334L5.66002 12.5067C6.48002 13.0267 7.45335 13.3334 8.50002 13.3334C11.4467 13.3334 13.8334 10.9467 13.8334 8.00002H15.8334L13.1667 5.33335ZM4.50002 8.00002C4.50002 5.79335 6.29335 4.00002 8.50002 4.00002C9.17335 4.00002 9.81335 4.16669 10.3667 4.46669L11.34 3.49335C10.52 2.97335 9.54669 2.66669 8.50002 2.66669C5.55335 2.66669 3.16669 5.05335 3.16669 8.00002H1.16669L3.83335 10.6667L6.50002 8.00002H4.50002Z" />
              </svg>
            }>
              Click to resend
            </Button>
          </Stack>
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            className="mt-7"
            disabled={isSubmitting}
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="currentColor"
            >
              <path d="M6.97003 4L6.03003 4.94L9.08336 8L6.03003 11.06L6.97003 12L10.97 8L6.97003 4Z" />
            </svg>
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

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
          <h1 className="mb-0 text-xl font-sans font-bold">
            Set up your two-factor authentication.
          </h1>
          <div className="text-content-text-neutral-2">
            Scan this code with your Google authenticator app to continue this
            process.
          </div>
          <div className="self-center mt-4 mb-6">
            <QRDarkIcon className="light:hidden" />
            <QRLightIcon className="dark:hidden" />
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
                    <React.Fragment key={idx}>
                      {idx === 3 && <Divider />}
                      <Input
                        {...rest}
                        disabled={isSubmitting}
                        value={value}
                        className="text-center min-w-0"
                      />
                    </React.Fragment>
                  ))}
                </div>
              )}
            />
          </Block>
          <div className="grid grid-cols-2 gap-4 mt-7">
            <Button
              size="large"
              variant="filled"
              color="secondary"
              disabled={isSubmitting}
              fullWidth
            >
              Discard
            </Button>
            <Button
              size="large"
              type="submit"
              fullWidth
              variant="filled"
              color="primary"
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
