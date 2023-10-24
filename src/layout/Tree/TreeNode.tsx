import React, {
  Children,
  ReactNode,
  FC,
  useState,
  useEffect,
  useCallback,
  useContext
} from 'react';
import classNames from 'classnames';
import { Button } from '../../elements/Button';
import { Collapse } from '../Collapse';
import { TreeContext } from './TreeContext';
import css from './TreeNode.module.css';

export interface TreeNodeProps {
  /**
   * Label to display for the node
   */
  label: ReactNode | string;

  /**
   * CSS Classname to apply to the node
   */
  className?: string;

  /**
   * Children to render inside the node
   */
  children?: any;

  /**
   * Whether the node is expanded or not
   */
  expanded?: boolean;

  /**
   * Whether the node is disabled or not
   */
  disabled?: boolean;

  /**
   * Event fired when the node is expanded
   */
  onExpand?: () => void;

  /**
   * Event fired when the node is collapsed
   */
  onCollapse?: () => void;
}

export const TreeNode: FC<Partial<TreeNodeProps>> = ({
  children,
  className,
  label,
  disabled,
  expanded: expandedProp,
  onExpand,
  onCollapse
}) => {
  const { expandedIcon, collapsedIcon } = useContext(TreeContext);
  const [expanded, setExpanded] = useState<boolean>(expandedProp as boolean);
  const hasChildren = children && Children.count(children) > 0;

  useEffect(() => {
    setExpanded(expandedProp as boolean);
  }, [expandedProp]);

  const onButtonClick = useCallback(() => {
    const newState = !expanded;
    setExpanded(newState);

    if (newState) {
      onExpand?.();
    } else {
      onCollapse?.();
    }
  }, [expanded, onCollapse, onExpand]);

  return (
    <li
      className={classNames(className, css.node, {
        [css.leaf]: !hasChildren,
        [css.disabled]: disabled
      })}
    >
      <div className={css.nodeBlock}>
        {hasChildren && (
          <Button
            size="small"
            disabled={disabled}
            variant="text"
            title={expanded ? 'Collapse' : 'Expand'}
            className={css.button}
            onClick={onButtonClick}
          >
            {expanded ? expandedIcon : collapsedIcon}
          </Button>
        )}
        <span className={css.label}>{label}</span>
      </div>
      {hasChildren && (
        <Collapse expanded={expanded}>
          {() => <ul className={css.subtree}>{children}</ul>}
        </Collapse>
      )}
    </li>
  );
};
