import { ThemeColors, ThemeSizes, ThemeBreakpoints } from "./theme";

// const getSizeFromKeyName = (key: typeof ThemeSizes.componentSizes[number]) => ThemeSizes.componentSizes[key];

type Theme = {
  colors: ThemeColors.Color;
  breakpoints: ThemeBreakpoints.Breakpoints;
  typography: {
    // weight: ThemeTypography.FontWeights;
    fontSize: (size: ThemeSizes.ComponentSize, units: 'rem' | 'px') => string;
  };
  shadows: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
};

const theme: Theme = {
  colors: ThemeColors.colors,
  breakpoints: ThemeBreakpoints.breakpoints,
  typography: {
    // weight: ThemeTypography.fontWeights,
    fontSize: (size: ThemeSizes.ComponentSize, units = 'px') => `${(size)}${units}`,
  },
  shadows: {
    xs: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    md: "0px 4px 8px rgba(0, 0, 0, 0.05)",
    lg: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    xl: "0px 16px 32px rgba(0, 0, 0, 0.05)",
    "2xl": "0px 32px 64px rgba(0, 0, 0, 0.05)",
  },
};
export default theme;
