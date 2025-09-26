import React from 'react';

import { Button } from '../../elements';
import { extendComponentTheme } from '../../utils';
import { Tooltip } from './Tooltip';
import type { TooltipTheme } from './TooltipTheme';
import { tooltipTheme } from './TooltipTheme';

export default { title: 'Components/Layers/Tooltip', component: Tooltip };

export const Simple = () => (
  <div
    style={{
      textAlign: 'center',
      width: '100%',
      margin: '50px',
      color: 'green',
    }}
  >
    <Tooltip content="Hi there">Hover me</Tooltip>
    <br />
    <br />
    <br />
    <Tooltip content="Hi there too">Hover me too</Tooltip>
  </div>
);

export const NoAnimation = () => (
  <div
    style={{
      textAlign: 'center',
      width: '100%',
      margin: '50px',
      color: 'green',
    }}
  >
    <Tooltip
      content="Hi there"
      animation={{ initial: null, animate: null, exit: null }}
    >
      Hover me
    </Tooltip>
  </div>
);

export const CustomAnimation = () => {
  const beautifulAnimation = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: -30,
      rotateX: -15,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -30,
      rotateX: -15,
      filter: 'blur(8px)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        margin: '50px',
        color: 'green',
      }}
    >
      <Tooltip
        content="Beautiful animated tooltip!"
        animation={beautifulAnimation}
      >
        <span>Hover for beautiful animation</span>
      </Tooltip>
    </div>
  );
};

export const CustomTheme = () => {
  const customTheme = extendComponentTheme<TooltipTheme>(tooltipTheme, {
    base: 'rounded-sm bg-green-800 text-white font-bold p-3 text-sm',
  });

  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        margin: '50px',
        color: 'green',
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
      color: 'green',
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
      color: 'green',
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
