import React, {
  Children,
  ReactNode,
  FC,
  useState,
  useEffect,
  useCallback,
  useContext
} from 'react';
import { Button } from '../../elements/Button';
import { Collapse } from '../Collapse';
import { TreeContext } from './TreeContext';
import { twMerge } from 'tailwind-merge';
import { TreeTheme } from './TreeTheme';
import { useComponentTheme } from '../../utils';

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

  /**
   * Theme for the Tree
   */
  theme?: TreeTheme;
}

export const TreeNode: FC<Partial<TreeNodeProps>> = ({
  children,
  className,
  label,
  disabled,
  expanded: expandedProp,
  onExpand,
  onCollapse,
  theme: customTheme
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

  const theme: TreeTheme = useComponentTheme('tree', customTheme);

  return (
    <li className={twMerge(theme.node.base)}>
      <div className={theme.nodeBlock}>
        {hasChildren && (
          <Button
            size="small"
            disabled={disabled}
            variant="text"
            title={expanded ? 'Collapse' : 'Expand'}
            className={twMerge(
              theme.node.button.base,
              disabled && theme.node.disabled
            )}
            onClick={onButtonClick}
          >
            {expanded ? expandedIcon : collapsedIcon}
          </Button>
        )}
        <span
          className={twMerge(
            theme.node.label,
            !hasChildren && theme.node.leaf,
            disabled && theme.node.disabled
          )}
        >
          {label}
        </span>
      </div>
      {hasChildren && (
        <Collapse expanded={expanded}>
          {() => <ul className={theme.subtree}>{children}</ul>}
        </Collapse>
      )}
    </li>
  );
};
