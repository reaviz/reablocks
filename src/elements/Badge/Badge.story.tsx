import type { FC } from 'react';
import { Fragment } from 'react';

import { Notifications, NotificationsContext } from '../../layers';
import { Button } from '../Button';
import { Badge } from './Badge';

export default {
  title: 'Components/Elements/Badge',
  component: Badge,
};

export const Colors = () => (
  <>
    <Badge content="7">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" color="primary">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" color="secondary">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" color="error">
      <NotificationIcon height={22} width={22} />
    </Badge>
  </>
);

export const Positions = () => (
  <>
    <Badge content="7" placement="top-start">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" placement="top-end">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" placement="bottom-start">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" placement="bottom-end">
      <NotificationIcon height={22} width={22} />
    </Badge>
  </>
);

export const HiddenContent = () => (
  <Badge hidden={true}>
    <NotificationIcon height={22} width={22} />
  </Badge>
);

export const OnlyContent = () => <Badge content="7" />;

export const Custom = () => (
  <>
    <Badge content="10" placement="top-end" color="error">
      <Notifications>
        <NotificationsContext.Consumer>
          {({ notifyError }) => (
            <Fragment>
              <Button
                color="destructive"
                onClick={() => notifyError('You have 10 alerts!')}
              >
                Alerts
              </Button>
            </Fragment>
          )}
        </NotificationsContext.Consumer>
      </Notifications>
    </Badge>
  </>
);

const NotificationIcon: FC<{
  height?: number;
  width?: number;
}> = ({ height, width }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
    </svg>
  </div>
);
