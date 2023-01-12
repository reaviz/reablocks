import { SelectOptionProps } from '../SelectOption';
import groupBy from 'lodash/groupBy';
import sumBy from 'lodash/sumBy';

export interface GroupOptions {
  groups: GroupOption[];
  itemsCount: number;
  hasGroups: boolean;
}

export interface GroupOption {
  offset: number;
  index: number;
  items: SelectOptionProps[];
  name: string;
}

export function getGroups(options: SelectOptionProps[]): GroupOptions {
  if (!options?.length) {
    return {
      groups: [],
      itemsCount: 0,
      hasGroups: false
    };
  }

  const groupsMap = groupBy(options, t => t.group);
  const groupNames = Object.keys(groupsMap);

  if (groupNames.length === 1 && groupNames[0] === 'undefined') {
    return {
      groups: [],
      itemsCount: options.length,
      hasGroups: false
    };
  }

  let index = 0;
  const groups = Object.entries(groupsMap).map(([key, value], index) => ({
    offset: 0,
    index,
    items: value,
    name: key
  }));

  for (const group of groups) {
    group.offset = index;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _item of group.items) {
      index++;
    }
  }

  return {
    groups,
    itemsCount:
      groups?.length !== 0
        ? sumBy(groups, g => g.items.length)
        : options.length,
    hasGroups: groups?.length !== 0
  };
}
