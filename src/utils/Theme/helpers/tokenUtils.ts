/**
 * Gets the theme name from the document element.
 * @returns The theme name.
 */
export const getThemeName = (): string => {
  const themeClassname = Array.from(document.documentElement.classList).find(
    className => className.startsWith('theme-'),
  );
  return themeClassname ? themeClassname.replace('theme-', '') : 'dark';
};

/**
 * Observes class attribute changes on the document element to detect theme switching.
 * @param callback - Function called with the new theme ("light" or "dark") whenever the theme changes.
 * @returns The MutationObserver instance (can be disconnected later via observer.disconnect()).
 */
export const observeThemeSwitcher = (
  callback: (theme: string) => void,
): MutationObserver => {
  const targetElement = document.documentElement;

  if (!targetElement) {
    throw new Error('Document element not found');
  }

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        const theme = getThemeName();
        callback(theme);
      }
    });
  });

  observer.observe(targetElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return observer;
};

/**
 * Extracts the variables from a CSS rule.
 * @param rule - The CSS rule to extract the variables from.
 * @param computedStyles - The computed styles of the document.
 * @returns The variables extracted from the CSS rule.
 */
const extractVariablesFromRule = (
  rule: CSSStyleRule,
  computedStyles: CSSStyleDeclaration,
) => {
  const variables: string[] = Array.from(rule.style).filter(prop =>
    prop.startsWith('--'),
  );
  return variables.reduce(
    (acc, variable) => {
      acc[variable] = computedStyles.getPropertyValue(variable).trim();
      return acc;
    },
    {} as Record<string, string>,
  );
};

/**
 * Gets the theme variables from the document.
 * @returns The theme variables.
 */
export const getThemeVariables = (): Record<string, string> => {
  const computedStyles = getComputedStyle(document.documentElement);

  function getMatchingStyleRules(cssRules: CSSRuleList): CSSStyleRule[] {
    return Array.from(cssRules).reduce((acc, rule) => {
      if (
        rule instanceof CSSStyleRule &&
        rule.selectorText === ':root, :host'
      ) {
        acc.push(rule);
      }
      if ('cssRules' in rule && (rule.cssRules as CSSRuleList).length > 0) {
        acc.push(...getMatchingStyleRules(rule.cssRules as CSSRuleList));
      }
      return acc;
    }, [] as CSSStyleRule[]);
  }

  const cssRules: CSSStyleRule[] = Array.from(document.styleSheets).flatMap(
    (styleSheet: CSSStyleSheet) => {
      try {
        return getMatchingStyleRules(styleSheet.cssRules);
      } catch (error) {
        // In case of cross-origin issues, ignore this stylesheet
        return [];
      }
    },
  );
  const selectorVariablesMap: Record<string, Record<string, string>> = {};
  cssRules.forEach((rule, index) => {
    const variableMap = extractVariablesFromRule(rule, computedStyles);
    selectorVariablesMap[`${rule.selectorText}-${index}`] = variableMap;
  });

  const variables = Object.entries(selectorVariablesMap)
    .map(([, tokens]) => tokens)
    .reduce((acc, item) => ({ ...acc, ...item }), {});

  return variables;
};

/**
 * Gets the theme variable from the document.
 * @param variable - The variable to get the value of.
 * @returns The value of the variable.
 */
export const getThemeVariable = (variable: string): string => {
  const computedStyles = getComputedStyle(document.documentElement);

  return computedStyles.getPropertyValue(variable).trim();
};
