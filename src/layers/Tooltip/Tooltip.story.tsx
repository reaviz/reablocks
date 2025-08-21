import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../../elements';
import { extendComponentTheme } from '../../utils';
import { tooltipTheme, TooltipTheme } from './TooltipTheme';

export default {
  title: 'Components/Layers/Tooltip',
  component: Tooltip
};

export const Simple = () => (
  <div
    style={{
      textAlign: 'center',
      width: '100%',
      margin: '50px',
      color: 'green'
    }}
  >
    <Tooltip content="Hi there">Hover me</Tooltip>
    <br />
    <br />
    <br />
    <Tooltip content="Hi there too">Hover me too</Tooltip>
  </div>
);

export const CustomTheme = () => {
  const customTheme = extendComponentTheme<TooltipTheme>(tooltipTheme, {
    base: 'rounded-sm bg-green-800 text-white font-bold p-3 text-sm'
  });

  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        margin: '50px',
        color: 'green'
      }}
    >
      <Tooltip theme={customTheme} content="Hi there">
        Hover me
      </Tooltip>
      <br />
      <br />
      <br />
      <Tooltip theme={customTheme} content="Hi there too">
        Hover me too
      </Tooltip>
    </div>
  );
};

export const FollowCursor = () => (
  <div
    style={{
      textAlign: 'center',
      width: '100%',
      margin: '50px',
      color: 'green'
    }}
  >
    <Tooltip visible content="I'm following, wait me" followCursor />
  </div>
);

export const FollowScroll = () => (
  <div
    style={{
      textAlign: 'center',
      width: '100%',
      height: '200vh',
      margin: '50px',
      color: 'green'
    }}
  >
    <div className="mb-[200px]"></div>
    <Tooltip content="Hi there">Hover me</Tooltip>
  </div>
);

export const Disabled = () => (
  <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
    <Tooltip content="Hi there" disabled={true}>
      <Button disabled>Hover me</Button>
    </Tooltip>
  </div>
);
