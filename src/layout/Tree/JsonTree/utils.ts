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
  data: any;
  id?: string;
  label?: string;
  index?: number;
  showEmpty?: boolean;
}

export interface JsonTreeData {
  type: string;
  id: string;
  data: any;
  label: string;
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

    return {
      type,
      id,
      data: result,
      label: index !== undefined ? `${index}` : 'root',
      index
    };
  } else if (type === 'array') {
    const result = data.map((item, idx) =>
      parseJsonTree({ data: item, id: `${id}[${idx}]`, index: idx, showEmpty })
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
