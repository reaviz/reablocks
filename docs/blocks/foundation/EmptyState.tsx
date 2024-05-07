import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { Card } from '../../../src/layout/Card';

export const EmptyState: FC = () => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mt-10 sm:mx-auto sm:w-full md:w-[800px]"
  >
    <Card
      className="w-full p-24 md:h-[628px]"
      contentClassName="flex flex-col justify-center gap-2 items-center text-center"
    >
      <span className="text-xl font-bold">Empty State</span>
      <span className="text-panel-secondary-content text-base">
        Looks like this section is empty right now. Check back later or explore
        other areas of the app for more content.
      </span>
    </Card>
  </motion.div>
);
