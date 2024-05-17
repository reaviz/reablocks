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

export const CustomIcon = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications: clearAll }) => (
        <Fragment>
          <Button
            onClick={() => {
              notify('Something happened!', {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="26"
                    viewBox="0 0 19 26"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2375_7604)">
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M18.6121 0L0.166504 12.8969L18.6121 26V14.0903L14.4719 11.4237L12.1418 13L16.0195 15.5212V20.9207L4.7201 12.8969L18.6121 3.19474V0Z"
                        fill="url(#paint0_linear_2375_7604)"
                      />
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M18.6118 4.19995L6.2644 12.9042L15.1392 19.2V15.9431L10.6581 13.0351L18.6118 7.42883V4.19995Z"
                        fill="url(#paint1_linear_2375_7604)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2375_7604"
                        x1="20.4566"
                        y1="6.44583"
                        x2="7.29732"
                        y2="21.8495"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#105EFF" />
                        <stop offset="0.413357" stop-color="#009BFF" />
                        <stop offset="0.735652" stop-color="#105EFF" />
                        <stop offset="1" stop-color="#090E43" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2375_7604"
                        x1="8.18384"
                        y1="17.3333"
                        x2="20.113"
                        y2="4.56037"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#105EFF" />
                        <stop offset="0.413357" stop-color="#009BFF" />
                        <stop offset="0.735652" stop-color="#105EFF" />
                        <stop offset="1" stop-color="#090E43" />
                      </linearGradient>
                      <clipPath id="clip0_2375_7604">
                        <rect width="18.7778" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )
              });
            }}
          >
            Show
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

export const WithAction = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications }) => (
        <Fragment>
          <Button
            onClick={() =>
              notify('New Message Alert!', {
                body: 'You have a new message',
                action: <Button onClick={() => alert('Hey!')}>View</Button>
              })
            }
          >
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
