function getDataType(data: any) {
  if (data === null || data === undefined) {
    return 'nil';
  }

  if (data instanceof Date) {
    return 'date';
  }

  if (Array.isArray(data)) {
    return 'array';
  }

  if (data != null && data.constructor.name === 'Object') {
    return 'object';
  }

  if (typeof data === 'string') {
    return 'string';
  }

  if (typeof data === 'number') {
    return 'number';
  }

  if (typeof data === 'boolean') {
    return 'boolean';
  }

  return 'unknown';
}

export interface ParseJsonInputs {
  /**
   * The JSON data to parse into a tree structure.
   */
  data: any;
  /**
   * Identifier for the current node, used as a key prefix for descendants.
   * @default 'root'
   */
  id?: string;
  /**
   * Display label for the current node.
   */
  label?: string;
  /**
   * Index of the current node within its parent (used for array items).
   */
  index?: number;
  /**
   * Whether to include nodes with empty values in the parsed tree.
   * @default true
   */
  showEmpty?: boolean;
}

export interface JsonTreeData {
  /** Data type of the node (e.g. `object`, `array`, `string`, `number`). */
  type: string;
  /** Unique identifier for the node, derived from its path. */
  id: string;
  /** Parsed data for the node; an array of child nodes for objects/arrays or the raw value otherwise. */
  data: any;
  /** Display label for the node. */
  label: string;
  /** Index of the node within its parent (used for array items). */
  index?: number;
}

export function parseJsonTree({
  id = 'root',
  data,
  index,
  label,
  showEmpty = true
}: ParseJsonInputs): JsonTreeData {
  const type = getDataType(data);

  if (type === 'object') {
    const keys = Object.keys(data);
    const result = keys.reduce((parsedItems, key, idx) => {
      const value = data[key];
      const childParsed = parseJsonTree({
        data: value,
        id: `${id}.${key}`,
        index: idx,
        label: key,
        showEmpty
      });

      if (showEmpty || (!showEmpty && childParsed !== null)) {
        parsedItems.push(childParsed);
      }

      return parsedItems;
    }, []);

    let labelValue = index !== undefined ? `${index}` : 'root';
    if (label !== undefined) {
      labelValue = label;
    }

    return {
      type,
      id,
      data: result,
      label: labelValue,
      index
    };
  } else if (type === 'array') {
    const result = data.map((item, idx) =>
      parseJsonTree({
        data: item,
        id: `${id}[${idx}]`,
        index: idx,
        showEmpty
      })
    );

    return {
      type,
      id,
      data: result,
      label,
      index
    };
  } else {
    return {
      type,
      id,
      data,
      label,
      index
    };
  }
}
