import { useContext } from 'react';

import { NotificationsContext } from './NotificationsContext';

export const useNotification = () => {
  const context = useContext(NotificationsContext);

  if (context === undefined) {
    throw new Error(
      '`useNotification` hook must be used within a `NotificationsContext` component'
    );
  }

  return context;
};
