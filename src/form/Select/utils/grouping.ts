import { SelectOptionProps } from '@/form/Select/SelectOption';

export interface GroupOptions {
  /** The list of computed groups for the provided options. */
  groups: GroupOption[];
  /** The total number of items across all groups. */
  itemsCount: number;
  /** Whether the options resulted in any groups being created. */
  hasGroups: boolean;
}

export interface GroupOption {
  /** The starting index of the group within the flattened option list. */
  offset: number;
  /** The position index of this group. */
  index: number;
  /** The option items belonging to this group. */
  items: SelectOptionProps[];
  /** The name of the group. */
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

  const groupsMap = options.reduce((acc, option) => {
    if (!acc[option.group]) {
      acc[option.group] = [];
    }
    acc[option.group].push(option);
    return acc;
  }, {});

  const groupNames = Object.keys(groupsMap);

  if (groupNames.length === 1 && groupNames[0] === 'undefined') {
    return {
      groups: [],
      itemsCount: options.length,
      hasGroups: false
    };
  }

  let index = 0;
  const groups = groupNames.map((key, i) => ({
    offset: 0,
    index: i,
    items: groupsMap[key],
    name: key
  }));

  for (const group of groups) {
    group.offset = index;

    for (const _item of group.items) {
      index++;
    }
  }

  return {
    groups,
    itemsCount:
      groups?.length !== 0
        ? groups.reduce((acc, g) => acc + g.items.length, 0)
        : options.length,
    hasGroups: groups?.length !== 0
  };
}
