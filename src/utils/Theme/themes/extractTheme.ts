/**
 * Filter variables by prefix.
 * @param config - The config to filter.
 * @param prefix - The prefix to filter by.
 * @returns The filtered variables.
 */
const filterVariablesByPrefix = (
  config: Record<string, string>,
  prefix: string
) =>
  Object.keys(config).reduce(
    (filteredColors, tokenKey) => {
      if (tokenKey.startsWith(prefix)) {
        filteredColors[tokenKey] = config[tokenKey];
      }
      return filteredColors;
    },
    {} as Record<string, string>
  );

/**
 * Given a theme, extract the things we need for the theme builder.
 */
export function extractTheme(config: Record<string, string>) {
  const colors = filterVariablesByPrefix(config, '--color');
  const borderRadius = filterVariablesByPrefix(config, '--radius');
  const boxShadow = filterVariablesByPrefix(config, '--shadow');
  const fontSize = filterVariablesByPrefix(config, '--text');
  const spacing = filterVariablesByPrefix(config, '--spacing');
  const fontFamily = filterVariablesByPrefix(config, '--font-family');
  const fontWeight = filterVariablesByPrefix(config, '--font-weight');

  return {
    colors,
    borderRadius,
    boxShadow,
    spacing,
    fontFamily,
    fontSize,
    fontWeight
  };
}
