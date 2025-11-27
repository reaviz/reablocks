/**
 * Options for color generation from string
 */
export interface ColorOptions {
  /**
   * Saturation value (0-100), defaults to 65
   */
  saturation?: number;
  /**
   * Lightness value (0-100), defaults to 50
   */
  lightness?: number;
  /**
   * Alpha value (0-100), defaults to 100 (opaque)
   */
  alpha?: number;
}

/**
 * Simple hash function to generate a consistent number from a string
 * This is a variant of the DJB2 hash algorithm
 */
function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0; // Convert to unsigned 32-bit integer
}

/**
 * Generates a consistent color from a string input
 * @param input - The string to generate a color from
 * @param options - Optional color customization options
 * @returns HSL or HSLA color string
 */
export function generateColor(input: string, options?: ColorOptions): string {
  const saturation = options?.saturation ?? 65;
  const lightness = options?.lightness ?? 50;
  const alpha = options?.alpha ?? 100;

  // Generate a hash from the input string
  const hash = hashString(input);

  // Use the hash to generate a hue value (0-360)
  const hue = hash % 360;

  // Return HSL or HSLA format
  if (alpha === 100) {
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } else {
    const alphaDecimal = alpha / 100;
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alphaDecimal})`;
  }
}
