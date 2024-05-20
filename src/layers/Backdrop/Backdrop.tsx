import React, { FC, MouseEvent } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import css from './Backdrop.module.css';

export interface BackdropProps {
  /**
   * The z-index of the backdrop.
   */
  zIndex?: number;

  /**
   * The index of the portal.
   */
  portalIndex?: number;

  /**
   * Additional class names to apply to the backdrop.
   */
  className?: string;

  /**
   * Callback for when the backdrop is clicked.
   */
  onClick?: (event: MouseEvent) => void;
}

export const Backdrop: FC<BackdropProps> = ({
  zIndex = 998,
  portalIndex = 0,
  className,
  onClick
}) => (
  <motion.div
    className={classNames(css.backdrop, className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.8 - (portalIndex as number) / 10 }}
    exit={{ opacity: 0 }}
    style={{ zIndex }}
    onClick={onClick}
  />
);
