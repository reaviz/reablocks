/**
 * Given a theme, extract the things we need for the theme builder.
 */
export function extractTheme(config, theme) {
  const colors = { ...config.colors };
  // Delete palette colors
  delete colors['primary'];
  delete colors['secondary'];
  delete colors['success'];
  delete colors['error'];
  delete colors['warning'];
  delete colors['info'];
  delete colors['disabled'];
  delete colors['light'];
  delete colors['dark'];

  const palettes = { ...theme.theme.extend.colors };
  palettes['disabled'] = [palettes['disabled']];

  return {
    colors,
    palettes,
    borderRadius: config.borderRadius,
    boxShadow: config.boxShadow,
    spacing: config.spacing,
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    fontWeight: config.fontWeight
  };
}
