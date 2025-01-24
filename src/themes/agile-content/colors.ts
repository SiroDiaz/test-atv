// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colorTypes = ['primary', 'neutral', 'positive', 'negative'] as const;

export type ThemeColors = typeof colorTypes[number];

export type Color = Record<ThemeColors, string>;

export const colors: Color = {
  primary: "#FF0000",
  neutral: "#000000",
  positive: "#00FF00",
  negative: "#FF0000",
};

export default colors;
