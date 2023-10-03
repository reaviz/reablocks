import { Fragment } from 'react';
import { Notifications, NotificationsContext } from '../../layers';
import { Text } from '../../typography';
import { Button } from '../Button';
import { Badge } from './Badge';

export default {
  title: 'Components/Elements/Badge',
  component: Badge
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

export const Hidden = () => (
  <>
    <Badge hidden={true}>
      <NotificationIcon height={22} width={22} />
    </Badge>
  </>
);

export const Custom = () => (
  <>
    <Badge content={<Text fontStyle="bold">10</Text>} placement="top-end">
      <Notifications>
        <NotificationsContext.Consumer>
          {({ notifyError }) => (
            <Fragment>
              <Button
                color="error"
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

const NotificationIcon = ({ height, width }) => (
  <div>
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50%" cy="50%" r="4" fill="red" />
    </svg>
  </div>
);
