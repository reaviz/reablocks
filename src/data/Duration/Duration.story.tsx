import React, { Fragment } from 'react';
import { Duration } from './Duration';

export default {
  title: 'Components/Data/Duration',
  component: Duration,
  decorators: [
    (Story, context) => (
      <div
        style={{
          color: context.globals.theme === 'light' ? 'black' : 'inherit'
        }}
      >
        <Story />
      </div>
    )
  ]
};

export const Simple = () => (
  <Fragment>
    <Duration value="125" />
    <br />
    <Duration value="256" />
    <br />
    <Duration value="1234567" />
    <br />
    <Duration value="123456789101" />
    <br />
    <Duration value={12345678910121314} />
  </Fragment>
);

export const Empty = () => (
  <Fragment>
    <Duration value={null} />
    <br />
    <Duration value={undefined} />
    <br />
    <Duration value={null} emptyValue="Nothing to see" />
    <br />
  </Fragment>
);
