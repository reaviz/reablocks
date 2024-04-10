/**
 * Given a theme, extract the things we need for the theme builder.
 */
export function extractTheme(config) {
  const colors = { ...config.colors };

  // Delete simple things
  delete colors['inherit'];
  delete colors['transparent'];
  delete colors['current'];

  return {
    colors,
    borderRadius: config.borderRadius,
    boxShadow: config.boxShadow,
    spacing: config.spacing,
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    fontWeight: config.fontWeight
  };
}
