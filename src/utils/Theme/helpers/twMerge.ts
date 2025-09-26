import { extendTailwindMerge } from 'tailwind-merge';

const TW_MERGE_CONFIG = {
  extend: {
    classGroups: {
      'font-size': ['text-xxs'],
    },
  },
};

export const twMerge = extendTailwindMerge(TW_MERGE_CONFIG);
