import React, { FC, Fragment } from 'react';
import { NotificationComponentProps, Notifications } from './Notifications';
import { NotificationsContext } from './NotificationsContext';
import { Button } from '../../elements';

export default {
  title: 'Components/Layers/Notification',
  component: Notifications
};

const CustomNotification: FC<NotificationComponentProps> = ({
  message,
  variant,
  onClose
}) => (
  <div
    className={variant}
    style={{
      width: '200px',
      height: '50px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      boxSizing: 'border-box',
      ...(variant === 'default'
        ? { backgroundColor: 'lightblue', color: 'black' }
        : null),
      ...(variant === 'success'
        ? { backgroundColor: 'lightgreen', color: 'black' }
        : null),
      ...(variant === 'warning'
        ? { backgroundColor: 'lightsalmon', color: 'black' }
        : null),
      ...(variant === 'error'
        ? { backgroundColor: 'lightcoral', color: 'black' }
        : null)
    }}
    onClick={onClose}
  >
    {message}
    <div style={{ marginLeft: '5px', fontSize: '12px' }}>
      (Click me to close!)
    </div>
  </div>
);

export const Title = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications }) => (
        <Fragment>
          <Button onClick={() => notify(`Hello! ${Math.random()}`)}>
            Show
          </Button>
          <br />
          <br />
          <Button onClick={() => clearAllNotifications()}>Clear</Button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const TitleAndBody = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications: clearAll }) => (
        <Fragment>
          <Button
            onClick={() =>
              notify('New Message Alert!', { body: 'You have a new message' })
            }
          >
            Title + Text Body
          </Button>
          <br />
          <br />
          <Button
            onClick={() =>
              notify('Welcome', {
                body: <h3>Hello Friend!</h3>
              })
            }
          >
            Title and Body Content
          </Button>
          <br />
          <br />
          <Button onClick={() => clearAll()}>Clear</Button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const Variants = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({
        notifySuccess,
        notifyError,
        notifyWarning,
        notifyInfo,
        clearAllNotifications: clearAll
      }) => (
        <Fragment>
          <Button
            color="success"
            className="mx-1"
            onClick={() => notifySuccess('Something good happened!')}
          >
            Success
          </Button>
          <Button
            color="error"
            className="mx-1"
            onClick={() => notifyError('Something bad happened!')}
          >
            Error
          </Button>
          <Button
            color="warning"
            className="mx-1"
            onClick={() => notifyWarning('Something questionable happened!')}
          >
            Warning
          </Button>
          <Button
            className="mx-1"
            onClick={() => notifyInfo('Something informational happened!')}
          >
            info
          </Button>
          <br />
          <br />
          <Button onClick={() => clearAll()}>Clear</Button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const FloodPrevention = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications: clearAll }) => (
        <Fragment>
          <Button
            onClick={() => {
              for (let i = 0; i < 20; i++) {
                setTimeout(() => notify('Something bad happened!'), 50);
              }
            }}
          >
            Flood
          </Button>
          <br />
          <br />
          <Button onClick={() => clearAll()}>Clear</Button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const CustomComponent = () => (
  <Notifications
    components={{
      default: CustomNotification,
      success: CustomNotification,
      warning: CustomNotification,
      error: CustomNotification
    }}
  >
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications }) => (
        <Fragment>
          <Button className="mx-1" onClick={() => notify('Default')}>
            Custom Default
          </Button>
          <Button
            color="success"
            className="mx-1"
            onClick={() => notify('Success', { variant: 'success' })}
          >
            Custom Success
          </Button>
          <Button
            color="warning"
            className="mx-1"
            onClick={() => notify('Warning', { variant: 'warning' })}
          >
            Custom Warning
          </Button>
          <Button
            color="error"
            className="mx-1"
            onClick={() => notify('Error', { variant: 'error' })}
          >
            Custom Error
          </Button>
          <br />
          <br />
          <Button onClick={() => clearAllNotifications()}>Clear</Button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);
