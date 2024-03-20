import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const designColors = {
  essentials: {
    'white': '#FFFFFF',
    'black': '#000000'
  },
  primary: {
    '01': '#E7EFFF',
    '02': '#C3D7FF',
    '03': '#87AEFF',
    '04': '#4C86FF',
    '05': '#105EFF',
    '06': '#0D4ED2',
    '07': '#0A3DA6',
    '08': '#082D79',
    '09': '#051C4C',
    '10': '#041028'
  },
  gray: {
    '01': '#F2F3F7',
    '02': '#E2E2EA',
    '03': '#C6CBD9',
    '04': '#9A9AAF',
    '05': '#7E7E8F',
    '06': '#656575',
    '07': '#535362',
    '08': '#2E2E3A',
    '09': '#262631',
    '10': '#16161E'
  },
  magenta: {
    '01': '#FAE5F6',
    '02': '#F1BFE9',
    '03': '#E480D3',
    '04': '#D740BE',
    '05': '#C900A8',
    '06': '#AB018F',
    '07': '#8C0276',
    '08': '#6E025C',
    '09': '#4F0343',
    '10': '#31042A'
  },
  pink: {
    '01': '#FDE5F1',
    '02': '#F9BFDB',
    '03': '#F480B7',
    '04': '#EE4094',
    '05': '#DE006B',
    '06': '#BB015A',
    '07': '#98014A',
    '08': '#740239',
    '09': '#510229',
    '10': '#2E0318'
  },
  lime: {
    '01': '#F4FAE5',
    '02': '#E3F3BF',
    '03': '#C6E880',
    '04': '#AADC40',
    '05': '#8ED000',
    '06': '#78B001',
    '07': '#628F01',
    '08': '#4C6F02',
    '09': '#364E02',
    '10': '#202E03'
  },
  teal: {
    '01': '#E5FBF9',
    '02': '#BFF6F0',
    '03': '#80EDE0',
    '04': '#40E5D1',
    '05': '#00DCC2',
    '06': '#00C2AB',
    '07': '#019A88',
    '08': '#017365',
    '09': '#024B42',
    '10': '#02231F'
  },
  cyan: {
    '01': '#E5F9FE',
    '02': '#BFF0FB',
    '03': '#80E2F8',
    '04': '#40D3F4',
    '05': '#00C5F0',
    '06': '#01A7CB',
    '07': '#0289A6',
    '08': '#036B82',
    '09': '#044D5D',
    '10': '#052F38'
  },
  violet: {
    '01': '#F0E8FD',
    '02': '#DAC5F9',
    '03': '#B58BF3',
    '04': '#9152EE',
    '05': '#6C18E8',
    '06': '#5B14C5',
    '07': '#4B10A1',
    '08': '#3A0D7E',
    '09': '#2A095B',
    '10': '#190537'
  },
  purple: {
    '01': '#F3E5FC',
    '02': '#E2BFF7',
    '03': '#C580F0',
    '04': '#A840E8',
    '05': '#8B00E0',
    '06': '#7501BC',
    '07': '#5F0298',
    '08': '#490274',
    '09': '#330350',
    '10': '#1D042D'
  },
  red: {
    '01': '#FCE5E6',
    '02': '#F7BFC1',
    '03': '#F08083',
    '04': '#E84045',
    '05': '#E00007',
    '06': '#B70006',
    '07': '#8E0005',
    '08': '#660104',
    '09': '#3D0103',
    '10': '#200204'
  },
  orange: {
    '01': '#FEF3E5',
    '02': '#FDE1BF',
    '03': '#FBC280',
    '04': '#F8A340',
    '05': '#F68500',
    '06': '#CB6E00',
    '07': '#9F5701',
    '08': '#743F01',
    '09': '#482802',
    '10': '#251602'
  },
  yellow: {
    '01': '#FFF9E5',
    '02': '#FFF1BF',
    '03': '#FFE380',
    '04': '#FFD440',
    '05': '#FFC600',
    '06': '#D2A300',
    '07': '#A58001',
    '08': '#785E01',
    '09': '#4B3B02',
    '10': '#261F03'
  },
  green: {
    '01': '#EEF8E9',
    '02': '#D5EFC8',
    '03': '#AADF91',
    '04': '#80CE5B',
    '05': '#55BE24',
    '06': '#469D1D',
    '07': '#377C16',
    '08': '#275C10',
    '09': '#183B09',
    '10': '#091A02'
  },
  blue: {
    '01': '#E7EFFF',
    '02': '#C3D7FF',
    '03': '#87AEFF',
    '04': '#4C86FF',
    '05': '#105EFF',
    '06': '#0D4ED2',
    '07': '#0A3DA6',
    '08': '#082D79',
    '09': '#051C4C',
    '10': '#041028'
  },
}
const config: Config = {
  content: [
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        ...designColors,
        secondary: colors.gray,
        success: colors.green,
        error: colors.red,
        warning: colors.orange,
        info: colors.sky,
        disabled: colors.gray['400'], // text-disabled
        light: {
          background: colors.gray['100'],
          disabled: colors.gray['200'],
        },
        dark: {
          background: colors.zinc['800'],
          disabled: colors.zinc['600'],
        },
        //text
        'text-01': {
          light: designColors.gray['10'],
          dark: designColors.gray['01'],
        },
        //text
        'text-02': {
          light: designColors.gray['08'],
          dark: designColors.gray['03'],
        },
        //text
        'text-03': {
          light: designColors.essentials['white'],
          dark: designColors.essentials['black'],
        },
        //active text
        'text-interactive-01': {
          light: designColors.primary['05'],
          dark: designColors.primary['05'],
        },
        //hover text
        'text-interactive-hover-01': {
          light: designColors.primary['06'],
          dark: designColors.primary['04'],
        },
        //hover text
        'text-interactive-inactive-01': {
          light: designColors.primary['02'],
          dark: designColors.gray['06'],
        },
        //inactive text
        'text-interactive-02': {
          light: designColors.gray['07'],
          dark: designColors.gray['03'],
        },
        //hover text
        'text-interactive-hover-02': {
          light: designColors.gray['08'],
          dark: designColors.gray['02'],
        },
        //inactive text
        'text-interactive-inactive-02': {
          light: designColors.gray['04'],
          dark: designColors.gray['06'],
        },
        //background level 1
        'ui-01': {
          light: designColors.essentials['white'],
          dark: designColors.essentials['black'],
        },
        //background level 2
        'ui-02': {
          light: designColors.gray['01'],
          dark: designColors.gray['10'],
        },
        //background level 3
        'ui-03': {
          light: designColors.gray['02'],
          dark: designColors.gray['09'],
        },
        //background level 4
        'ui-04': {
          light: designColors.gray['03'],
          dark: designColors.gray['08'],
        },
         //primary color
         'ui-primary-01': {
          light: designColors.primary['05'],
          dark: designColors.primary['05'],
        },
        //fill
        'ui-fill-01': {
          light: designColors.gray['02'],
          dark: designColors.gray['09'],
        },
        //fill
        'ui-fill-02': {
          light: designColors.gray['03'],
          dark: designColors.gray['08'],
        },
        //lines
        'ui-stroke-01': {
          light: designColors.gray['04'],
          dark: designColors.gray['07'],
        },
        //lines
        'ui-stroke-02': {
          light: designColors.gray['05'],
          dark: designColors.gray['06'],
        },
        //icons
        'ui-icons-01': {
          light: designColors.essentials['white'],
          dark: designColors.essentials['black'],
        },
        //icons
        'ui-icons-02': {
          light: designColors.gray['07'],
          dark: designColors.gray['03'],
        },
        //active
        'ui-interactive-01': {
          light: designColors.primary['05'],
          dark: designColors.primary['05'],
        },
        //hover
        'ui-interactive-hover-01': {
          light: designColors.primary['06'],
          dark: designColors.primary['04'],
        },
        //hover
        'ui-interactive-inactive-01': {
          light: designColors.primary['02'],
          dark: designColors.gray['06'],
        },
        //active
        'ui-interactive-02': {
          light: designColors.gray['07'],
          dark: designColors.gray['03'],
        },
        //hover
        'ui-interactive-hover-02': {
          light: designColors.gray['08'],
          dark: designColors.gray['02'],
        },
        //hover
        'ui-interactive-inactive-02': {
          light: designColors.gray['04'],
          dark: designColors.gray['06'],
        },
        //error
        'status-error': {
          light: designColors.red['05'],
          dark: designColors.red['05'],
        },
        //error hover
        'status-error-hover': {
          light: designColors.red['06'],
          dark: designColors.red['04'],
        },
        //error background
        'status-error-fill': {
          light: designColors.red['01'],
          dark: designColors.red['10'],
        },
         //warning
         'status-warning': {
          light: designColors.orange['05'],
          dark: designColors.orange['05'],
        },
        //warning hover
        'status-warning-hover': {
          light: designColors.orange['06'],
          dark: designColors.orange['04'],
        },
        //warning background
        'status-warning-fill': {
          light: designColors.orange['01'],
          dark: designColors.orange['10'],
        },
        //success
        'status-success': {
          light: designColors.green['05'],
          dark: designColors.green['05'],
        },
        //success hover
        'status-success-hover': {
          light: designColors.green['06'],
          dark: designColors.green['04'],
        },
        //success background
        'status-success-fill': {
          light: designColors.green['01'],
          dark: designColors.green['10'],
        },
        //information
        'status-information': {
          light: designColors.blue['05'],
          dark: designColors.blue['05'],
        },
        //information hover
        'status-information-hover': {
          light: designColors.blue['06'],
          dark: designColors.blue['04'],
        },
        //information background
        'status-information-fill': {
          light: designColors.blue['01'],
          dark: designColors.blue['10'],
        },
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('disabled-within', '&:has(input:is(:disabled),button:is(:disabled))');
    })
  ],
};

export default config;
